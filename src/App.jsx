import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import AuthCallback from './pages/AuthCallback'
    import Dashboard from './pages/Dashboard'
    import GoogleAuth from './pages/GoogleAuth'

    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/google/callback" element={<GoogleAuth />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      )
    }
