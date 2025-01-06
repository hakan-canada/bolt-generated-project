// Update fetchHubspotContacts to accept timestamp
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
