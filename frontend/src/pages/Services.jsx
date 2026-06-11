import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

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
      {/* Page Header */}
      <Section background="primary" spacing="sm" className="text-center">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">Catering Services</h1>
          <p className="text-cream-100/80 font-sans max-w-xl mx-auto">
            Discover our tailored service offerings designed to elevate your event, from formal plated dinners to interactive live kitchens.
          </p>
        </Container>
      </Section>

      {/* Services List */}
      <Section background="white">
        <Container className="flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceList.map((service, index) => (
              <Card key={index} className="flex flex-col justify-between gap-6" padding="lg">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-primary-700">{service.title}</h2>
                  <p className="text-primary-800/80 font-sans text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="border-t border-cream-200 pt-4 mt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-3">Service Inclusions:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-primary-800/75">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex gap-2">
                          <span className="text-gold-500 font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center gap-6 max-w-3xl mx-auto border border-primary-100">
            <h3 className="text-2xl font-bold text-primary-800">Ready to design a custom menu?</h3>
            <p className="text-primary-800/70 font-sans text-sm max-w-lg">
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
