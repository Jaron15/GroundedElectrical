import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import ReviewSlider from '@/components/ReviewSlider';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <Layout>
     
      {/* Rest of the content will go here */}
      <main className="container mx-auto ">
      <Hero />
        {/* Other sections/components will follow */}
        <Services />
        <ReviewSlider />
      </main>
      
      </Layout>
    </div>
  );

}
