/*
  # Remove all prayer times policies
  
  1. Changes
    - Drop all existing policies
    - Disable RLS completely
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can read prayer times" ON prayer_times;
DROP POLICY IF EXISTS "Authenticated users can update prayer times" ON prayer_times;
DROP POLICY IF EXISTS "Authenticated users can insert prayer times" ON prayer_times;

-- Disable RLS
ALTER TABLE prayer_times DISABLE ROW LEVEL SECURITY;

-- Ensure we have at least one row of prayer times
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '05:30', '13:15', '16:45', '19:45', '21:15', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times LIMIT 1);
