import { Check, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section';

const featureItems = [
  {
    title: 'Custom-tailored menus',
    description: 'Menus are designed around your guest list, taste profile, and event style.',
  },
  {
    title: 'Unparalleled service standard',
    description: 'Our team delivers polished service, warm hospitality, and coordinated timing.',
  },
  {
    title: 'Safe hygienic licensed operations',
    description: 'We maintain careful kitchen discipline and food handling at every event.',
  },
  {
    title: 'Experienced coordinators',
    description: 'From planning through setup, our coordinators keep every detail aligned.',
  },
]

const teamMembers = [
  {
    name: 'Chef Adaeze',
    role: 'Executive Head Chef',
    accent: 'A',
    icon: true,
  },
  {
    name: 'Mr. Babatunde',
    role: 'Event Coordinator',
    accent: 'B',
  },
  {
    name: 'Miss Chioma',
    role: 'Pastry & Desserts Lead',
    accent: 'C',
  },
]

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="About"
        title="About Johjay Foods"
        subtitle="Learn about our roots, our mission, and the dedicated team of culinary experts crafting your event experiences."
        breadcrumb={[{ label: 'Home' }, { label: 'About' }]}
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=60&fit=crop&auto=format"
        backgroundAlt="Catering table spread"
      />

      <Section background="cream" spacing="lg">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center gap-6">
            <span className="jj-label text-[0.65rem] text-jj-gold">Our Journey</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Catering With Love and Excellence</h2>
            <p className="text-[1.05rem] leading-8 text-jj-muted">
              Johjay Foods was founded on a simple premise: event food should be as delicious and memorable as the events themselves. What started as an occasional luxury catering service has grown into a premier professional food services brand.
            </p>
            <p className="text-[1.05rem] leading-8 text-jj-muted">
              Our culinary team comprises highly trained chefs, decorators, and servers who share a passion for dining excellence. We source from premium local suppliers, ensuring freshness, taste, and consistency across every event booking.
            </p>
          </div>
          <div className="relative min-h-140 overflow-hidden rounded-4xl border-2 border-jj-orange/25 bg-jj-card">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&fit=crop&auto=format"
              alt="Chef preparing an elegant catering setup"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.45))]" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-jj-orange/30 bg-jj-black px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
              <p className="font-display text-2xl font-bold text-jj-orange">10+ Years</p>
              <p className="text-sm text-white">of culinary excellence</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="dark" spacing="lg">
        <Container>
          <div className="jj-section-heading mx-auto mb-12 max-w-2xl">
            <span className="jj-label text-[0.65rem] text-jj-gold">Why Choose Us</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Why Choose Johjay Foods?</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featureItems.map((item) => (
              <Card key={item.title} padding="none" className="h-full rounded-3xl p-6">
                <div className="flex h-full gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-jj-orange/20 bg-jj-orange/10 text-jj-orange">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <p className="text-[1rem] leading-7 text-jj-muted">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="cream" spacing="lg">
        <Container>
          <div className="jj-section-heading mx-auto mb-12 max-w-2xl">
            <span className="jj-label text-[0.65rem] text-jj-gold">Our People</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">The People Behind Every Event</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="flex h-full flex-col items-center gap-5 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e8651a,#c45510)] text-white shadow-[0_0_0_4px_rgba(232,101,26,0.15)]">
                  {member.icon ? <ChefHat size={34} strokeWidth={2.2} /> : <span className="font-display text-3xl">{member.accent}</span>}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-2xl text-white">{member.name}</h3>
                  <p className="jj-label text-[0.62rem] text-jj-orange">{member.role}</p>
                </div>
                <p className="text-sm leading-7 text-jj-muted">
                  {index === 0
                    ? 'Bringing elevated menus and precise flavor balance to weddings and formal celebrations.'
                    : index === 1
                      ? 'Coordinating timelines, logistics, and service flow so each event runs smoothly.'
                      : 'Crafting memorable sweet finishes and polished dessert presentations for every occasion.'}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-[linear-gradient(135deg,#e8651a,#c45510)] py-12 text-white md:py-16">
        <Container className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <h2 className="font-display text-3xl sm:text-4xl">Planning an Event? Let's Talk.</h2>
          <Link to="/request-quote">
            <Button variant="secondary" size="lg" className="border-white bg-white text-jj-orange hover:border-white hover:bg-[#f8f8f8] hover:text-jj-orange">
              Request a Quote
            </Button>
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default About;
