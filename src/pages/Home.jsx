import { useEffect } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { getHubspotAuthUrl } from '../lib/hubspot'
    import { getGoogleAuthUrl } from '../lib/google'
    import { supabase } from '../lib/supabase'

    export default function Home() {
      const navigate = useNavigate()

      useEffect(() => {
        const checkAuth = async () => {
          const { data: tokens } = await supabase
            .from('tokens')
            .select('*')
            .single()

          if (tokens?.hubspot_access_token && tokens?.google_access_token) {
            navigate('/dashboard')
          }
        }

        checkAuth()
      }, [navigate])

      return (
        <div className="home-container">
          <h1>HubSpot Marketplace App</h1>
          <div className="auth-buttons">
            <a href={getHubspotAuthUrl()} className="auth-button">
              Connect HubSpot
            </a>
            <a href={getGoogleAuthUrl()} className="auth-button">
              Connect Google Search Console
            </a>
          </div>
        </div>
      )
    }
