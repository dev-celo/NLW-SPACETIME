import nlwLogo from '../assets/nlw-spacetime-logo.svg';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="space-y-5">
          <Image src={nlwLogo} alt={"NLW spacetime"} />

          <div className="max-w-[420px] space-y-2">
            <h1 className="font-bold leading-tight text-5xl text-gray-50">Sua cápsula do tempo</h1>
            <p className="text-4xl leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a className='uppercase inline-block rounded-full bg-green-500 px-5 py-3 text-sm font-alt leading-none text-gray-900 hover:bg-green-600' href="">Cadastrar Lembranças</a>
        </div>
  )
}