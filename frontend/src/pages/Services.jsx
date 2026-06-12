import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

const Services = () => {
  const serviceList = [
    {
      title: 'Plated Dinners',
      description: 'Formal, multi-course sit-down service tailored for wedding receptions, executive events, and high-end galas.',
      features: ['Individually plated courses', 'Professional white-glove table service', 'Customized menu card designs', 'Dietary accommodation styling']
    },
    {
      title: 'Luxury Buffets',
      description: 'An elegant selection of hot mains, roasted meats, signature salads, and freshly baked breads, beautifully styled for large gatherings.',
      features: ['Stunning themed table decoration', 'Chafing dish and serving equipment setups', 'On-site culinary assistants', 'Extensive option variety']
    },
    {
      title: 'Canapés & Cocktail Receptions',
      description: 'Perfect for art galleries, corporate networking, and pre-dinner mixers. Exquisite bite-sized hors d\'oeuvres passed by professional servers.',
      features: ['Hot and cold passed appetizers', 'Custom visual platter presentation', 'Perfect beverage pairings', 'Mobile bar services setup']
    },
    {
      title: 'Live Interactive Stations',
      description: 'Engage guests with dynamic food stations where chefs cook customized meals on-demand, from gourmet tacos to artisanal pasta.',
      features: ['Action station setups', 'Interactive chef interaction', 'Fresh ingredients cooked live', 'Dynamic event styling']
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Services"
        title="Catering Services"
        subtitle="Discover our tailored service offerings designed to elevate your event, from formal plated dinners to interactive live kitchens."
        breadcrumb={[{ label: 'Home' }, { label: 'Services' }]}
      />

      {/* Services List */}
      <Section background="white" spacing="lg">
        <Container className="flex flex-col gap-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {serviceList.map((service, index) => (
              <Card key={index} className="flex flex-col justify-between gap-6 p-8" padding="none">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading text-2xl text-white">{service.title}</h2>
                    <span className="jj-label text-[0.58rem] text-jj-orange">Service</span>
                  </div>
                  <p className="text-sm leading-8 text-jj-muted">{service.description}</p>
                  
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
    </div>
  );
};

export default Services;
