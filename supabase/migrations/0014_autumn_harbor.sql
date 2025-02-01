/*
  # Fix prayer times RLS and permissions

  1. Changes
    - Enable RLS on prayer_times table
    - Add public read access policy
    - Add authenticated update policy
  
  2. Security
    - Enable RLS
    - Allow anyone to read prayer times
    - Allow authenticated users to update prayer times
*/

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
ON prayer_times
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated update"
ON prayer_times
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Ensure default prayer times exist
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '06:30', '12:30', '14:30', '16:40', '19:00', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times LIMIT 1);
