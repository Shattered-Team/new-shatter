const supabaseUrl = "https://fffwukshwgrcdyqmvahg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZnd1a3Nod2dyY2R5cW12YWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzOTkxMjAsImV4cCI6MjA0Njk3NTEyMH0.MsMeFMkrJCeJzRFWMZXM-CZu8gwaScV7feentsgMQvI";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

async function LTA(Email, Password) {
  //Login To Account
  const { user, error } = await supabaseClient.auth.signInWithPassword({
    email: Email,
    password: Password,
  });

  if (error) {
    alert("Error signing in: " + error.message);
  } else {
    console.log("User signed in:", user);
    alert("Signed in successfully!");
    window.location.href = "../";
  }
}

async function loggedIn() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
      return true;
  } else {
    return false;
  }
}

function LOA() {
  //Logout Of Accout
  supabaseClient.auth.signOut();
}