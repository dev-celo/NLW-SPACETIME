import { getUser } from '@/lib/auth';
import { User } from 'lucide-react';
import Image from 'next/image';

export function Profile() {
  const { name, avatarUrl } = getUser();
  return (
    <section className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Foto do perfil"
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a className="block text-red-400 hover:text-red-300" href="">Quero Sair</a>
      </p>
    </section>
  );
};