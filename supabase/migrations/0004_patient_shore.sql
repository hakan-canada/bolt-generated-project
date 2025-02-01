-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON prayer_times;
DROP POLICY IF EXISTS "Allow authenticated users to update" ON prayer_times;
DROP POLICY IF EXISTS "Allow admin updates" ON prayer_times;

-- Drop admin check function if it exists
DROP FUNCTION IF EXISTS auth.is_admin();

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
ON prayer_times
FOR SELECT
TO public
USING (true);
