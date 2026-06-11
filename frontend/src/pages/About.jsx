import Section from '../components/Section';
import Container from '../components/Container';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <Section background="primary" spacing="sm" className="text-center">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">About Johjay Foods</h1>
          <p className="text-cream-100/80 font-sans max-w-xl mx-auto">
            Learn about our roots, our mission, and the dedicated team of culinary experts crafting your event experiences.
          </p>
        </Container>
      </Section>

      {/* Story Section */}
      <Section background="white">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Our Journey</span>
            <h2 className="text-3xl font-bold text-primary-800">Catering With Love and Excellence</h2>
            <p className="text-primary-800/80 font-sans leading-relaxed">
              Johjay Foods was founded on a simple premise: event food should be as delicious and memorable as the events themselves. What started as an occasional luxury catering service has grown into a premier professional food services brand.
            </p>
            <p className="text-primary-800/80 font-sans leading-relaxed">
              Our culinary team comprises highly trained chefs, decorators, and servers who share a passion for dining excellence. We source from premium local suppliers, ensuring freshness, taste, and consistency across every event booking.
            </p>
          </div>
          <div className="bg-cream-100 rounded-2xl p-8 border border-cream-200 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-primary-700">Why Choose Johjay Foods?</h3>
            <ul className="flex flex-col gap-4 font-sans text-sm text-primary-800/85">
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">✓</span>
                <span>Custom-tailored menus built for your guest requirements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">✓</span>
                <span>Unparalleled service standard and professional presentation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">✓</span>
                <span>Safe, hygienic, and fully licensed food operations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">✓</span>
                <span>Experienced coordinators handling logistics from kitchen to table.</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
