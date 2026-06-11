import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Section background="dark" spacing="lg" className="relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/40 z-0"></div>
        <Container className="relative z-10 py-12 flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Exquisite Catering & Culinary Artistry for Memorable Events
          </h1>
          <p className="text-lg sm:text-xl text-cream-100/90 max-w-2xl font-sans">
            Johjay Foods delivers premium dining experiences tailored to weddings, corporate events, and private gatherings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link to="/request-quote">
              <Button variant="secondary" size="lg">Request a Quote</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Overview/Philosophy */}
      <Section background="white">
        <Container size="md" className="text-center flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Our Culinary Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Catering Perfected</h2>
          <p className="text-primary-800/80 leading-relaxed font-sans">
            At Johjay Foods, we believe that exceptional events are defined by memorable cuisine. Every plate is crafted with fresh, premium ingredients, innovative techniques, and unmatched professional presentation. From corporate conferences to intimate celebrations, we align every detail with your vision.
          </p>
        </Container>
      </Section>

      {/* Services Grid Preview */}
      <Section background="cream">
        <Container>
          <div className="text-center mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Catering for Every Occasion</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-serif text-xl font-bold">W</div>
              <h3 className="text-xl font-bold text-primary-700">Weddings</h3>
              <p className="text-primary-800/70 text-sm font-sans">
                Curated multi-course plated dinners, gourmet buffets, and spectacular dessert bars to make your special day truly unforgettable.
              </p>
            </Card>

            <Card className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-serif text-xl font-bold">C</div>
              <h3 className="text-xl font-bold text-primary-700">Corporate Events</h3>
              <p className="text-primary-800/70 text-sm font-sans">
                Impress clients and energize teams with professional catering, custom boxed lunches, drop-off spreads, and formal galas.
              </p>
            </Card>

            <Card className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-serif text-xl font-bold">P</div>
              <h3 className="text-xl font-bold text-primary-700">Private Parties</h3>
              <p className="text-primary-800/70 text-sm font-sans">
                Elevate anniversaries, birthdays, or family reunions with personalized menus, hors d'oeuvres, and bespoke private chef dining.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
