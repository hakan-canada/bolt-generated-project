/*
  # Update prayer times schema

  1. Changes
    - Rename khutbah and iqamah columns to jumuah_khutbah and jumuah_iqamah
    - Update initial prayer times with more accurate values

  2. Security
    - Maintain existing RLS policies
*/

-- Rename columns
ALTER TABLE prayer_times 
  RENAME COLUMN khutbah TO jumuah_khutbah;

ALTER TABLE prayer_times 
  RENAME COLUMN iqamah TO jumuah_iqamah;

-- Update initial prayer times with more accurate values
UPDATE prayer_times
SET 
  fajr = '05:30',
  dhuhr = '13:15',
  asr = '16:45',
  maghrib = '19:45',
  isha = '21:15',
  jumuah_khutbah = '13:15',
  jumuah_iqamah = '13:45'
WHERE id = (SELECT id FROM prayer_times ORDER BY created_at DESC LIMIT 1);
