import { createClient } from '@supabase/supabase-js';

// Export supabaseUrl for use in other modules
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a default Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create a Supabase client with an access token
const supabaseClient = async (supabaseAccessToken) => {
  const client = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        // Fixed the typo: Changed 'Baerer' to 'Bearer' and used correct template literals
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });
  return client;
};

export default supabaseClient;
