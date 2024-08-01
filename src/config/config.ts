export const config = () => ({
  port: process.env.PORT || 3000,
  supabase_url: process.env.SUPABASE_URL,
  api_key: process.env.API_KEY,
});
