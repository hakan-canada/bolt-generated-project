/*
  # Fix prayer times table permissions

  1. Changes
    - Reset RLS policies for prayer_times table
    - Add public read access without admin role requirement
    - Remove admin role requirements
  
  2. Security
    - Enable RLS
    - Allow public read access
*/

-- Reset RLS and policies
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can read prayer times" ON prayer_times;
DROP POLICY IF EXISTS "Authenticated users can update prayer times" ON prayer_times;
DROP POLICY IF EXISTS "Authenticated users can insert prayer times" ON prayer_times;

-- Create new public read policy without admin role requirement
CREATE POLICY "Public read access for prayer times"
ON prayer_times
FOR SELECT
TO public
USING (true);

-- Ensure we have default prayer times
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '05:30', '13:15', '16:45', '19:45', '21:15', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times LIMIT 1);
