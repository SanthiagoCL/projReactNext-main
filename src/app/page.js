'use client'

import{useEffect} from'react';
import{useRouter} from'next/navigation';

export default function Home(){
  const router=useRouter();
  useEffect(
    () => {
      const token= 'fdfggfgdfgfd'; // Simulando a obtenção do token
      if (token) 
        router.push('/default');     
      else
      router.push('/login')
    },[router]
  );
  return null;
}