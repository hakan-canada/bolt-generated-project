export const normalizeUrl = (url) => {
      if (!url) return ''
      
      try {
        // Remove protocol and www
        let normalized = url
          .replace(/^(https?:\/\/)?(www\.)?/, '')
          .toLowerCase()

        // Remove query parameters and fragments
        normalized = normalized.split(/[?#]/)[0]

        // Remove trailing slashes
        normalized = normalized.replace(/\/+$/, '')

        // Remove common tracking parameters that might be in the path
        normalized = normalized.replace(/(\/[^/]+)(?:\?.*)?$/, '$1')

        return normalized
      } catch (error) {
        console.error('Error normalizing URL:', url, error)
        return ''
      }
    }

    export const matchContactsWithKeywords = (contacts, searchData) => {
      return contacts.map(contact => {
        const contactPage = contact.properties.hs_analytics_first_url || ''
        const normalizedContactPage = normalizeUrl(contactPage)

        const matchedKeywords = searchData.filter(row => {
          const searchConsolePage = normalizeUrl(row.keys[1])
          return normalizedContactPage === searchConsolePage
        })

        // Sort by clicks descending
        const sortedKeywords = matchedKeywords.sort((a, b) => b.clicks - a.clicks)

        return {
          ...contact,
          properties: {
            ...contact.properties,
            matched_keywords: sortedKeywords.map(k => ({
              keyword: k.keys[0],
              page: k.keys[1],
              clicks: k.clicks,
              impressions: k.impressions,
              ctr: k.ctr,
              position: k.position
            })),
            normalized_url: normalizedContactPage,
            first_keyword: sortedKeywords[0]?.keys[0] || null,
            last_keyword: sortedKeywords[sortedKeywords.length - 1]?.keys[0] || null,
            total_clicks: sortedKeywords.reduce((sum, k) => sum + k.clicks, 0),
            total_impressions: sortedKeywords.reduce((sum, k) => sum + k.impressions, 0)
          }
        }
      })
    }
