import axios from 'axios'
    import { supabase } from './supabase'

    const HUBSPOT_CLIENT_ID = import.meta.env.VITE_HUBSPOT_CLIENT_ID
    const HUBSPOT_REDIRECT_URI = import.meta.env.VITE_HUBSPOT_REDIRECT_URI

    export const getHubspotAuthUrl = () => {
      return `https://app.hubspot.com/oauth/authorize?client_id=${HUBSPOT_CLIENT_ID}&scope=contacts%20content%20automation&redirect_uri=${HUBSPOT_REDIRECT_URI}`
    }

    export const exchangeHubspotCode = async (code) => {
      try {
        const { data } = await axios.post('https://api.hubapi.com/oauth/v1/token', null, {
          params: {
            grant_type: 'authorization_code',
            client_id: HUBSPOT_CLIENT_ID,
            client_secret: import.meta.env.VITE_HUBSPOT_CLIENT_SECRET,
            redirect_uri: HUBSPOT_REDIRECT_URI,
            code
          }
        })

        await supabase
          .from('tokens')
          .upsert({
            hubspot_access_token: data.access_token,
            hubspot_refresh_token: data.refresh_token,
            expires_in: data.expires_in
          })

        return data
      } catch (error) {
        console.error('Error exchanging HubSpot code:', error)
        throw error
      }
    }
