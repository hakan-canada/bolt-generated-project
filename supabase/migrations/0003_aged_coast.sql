/*
  # Fix prayer times permissions

  1. Changes
    - Drop existing RLS policies
    - Add new policies for public read access and admin updates
    - Add admin role check function
  
  2. Security
    - Enable RLS on prayer_times table
    - Add policy for public read access
    - Add policy for admin updates
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON prayer_times;
DROP POLICY IF EXISTS "Allow authenticated users to update" ON prayer_times;

-- Create admin check function
CREATE OR REPLACE FUNCTION auth.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM auth.users
    WHERE id = auth.uid()
    AND email = 'anatolianorthyork@gmail.com'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
ON prayer_times
FOR SELECT
TO public
USING (true);

-- Allow admin updates
CREATE POLICY "Allow admin updates"
ON prayer_times
FOR UPDATE
TO authenticated
USING (auth.is_admin())
WITH CHECK (auth.is_admin());
