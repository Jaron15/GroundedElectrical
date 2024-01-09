import { useRouter } from 'next/router';
import services from '@/data';
import Layout from '@/components/Layout';

const ServicePage = ({ service }) => {
    const router = useRouter();
console.log(service);
    if (router.isFallback) {
        return <div>Loading...</div>;
    }


    return (
        <div className='bg-black min-h-screen mx-auto w-full overflow-x-hidden'>
        <Layout>
          <h1 className='text-white'>{service.service}</h1>
          <p className='text-white'>{service.type}</p>
        </Layout>
    </div>
      );
    };
    

export default ServicePage;

export async function getStaticPaths() {
    const paths = services.map(service => ({
        params: { service: service.id },
    }));

    return { paths, fallback: true }; 
}

export async function getStaticProps({ params }) {
    const serviceData = services.find(service => service.id === params.service);

    return {
        props: {
            service: serviceData,
        },
    };
}
