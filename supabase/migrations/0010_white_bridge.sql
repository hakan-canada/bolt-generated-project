/*
  # Add insert permissions for prayer times
  
  1. Changes
    - Add INSERT policy for authenticated users
    - Keep existing read/update policies
*/

-- Create insert policy for authenticated users
CREATE POLICY "Authenticated users can insert prayer times"
ON prayer_times
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Ensure we have at least one row of prayer times
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '05:30', '13:15', '16:45', '19:45', '21:15', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times LIMIT 1);
