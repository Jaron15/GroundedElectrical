import Layout from '@/components/Layout';
import React from 'react';

function About() {
  return (
    <div className='bg-black min-h-screen  w-full text-white'>
      <Layout>
        <div className="py-10 flex flex-col items-center mx-3 sm:mx-6">
          {/* Welcome and Introduction */}
          <section className="mb-10">
            <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Website</h1>
            <p className="max-w-3xl mx-auto text-lg text-center">
              We are a small, family-owned and operated electrical business with a strong focus on providing exceptional service to both commercial and residential clients. With 26 years of experience in the valley, we have gained extensive knowledge and expertise in the electrical industry.
            </p>
          </section>

          {/* Educational Background and Journey */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Our journey began when we attended the independent electrical contractors association and graduated in 2002. This educational foundation has equipped us with the necessary skills and technical know-how to handle various electrical projects with precision and efficiency.
            </p>
          </section>

          {/* Expertise and Services */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
            <p className="max-w-3xl mx-auto text-lg">
              While we specialize in lighting solutions, our expertise extends to all aspects of electrical work. From installations and repairs to maintenance and upgrades, we have the capability to handle any electrical task. No job is too big or too small for us.
            </p>
          </section>

          {/* Values and Commitment */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <p className="max-w-3xl mx-auto text-lg">
              What sets us apart from other electrical businesses is our unwavering commitment to integrity, safety, reliability, and quality excellence. These core values are deeply embedded in our company culture and guide every decision we make.
            </p>
          </section>

          {/* Customer Relationships */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Building Relationships</h2>
            <p className="max-w-3xl mx-auto text-lg">
              At our company, we understand the importance of building lasting relationships with our clients. We take the time to listen to their needs and provide personalized solutions that meet their unique requirements. Customer satisfaction is our top priority, and we strive to exceed expectations on every project.
            </p>
          </section>

          {/* Conclusion and Invitation */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Thank you for considering our family-owned and operated electrical business. We look forward to serving you and becoming your trusted partner for all your electrical needs.
            </p>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default About;
