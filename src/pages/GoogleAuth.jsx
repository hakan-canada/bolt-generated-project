import { useEffect } from 'react'
    import { useNavigate, useSearchParams } from 'react-router-dom'
    import { exchangeGoogleCode } from '../lib/google'

    export default function GoogleAuth() {
      const [searchParams] = useSearchParams()
      const code = searchParams.get('code')
      const navigate = useNavigate()

      useEffect(() => {
        const handleAuth = async () => {
          try {
            await exchangeGoogleCode(code)
            navigate('/dashboard')
          } catch (error) {
            console.error('Google authentication failed:', error)
            navigate('/')
          }
        }

        if (code) {
          handleAuth()
        }
      }, [code, navigate])

      return <div>Authenticating with Google...</div>
    }
