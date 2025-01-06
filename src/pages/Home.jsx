import { useEffect } from 'react'
    import { getHubspotAuthUrl } from '../lib/hubspot'
    import { getGoogleAuthUrl } from '../lib/google'

    export default function Home() {
      useEffect(() => {
        // Check if user is already authenticated
        // Redirect to dashboard if authenticated
      }, [])

      return (
        <div>
          <h1>HubSpot Marketplace App</h1>
          <a href={getHubspotAuthUrl()}>Connect HubSpot</a>
          <a href={getGoogleAuthUrl()}>Connect Google Search Console</a>
        </div>
      )
    }
