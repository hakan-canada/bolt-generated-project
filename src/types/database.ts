export interface PrayerTimes {
  id: string;
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  jumuah_khutbah: string;
  jumuah_iqamah: string;
  created_at?: string;
  updated_at?: string;
}

export interface Database {
  public: {
    Tables: {
      prayer_times: {
        Row: PrayerTimes;
        Insert: Omit<PrayerTimes, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<PrayerTimes, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}
