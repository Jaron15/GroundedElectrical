import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import ReviewSlider from '@/components/ReviewSlider';
import Head from 'next/head';
import AboutBlurb from '@/components/AboutBlurb';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <title>Grounded Electrical Service - Professional Electrical Solutions</title>
        <meta name="description" content="Expert electrical services for residential and commercial needs. Our licensed electrician provides top-quality installations, repairs, and maintenance." />
        <meta name="keywords" content="electrical services, residential electricians, commercial electricians, electrical repairs, electrical safety inspections, electrical installations, electrical, lights, electrical service, electrician, electricians, grounded, arizona, phoenix, surprise, tempe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
         {/* Open Graph / Facebook */}
         <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.groundedinaz.com/" />
        <meta property="og:title" content="Grounded Electrical Service - Professional Electrical Solutions" />
        <meta property="og:description" content="Licensed and experienced electrician providing reliable electrical services for homes and businesses." />
        <meta property="og:image" content="https://www.groundedinaz.com/hero4.png" /> 
        <meta property="og:site_name" content="Grounded Electrical Service" />

        {/* Google Verification (possibly in future) */}
        <meta name="google-site-verification" content="your_google_verification_code" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.groundedinaz.com/" />
      </Head>
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <Layout>
     
      {/* Rest of the content will go here */}
      <main className="container mx-auto ">
      <Hero />
        {/* Other sections/components will follow */}
        <Services />
        <AboutBlurb />
        <ReviewSlider />
      </main>
      
      </Layout>
    </div>
    </>
  );

}
