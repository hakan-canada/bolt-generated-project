/*
  # Fix prayer times permissions
  
  1. Changes
    - Drop existing policies
    - Create simple read/write policies
    - Remove any admin-specific functionality
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can read prayer times" ON prayer_times;
DROP POLICY IF EXISTS "Authenticated users can update prayer times" ON prayer_times;

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Create simple read policy
CREATE POLICY "Anyone can read prayer times"
ON prayer_times
FOR SELECT
TO public
USING (true);

-- Create simple update policy for authenticated users
CREATE POLICY "Any authenticated user can update prayer times"
ON prayer_times
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Ensure we have at least one row of prayer times
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '05:30', '13:15', '16:45', '19:45', '21:15', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times LIMIT 1);
