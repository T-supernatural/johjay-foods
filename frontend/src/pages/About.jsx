import Section from '../components/Section';
import Container from '../components/Container';
import PageHero from '../components/PageHero.jsx';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="About"
        title="About Johjay Foods"
        subtitle="Learn about our roots, our mission, and the dedicated team of culinary experts crafting your event experiences."
        breadcrumb={[{ label: 'Home' }, { label: 'About' }]}
      />

      {/* Story Section */}
      <Section background="white" spacing="lg">
        <Container className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="jj-label text-[0.65rem] text-jj-gold">Our Journey</span>
            <h2 className="font-display text-4xl text-white">Catering With Love and Excellence</h2>
            <p className="text-sm leading-8 text-jj-muted">
              Johjay Foods was founded on a simple premise: event food should be as delicious and memorable as the events themselves. What started as an occasional luxury catering service has grown into a premier professional food services brand.
            </p>
            <p className="text-sm leading-8 text-jj-muted">
              Our culinary team comprises highly trained chefs, decorators, and servers who share a passion for dining excellence. We source from premium local suppliers, ensuring freshness, taste, and consistency across every event booking.
            </p>
          </div>
          <div className="jj-glass flex flex-col gap-6 rounded-[2rem] p-8">
            <h3 className="font-heading text-2xl text-white">Why Choose Johjay Foods?</h3>
            <ul className="flex flex-col gap-4 text-sm text-jj-muted">
              <li className="flex gap-3">
                <span className="font-bold text-jj-orange">✓</span>
                <span>Custom-tailored menus built for your guest requirements.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-jj-orange">✓</span>
                <span>Unparalleled service standard and professional presentation.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-jj-orange">✓</span>
                <span>Safe, hygienic, and fully licensed food operations.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-jj-orange">✓</span>
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
