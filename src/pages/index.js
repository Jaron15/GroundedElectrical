import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Rest of the content will go here */}
      <main className="container mx-auto ">
      <Hero />
        {/* Other sections/components will follow */}
      </main>
    </div>
  );

}
