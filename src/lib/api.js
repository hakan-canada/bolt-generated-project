import axios from 'axios'

    export const fetchHubspotContacts = async (accessToken, sinceTimestamp) => {
      const filters = [{
        propertyName: 'hs_analytics_source',
        operator: 'EQ',
        value: 'ORGANIC'
      }]

      if (sinceTimestamp) {
        filters.push({
          propertyName: 'createdate',
          operator: 'GTE',
          value: sinceTimestamp
        })
      }

      const { data } = await axios.get('https://api.hubapi.com/crm/v3/objects/contacts', {
        params: {
          limit: 50,
          properties: ['email', 'first_keyword', 'last_keyword', 'conversion_path'],
          filterGroups: [{ filters }]
        },
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return data.results
    }

    export const fetchSearchConsoleData = async (accessToken) => {
      try {
        const { data } = await axios.get('https://www.googleapis.com/webmasters/v3/sites', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        return data.siteEntry.map(site => site.siteUrl)
      } catch (error) {
        console.error('Error fetching Search Console properties:', error)
        throw error
      }
    }

    export const fetchOrganicKeywords = async (accessToken, propertyUrl) => {
      try {
        const { data } = await axios.post(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(propertyUrl)}/searchAnalytics/query`,
          {
            startDate: '30daysAgo',
            endDate: 'today',
            dimensions: ['query'],
            rowLimit: 1000
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        return data.rows
      } catch (error) {
        console.error('Error fetching organic keywords:', error)
        throw error
      }
    }
