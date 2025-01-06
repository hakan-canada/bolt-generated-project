import { fetchOrganicKeywords } from './api'
    import { supabase } from './supabase'
    import { matchContactsWithKeywords } from './urlUtils'

    export const processKeywordsForContacts = async (contacts, propertyUrl) => {
      try {
        // Get stored tokens
        const { data: tokens } = await supabase
          .from('tokens')
          .select('*')
          .single()

        if (!tokens) {
          throw new Error('No authentication tokens found')
        }

        // Fetch organic keywords
        const keywords = await fetchOrganicKeywords(tokens.google_access_token, propertyUrl)

        // Match contacts with keywords
        const matchedContacts = matchContactsWithKeywords(contacts, keywords)

        // Update HubSpot contacts
        await updateHubspotContacts(tokens.hubspot_access_token, matchedContacts)

        return matchedContacts
      } catch (error) {
        console.error('Error processing keywords:', error)
        throw error
      }
    }

    // Rest of the processor.js remains the same
