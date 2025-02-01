import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import type { PrayerTimes as PrayerTimesType } from '../lib/prayerTimes';
import { defaultPrayerTimes } from '../lib/prayerTimes';
import { formatTime } from '../lib/timeUtils';

function getNextPrayer(times: PrayerTimesType): { name: string; timeRemaining: string } {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  const timeToMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const prayers = [
    { name: 'Fajr', time: timeToMinutes(times.fajr) },
    { name: 'Dhuhr', time: timeToMinutes(times.dhuhr) },
    { name: 'Asr', time: timeToMinutes(times.asr) },
    { name: 'Maghrib', time: timeToMinutes(times.maghrib) },
    { name: 'Isha', time: timeToMinutes(times.isha) }
  ];

  let nextPrayer = prayers[0];
  for (const prayer of prayers) {
    if (prayer.time > currentTime) {
      nextPrayer = prayer;
      break;
    }
  }

  const timeRemaining = nextPrayer.time - currentTime;
  const hours = Math.floor(timeRemaining / 60);
  const minutes = timeRemaining % 60;

  return {
    name: nextPrayer.name,
    timeRemaining: `${hours}h ${minutes}m`
  };
}

export function Display() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesType>(defaultPrayerTimes);

  useEffect(() => {
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Load prayer times
    const loadPrayerTimes = () => {
      const savedTimes = localStorage.getItem('prayerTimes');
      if (savedTimes) {
        setPrayerTimes(JSON.parse(savedTimes));
      }
    };

    loadPrayerTimes();

    // Refresh page every hour to ensure data stays fresh
    const refreshTimer = setInterval(() => {
      window.location.reload();
    }, 60 * 60 * 1000);

    return () => {
      clearInterval(timer);
      clearInterval(refreshTimer);
    };
  }, []);

  const nextPrayer = getNextPrayer(prayerTimes);
  const isFriday = currentTime.getDay() === 5;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Anatolia Mosque</h1>
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <MapPin className="mr-2" />
            73 Alness St, North York, ON M3J 2H2
          </div>
          <div className="flex items-center justify-center">
            <div className="text-3xl text-gray-800">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} {' '}
            </div>
            <div className="text-3xl text-blue-600 font-mono ml-2">
              {currentTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
              })}
            </div>
          </div>
        </div>

        {/* Jumu'ah Alert on Fridays */}
        {isFriday && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-800">Jum'ah Prayer Today</h2>
              <p className="text-orange-600">Please note: There is only one Jum'ah prayer service</p>
            </div>
          </div>
        )}

        {/* Next Prayer Alert */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="text-2xl text-green-800 text-center">
            Next Prayer: {nextPrayer.name}
          </div>
          <div className="text-xl text-green-700 text-center">
            Time Remaining: {nextPrayer.timeRemaining}
          </div>
        </div>

        {/* Prayer Times Grid */}
        {isFriday ? (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Fajr</h3>
              <p className="text-4xl text-blue-600">{formatTime(prayerTimes.fajr)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Khutbah</h3>
              <p className="text-4xl text-blue-600">{formatTime(prayerTimes.jumuah_khutbah)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Iqamah</h3>
              <p className="text-4xl text-blue-600">{formatTime(prayerTimes.jumuah_iqamah)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Asr</h3>
              <p className="text-4xl text-blue-600">{formatTime(prayerTimes.asr)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Maghrib</h3>
              <p className="text-4xl text-blue-600">{formatTime(prayerTimes.maghrib)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Isha</h3>
              <p className="text-4xl text-blue-600">{formatTime(prayerTimes.isha)}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4 mb-8">
            {[
              { name: 'Fajr', time: prayerTimes.fajr },
              { name: 'Dhuhr', time: prayerTimes.dhuhr },
              { name: 'Asr', time: prayerTimes.asr },
              { name: 'Maghrib', time: prayerTimes.maghrib },
              { name: 'Isha', time: prayerTimes.isha }
            ].map((prayer) => (
              <div key={prayer.name} className="bg-gray-50 rounded-lg p-6 text-center border">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{prayer.name}</h3>
                <p className="text-4xl text-blue-600">{formatTime(prayer.time)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <div className="flex items-center justify-center space-x-4">
            <span>Powered by</span>
            <a 
              href="https://halalbiz.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              halalbiz.ca
            </a>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://halalbiz.ca/why-halalbiz/"
              alt="HalalBiz QR Code"
              className="w-16 h-16 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
