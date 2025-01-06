import axios from 'axios'
    import { supabase } from './supabase'

    const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI

    export const getGoogleAuthUrl = () => {
      const params = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: GOOGLE_REDIRECT_URI,
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/webmasters.readonly',
        access_type: 'offline',
        prompt: 'consent'
      })
      return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
    }

    export const exchangeGoogleCode = async (code) => {
      try {
        const { data } = await axios.post('https://oauth2.googleapis.com/token', null, {
          params: {
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
            redirect_uri: GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code'
          }
        })

        await supabase
          .from('tokens')
          .upsert({
            google_access_token: data.access_token,
            google_refresh_token: data.refresh_token,
            expires_in: data.expires_in
          })

        return data
      } catch (error) {
        console.error('Error exchanging Google code:', error)
        throw error
      }
    }
