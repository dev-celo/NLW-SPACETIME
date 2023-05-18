import { User } from 'lucide-react';
import nlwLogo from '../assets/nlw-spacetime-logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-2">
      {/* Left */}
      <div className="flex flex-col relative overflow-hidden items-start justify-between px-28 py-16 border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"/>

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {/* Sign In */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug"><span className="underline">Crie sua conta</span> e salve suas memórias!</p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt={"NLW spacetime"} />

          <div className="max-w-[420px] space-y-2">
            <h1 className="font-bold leading-tight text-5xl text-gray-50">Sua cápsula do tempo</h1>
            <p className="text-4xl leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a className='uppercase inline-block rounded-full bg-green-500 px-5 py-3 text-sm font-alt leading-none text-gray-900 hover:bg-green-600' href="">Cadastrar Lembranças</a>
        </div>

        {/* copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da <a target="_blank" rel="noreferrer" className="underline hover:text-gray-100" href="https://rocketseat.com.br">Rocketseat</a>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a {' '}
            <a className="underline hover:text-gray-50" href="">criar agora</a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
