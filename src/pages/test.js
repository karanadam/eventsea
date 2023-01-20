
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
    <main>
      
      Hello {session?<>
      <Image src={session.user.image} height={100} width={100} />
      <p>{session.user.name}</p>
      <button onClick={signOut}>Sign Out</button>
      </>:
      <>
      <button onClick={signIn}>Sign In</button>
      </>}
      
    </main>
    </>
  )
}
