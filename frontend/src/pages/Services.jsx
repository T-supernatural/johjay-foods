import { CalendarDays, ChefHat, ClipboardList, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section';

const Services = () => {
  const serviceList = [
    {
      title: 'Plated Dinners',
      description: 'Formal, multi-course sit-down service tailored for wedding receptions, executive events, and high-end galas.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop&auto=format',
      features: ['Individually plated courses', 'Professional white-glove table service', 'Customized menu card designs', 'Dietary accommodation styling'],
    },
    {
      title: 'Luxury Buffets',
      description: 'An elegant selection of hot mains, roasted meats, signature salads, and freshly baked breads, beautifully styled for large gatherings.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80&fit=crop&auto=format',
      features: ['Stunning themed table decoration', 'Chafing dish and serving equipment setups', 'On-site culinary assistants', 'Extensive option variety'],
    },
    {
      title: 'Canapés & Cocktail Receptions',
      description: 'Perfect for art galleries, corporate networking, and pre-dinner mixers. Exquisite bite-sized hors d\'oeuvres passed by professional servers.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop&auto=format',
      features: ['Hot and cold passed appetizers', 'Custom visual platter presentation', 'Perfect beverage pairings', 'Mobile bar services setup'],
    },
    {
      title: 'Live Interactive Stations',
      description: 'Engage guests with dynamic food stations where chefs cook customized meals on-demand, from gourmet tacos to artisanal pasta.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&fit=crop&auto=format',
      features: ['Action station setups', 'Interactive chef interaction', 'Fresh ingredients cooked live', 'Dynamic event styling'],
    }
  ];

  const steps = [
    {
      icon: CalendarDays,
      title: 'Consultation',
      description: 'Tell us about your event and vision',
    },
    {
      icon: ClipboardList,
      title: 'Custom Proposal',
      description: 'We design a menu and plan for you',
    },
    {
      icon: ChefHat,
      title: 'Preparation',
      description: 'Our chefs craft every detail with care',
    },
    {
      icon: PartyPopper,
      title: 'Your Event',
      description: 'We deliver, serve, and exceed expectations',
    },
  ]

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Services"
        title="Catering Services"
        subtitle="Discover our tailored service offerings designed to elevate your event, from formal plated dinners to interactive live kitchens."
        breadcrumb={[{ label: 'Home' }, { label: 'Services' }]}
        backgroundImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=60&fit=crop&auto=format"
        backgroundAlt="Luxury catering service"
      />

      <Section background="cream" spacing="lg">
        <Container className="flex flex-col gap-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {serviceList.map((service, index) => (
              <Card key={index} className="group flex flex-col justify-between gap-0 overflow-hidden p-0" padding="none">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="jj-photo h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.12))] transition-colors duration-300 group-hover:bg-[rgba(232,101,26,0.25)]" />
                </div>
                <div className="flex flex-col gap-4 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading text-2xl text-white">{service.title}</h2>
                    <span className="jj-label text-[0.58rem] text-jj-orange">Service</span>
                  </div>
                  <p className="text-[1rem] leading-8 text-jj-muted">{service.description}</p>

                  <div className="mt-2 border-t border-white/10 pt-5">
                    <span className="jj-label mb-3 block text-[0.58rem] text-jj-gold">Service Inclusions</span>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-jj-muted sm:grid-cols-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex gap-2">
                          <span className="font-bold text-jj-orange">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="jj-glass mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] p-8 text-center md:p-12">
            <h3 className="font-display text-3xl text-white">Ready to design a custom menu?</h3>
            <p className="max-w-lg text-sm leading-8 text-jj-muted">
              Let us know your guest size, dietary preferences, and event date, and we will formulate a personalized dining proposal.
            </p>
            <Link to="/request-quote">
              <Button variant="primary">Request a Custom Proposal</Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Section background="dark" spacing="lg">
        <Container>
          <div className="jj-section-heading mx-auto mb-4 max-w-2xl">
            <span className="jj-label text-[0.65rem] text-jj-gold">Process</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">How It Works</h2>
            <p className="max-w-xl text-[1rem] leading-7 text-jj-muted">From inquiry to your event day — simple and seamless</p>
          </div>

          <div className="relative mt-12 grid gap-8 lg:grid-cols-4">
            <div className="absolute left-[7%] right-[7%] top-16 hidden border-t border-dashed border-jj-orange/30 lg:block" />
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <Card key={step.title} className="relative z-10 h-full p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e8651a,#c45510)] text-white shadow-[0_0_0_4px_rgba(232,101,26,0.15)]">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>
                  <div className="mt-5 text-5xl font-display text-jj-orange/60">0{index + 1}</div>
                  <h3 className="mt-2 font-display text-2xl text-white">{step.title}</h3>
                  <p className="mt-3 text-[1rem] leading-7 text-jj-muted">{step.description}</p>
                </Card>
              )
            })}
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

export default Services;
