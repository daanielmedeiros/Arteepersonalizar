import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zbymjdmpcudwknnvzdtk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpieW1qZG1wY3Vkd2tubnZ6ZHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTk0MDUsImV4cCI6MjA2MzA3NTQwNX0.94yZvmggSaMBWfbhMbLOnUMK-tLh5cZolh0ZJp3BUto'

export const supabase = createClient(supabaseUrl, supabaseKey) 