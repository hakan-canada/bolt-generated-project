import React from 'react';
import { Clock } from 'lucide-react';
import { formatTime } from '../lib/timeUtils';

interface PrayerTime {
  name: string;
  time: string;
}

interface PrayerTimesProps {
  times: {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    jumuah_khutbah: string;
    jumuah_iqamah: string;
  };
}

export function PrayerTimes({ times }: PrayerTimesProps) {
  const dailyPrayers: PrayerTime[] = [
    { name: 'Fajr', time: times.fajr },
    { name: 'Dhuhr', time: times.dhuhr },
    { name: 'Asr', time: times.asr },
    { name: 'Maghrib', time: times.maghrib },
    { name: 'Isha', time: times.isha },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
        <Clock className="mr-2" />
        Prayer Times
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Daily Prayers</h3>
          <div className="space-y-3">
            {dailyPrayers.map((prayer) => (
              <div key={prayer.name} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">{prayer.name}</span>
                <span className="text-emerald-700">{formatTime(prayer.time)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Jumu'ah Prayer (Friday)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Khutbah</span>
              <span className="text-emerald-700">{formatTime(times.jumuah_khutbah)}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Iqamah</span>
              <span className="text-emerald-700">{formatTime(times.jumuah_iqamah)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
