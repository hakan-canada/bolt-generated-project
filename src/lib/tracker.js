import { supabase } from './supabase'
    import { fetchHubspotContacts, fetchOrganicKeywords } from './api'
    import { updateHubspotContacts, processKeywordsForContacts } from './processor'

    let intervalId = null
    let lastProcessedTimestamp = null

    export const startTracking = async (propertyUrl) => {
      // Get initial timestamp
      const { data: tokens } = await supabase
        .from('tokens')
        .select('*')
        .single()

      if (!tokens) {
        throw new Error('No authentication tokens found')
      }

      // Get last processed timestamp from Supabase
      const { data: settings } = await supabase
        .from('settings')
        .select('last_processed')
        .single()

      lastProcessedTimestamp = settings?.last_processed || new Date().toISOString()

      // Start tracking interval
      intervalId = setInterval(async () => {
        await processNewContacts(tokens, propertyUrl)
      }, 300000) // Every 5 minutes
    }

    export const stopTracking = () => {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
    }

    const processNewContacts = async (tokens, propertyUrl) => {
      try {
        // Fetch new contacts since last processed
        const newContacts = await fetchHubspotContacts(
          tokens.hubspot_access_token,
          lastProcessedTimestamp
        )

        if (newContacts.length > 0) {
          // Process keywords for new contacts
          const updatedContacts = await processKeywordsForContacts(
            newContacts,
            propertyUrl,
            tokens
          )

          // Update last processed timestamp
          lastProcessedTimestamp = new Date().toISOString()
          await supabase
            .from('settings')
            .upsert({ last_processed: lastProcessedTimestamp })

          return updatedContacts
        }
      } catch (error) {
        console.error('Error processing new contacts:', error)
        throw error
      }
    }
