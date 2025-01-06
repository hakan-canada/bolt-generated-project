import { useEffect } from 'react'
    import { useNavigate, useSearchParams } from 'react-router-dom'
    import { exchangeHubspotCode } from '../lib/hubspot'

    export default function AuthCallback() {
      const [searchParams] = useSearchParams()
      const code = searchParams.get('code')
      const navigate = useNavigate()

      useEffect(() => {
        const handleAuth = async () => {
          try {
            await exchangeHubspotCode(code)
            navigate('/dashboard')
          } catch (error) {
            console.error('Authentication failed:', error)
            navigate('/')
          }
        }

        if (code) {
          handleAuth()
        }
      }, [code, navigate])

      return <div>Authenticating...</div>
    }
