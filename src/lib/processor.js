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

    const updateHubspotContacts = async (accessToken, contacts) => {
      try {
        const batchSize = 10
        const batches = []

        // Split into batches of 10
        for (let i = 0; i < contacts.length; i += batchSize) {
          batches.push(contacts.slice(i, i + batchSize))
        }

        // Process each batch
        for (const batch of batches) {
          await axios.post(
            'https://api.hubapi.com/crm/v3/objects/contacts/batch/update',
            {
              inputs: batch.map(contact => ({
                id: contact.id,
                properties: contact.properties
              }))
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              }
            }
          )
        }
      } catch (error) {
        console.error('Error updating HubSpot contacts:', error)
        throw error
      }
    }
