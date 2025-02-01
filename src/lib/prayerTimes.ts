export interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  jumuah_khutbah: string;
  jumuah_iqamah: string;
}

// Updated prayer times
export const defaultPrayerTimes: PrayerTimes = {
  fajr: '06:30',
  dhuhr: '12:30',
  asr: '14:30',
  maghrib: '16:40',
  isha: '19:00',
  jumuah_khutbah: '12:45',
  jumuah_iqamah: '13:00'
};
