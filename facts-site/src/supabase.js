import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qwbkpqureyjrmcmwnfdq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3YmtwcXVyZXlqcm1jbXduZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTE2NDYsImV4cCI6MTk4Njc2NzY0Nn0.bB_fCfsilW5JdUsjolbzhTw3gWPG9Vk7u0Eh-fcjgZs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
