/*
  # Prayer Times Schema

  1. New Tables
    - `prayer_times`
      - `id` (uuid, primary key)
      - `fajr` (time, not null)
      - `dhuhr` (time, not null)
      - `asr` (time, not null)
      - `maghrib` (time, not null)
      - `isha` (time, not null)
      - `khutbah` (time, not null)
      - `iqamah` (time, not null)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Allow public read access
    - Allow authenticated users (admins) to update
*/

CREATE TABLE prayer_times (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fajr time NOT NULL,
  dhuhr time NOT NULL,
  asr time NOT NULL,
  maghrib time NOT NULL,
  isha time NOT NULL,
  khutbah time NOT NULL,
  iqamah time NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insert initial prayer times
INSERT INTO prayer_times (fajr, dhuhr, asr, maghrib, isha, khutbah, iqamah)
VALUES ('06:30', '12:30', '14:30', '16:40', '19:00', '12:45', '13:00');

-- Enable RLS
ALTER TABLE prayer_times ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON prayer_times
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated users to update"
  ON prayer_times
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
