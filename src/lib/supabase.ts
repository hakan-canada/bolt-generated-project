import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database';

const supabaseUrl = 'https://gomzdqwxxnyoejmropqf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbXpkcXd4eG55b2VqbXJvcHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MTY4MjUsImV4cCI6MjA1MDk5MjgyNX0.QcieErECdHB88JvOvedcsZeeEJAyKZo2ULTbYq3zxTA';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
