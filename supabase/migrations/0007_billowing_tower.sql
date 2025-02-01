/*
  # Simplify prayer times policies

  1. Changes
    - Drop all existing policies
    - Create a simple public read-only policy
    - Remove any role-based restrictions
    
  2. Security
    - Enable RLS
    - Allow public read access to all rows
    - No write access for any user (managed through database console)
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Public read access" ON prayer_times;
DROP POLICY IF EXISTS "Allow public read access" ON prayer_times;

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Create simple public read policy with no restrictions
CREATE POLICY "Anyone can read prayer times"
ON prayer_times
FOR SELECT
TO public
USING (true);

-- Ensure we have at least one row of prayer times
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, jumuah_khutbah, jumuah_iqamah)
SELECT '05:30', '13:15', '16:45', '19:45', '21:15', '13:15', '13:45'
WHERE NOT EXISTS (SELECT 1 FROM prayer_times LIMIT 1);
