/*
  # Fix prayer times table access

  1. Changes
    - Drop existing policies
    - Create new simplified public read policy
    - Remove all update policies since admin access is no longer needed
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON prayer_times;

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Create simple public read policy
CREATE POLICY "Public read access"
ON prayer_times
FOR SELECT
TO public
USING (true);

-- Insert default prayer times if none exist
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '05:30', '13:15', '16:45', '19:45', '21:15', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times);
