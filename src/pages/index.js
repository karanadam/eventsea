
import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image"

export default function Home() {
  const user = useUser();
  if(user){
    console.log(user)
  }
  return (
    <>
    <main>
      Hello World
    </main>
    </>
  )
}
