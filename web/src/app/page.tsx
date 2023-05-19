import { cookies } from 'next/headers'
import { Copyright } from '@/components/Copyright';
import { EmptyMemories } from '@/components/EmptyMemories';
import { Hero } from '@/components/Hero';
import { Signin } from '@/components/Signin';
import { Profile } from '@/components/Profile';

export default function Home() {
  const isAuthenticated = cookies().has('token')
  return (
    <main className="min-h-screen grid grid-cols-2">
      {/* Left */}
      <div className="flex flex-col relative overflow-hidden items-start justify-between px-28 py-16 border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"/>

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {/* Sign In */}
        {isAuthenticated ? <Profile /> : <Signin />}

        {/* Hero */}
        <Hero />

        {/* copyright */}
        <Copyright />
      </div>
      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  );
}
