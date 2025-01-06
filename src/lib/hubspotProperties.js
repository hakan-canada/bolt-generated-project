import axios from 'axios'

    export const ensureCustomProperties = async (accessToken) => {
      const properties = [
        {
          name: 'first_keyword',
          label: 'First Organic Keyword',
          type: 'string',
          fieldType: 'text'
        },
        {
          name: 'last_keyword',
          label: 'Last Organic Keyword',
          type: 'string',
          fieldType: 'text'
        },
        {
          name: 'keyword_clicks',
          label: 'Total Keyword Clicks',
          type: 'number',
          fieldType: 'number'
        },
        {
          name: 'keyword_impressions',
          label: 'Total Keyword Impressions',
          type: 'number',
          fieldType: 'number'
        },
        {
          name: 'last_processed',
          label: 'Last Processed Date',
          type: 'datetime',
          fieldType: 'date'
        }
      ]

      try {
        // Check and create each property
        for (const property of properties) {
          await axios.post(
            'https://api.hubapi.com/crm/v3/properties/contacts',
            property,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              }
            }
          )
        }
      } catch (error) {
        // Ignore if property already exists
        if (error.response?.status !== 409) {
          throw error
        }
      }
    }
