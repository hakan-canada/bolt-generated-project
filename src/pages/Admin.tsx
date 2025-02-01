import React, { useState } from 'react';
import type { PrayerTimes } from '../lib/prayerTimes';
import { defaultPrayerTimes } from '../lib/prayerTimes';
import { SEO } from '../components/SEO';
import { Clock } from 'lucide-react';

export function Admin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes>(defaultPrayerTimes);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const form = e.target as HTMLFormElement;
    const password = form.password.value;

    try {
      // Simple password check - in production, use proper authentication
      if (password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        window.location.reload();
      } else {
        throw new Error('Invalid password');
      }
    } catch (error: any) {
      setMessage(error.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  }

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      localStorage.setItem('prayerTimes', JSON.stringify(prayerTimes));
      setMessage('Prayer times updated successfully');
    } catch (error: any) {
      setMessage(error.message || 'Failed to update prayer times');
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('isAdmin');
    window.location.reload();
  }

  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <SEO 
          title="Login - Anatolia Mosque"
          description="Login to update prayer times"
        />
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
            <Clock className="mr-2" />
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            {message && (
              <p className="text-red-500 text-sm">{message}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO 
        title="Admin - Anatolia Mosque"
        description="Update prayer times"
      />
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-emerald-800">Update Prayer Times</h2>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Sign Out
            </button>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(prayerTimes).map(([key, value]) => {
                return (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1 capitalize">
                      {key.replace('_', ' ')}
                    </label>
                    <input
                      type="time"
                      value={value}
                      onChange={(e) =>
                        setPrayerTimes((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                );
              })}
            </div>

            {message && (
              <p className={`text-sm ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Prayer Times'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
