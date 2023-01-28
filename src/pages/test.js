
import Image from "next/image"
import { useSupabaseClient, useSession, useSessionContext, useUser } from "@supabase/auth-helpers-react"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"

export default function Home() {
  const supabase = useSupabaseClient();
  return (
    <>
    <main>
     
      <button onClick={()=>{supabase.auth.signInWithOAuth({provider:"google"})}}>Sign in with Google</button>
      <button onClick={()=>{supabase.auth.signOut()}}>Sign out</button>
    </main>
    </>
  )
}



