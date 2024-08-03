import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jscsnhpnfqhbyzcqcqpl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzY3NuaHBuZnFoYnl6Y3FjcXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2NjIxOTUsImV4cCI6MjAzODIzODE5NX0._yU96x7DSmtP1Jf-OMu2QQPftZroAEwlgO_3gEYZAwQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
