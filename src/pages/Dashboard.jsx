import { useEffect, useState } from 'react'
    import { supabase } from '../lib/supabase'
    import { fetchHubspotContacts, fetchSearchConsoleData } from '../lib/api'
    import { ensureCustomProperties } from '../lib/hubspotProperties'
    import { showSuccess, showError } from '../lib/notifications'
    import { startTracking, stopTracking } from '../lib/tracker'
    import { LoadingSkeleton } from '../components/LoadingSkeleton'
    import { EmptyState } from '../components/EmptyState'
    import { ErrorDisplay } from '../components/ErrorDisplay'

    export default function Dashboard() {
      const [contacts, setContacts] = useState([])
      const [selectedProperty, setSelectedProperty] = useState(null)
      const [properties, setProperties] = useState([])
      const [loading, setLoading] = useState(true)
      const [processing, setProcessing] = useState(false)
      const [tracking, setTracking] = useState(false)
      const [error, setError] = useState(null)

      const initializeDashboard = async () => {
        try {
          setError(null)
          const { data: tokens } = await supabase
            .from('tokens')
            .select('*')
            .single()

          if (!tokens) {
            throw new Error('Please authenticate with HubSpot first')
          }

          await ensureCustomProperties(tokens.hubspot_access_token)
          const hubspotContacts = await fetchHubspotContacts(tokens.hubspot_access_token)
          setContacts(hubspotContacts)

          const searchConsoleProperties = await fetchSearchConsoleData(tokens.google_access_token)
          setProperties(searchConsoleProperties)

          showSuccess('Dashboard loaded successfully')
        } catch (err) {
          console.error('Error initializing dashboard:', err)
          setError(err)
          showError(err.message)
        } finally {
          setLoading(false)
        }
      }

      const handleRefresh = async () => {
        setLoading(true)
        try {
          await initializeDashboard()
          showSuccess('Data refreshed successfully')
        } catch (err) {
          console.error('Error refreshing data:', err)
          setError(err)
          showError('Failed to refresh data')
        } finally {
          setLoading(false)
        }
      }

      useEffect(() => {
        initializeDashboard()
        return () => stopTracking()
      }, [])

      if (loading) {
        return <LoadingSkeleton />
      }

      if (error) {
        return <ErrorDisplay error={error} onRetry={initializeDashboard} />
      }

      if (contacts.length === 0) {
        return (
          <EmptyState
            icon="📭"
            message="No organic contacts found"
          />
        )
      }

      return (
        <div className="dashboard">
          {/* Existing dashboard UI */}
        </div>
      )
    }
