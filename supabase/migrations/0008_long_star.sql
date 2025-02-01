/*
  # Remove admin-specific functionality
  
  1. Changes
    - Drop existing policies
    - Create new policies for authenticated users to update prayer times
    - Ensure public read access remains
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can read prayer times" ON prayer_times;

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read prayer times
CREATE POLICY "Anyone can read prayer times"
ON prayer_times
FOR SELECT
TO public
USING (true);

-- Allow any authenticated user to update prayer times
CREATE POLICY "Authenticated users can update prayer times"
ON prayer_times
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
