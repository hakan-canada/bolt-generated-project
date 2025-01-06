import { Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import Dashboard from './pages/Dashboard'
    import AuthCallback from './pages/AuthCallback'
    import GoogleAuth from './pages/GoogleAuth'

    export default function App() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/google/callback" element={<GoogleAuth />} />
        </Routes>
      )
    }
