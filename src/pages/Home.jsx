import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getGoogleAuthUrl } from '../lib/google'
import { getHubspotAuthUrl } from '../lib/hubspot'
import { supabase } from '../lib/supabase'
import { showError } from '../lib/notifications'

export default function Home() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState(null)
  const [envLoaded, setEnvLoaded] = useState(false)

  useEffect(() => {
    console.log('Environment Variables:', {
      VITE_HUBSPOT_CLIENT_ID: import.meta.env.VITE_HUBSPOT_CLIENT_ID,
      VITE_GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    })
    setEnvLoaded(true)
  }, [])

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: tokens, error } = await supabase
          .from('tokens')
          .select('*')
          .single()
          .headers({
            'Accept': 'application/json'
          })

        if (error) throw error

        if (tokens?.hubspot_access_token && tokens?.google_access_token) {
          navigate('/dashboard')
        }
      } catch (error) {
        console.error('Error checking auth:', error)
        setAuthError('Failed to check authentication status')
        showError('Failed to check authentication status')
      } finally {
        setIsLoading(false)
      }
    }

    if (envLoaded) {
      checkAuth()
    }
  }, [navigate, envLoaded])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (authError) {
    return (
      <div className="home-container">
        <h1>HubSpot Marketplace App</h1>
        <div className="error-message">
          <p>{authError}</p>
          <p>Please check your environment variables and try again.</p>
        </div>
      </div>
    )
  }

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
