import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { fetchTestimonials } from '../api/testimonialsService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const hardcodedTestimonials = [
  {
    id: 'h1',
    name: 'Mrs. Funke Adeyemi',
    event: 'Wedding Reception — 400 guests',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'Johjay Foods made our wedding day absolutely perfect. The jollof rice alone had guests talking for weeks! Every dish was hot, fresh and beautifully presented. Their team was professional from setup to the last plate. We could not have chosen better.',
  },
  {
    id: 'h2',
    name: 'Mr. Chidi Okonkwo',
    event: 'Corporate Annual Dinner — 200 guests',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: 'We hired Johjay Foods for our company annual dinner and they delivered beyond our expectations. The service was seamless, the food was exceptional, and our executives were thoroughly impressed. We have already booked them for next year.',
  },
  {
    id: 'h3',
    name: 'Blessing & Emeka Nwosu',
    event: 'Traditional Wedding — 600 guests',
    location: 'Enugu, Nigeria',
    rating: 5,
    text: 'From our first consultation to the last dish served, Johjay Foods was outstanding. They understood our cultural requirements perfectly and delivered authentic Nigerian cuisine at the highest quality. Our guests could not stop complimenting the food.',
  },
  {
    id: 'h4',
    name: 'Dr. Amina Suleiman',
    event: 'Private Birthday Dinner — 50 guests',
    location: 'Port Harcourt, Nigeria',
    rating: 5,
    text: 'I wanted an intimate yet luxurious dining experience for my 50th birthday. Johjay Foods delivered exactly that — elegant plating, attentive servers, and flavors that reminded me of the best home cooking elevated to restaurant quality. Simply wonderful.',
  },
  {
    id: 'h5',
    name: 'Pastor & Mrs. Taiwo',
    event: 'Church Anniversary — 800 guests',
    location: 'Ibadan, Nigeria',
    rating: 5,
    text: 'Serving 800 people is no small feat but Johjay Foods handled it with grace and efficiency. Every guest was served warm food within 30 minutes. The variety was impressive and the taste was consistently excellent throughout.',
  },
  {
    id: 'h6',
    name: 'Miss Tola Fashola',
    event: 'Bridal Shower — 80 guests',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'The small chops platter and cocktail spread from Johjay Foods were the highlight of the entire bridal shower. Presentation was stunning and everything tasted absolutely divine. Everyone asked for their contact. Highly recommended!',
  },
]

const summaryStats = [
  { value: '6+', label: 'Happy Clients' },
  { value: '5★', label: 'Average Rating' },
  { value: '100%', label: 'Would Recommend' },
  { value: '500+', label: 'Events Served' },
]

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      try {
        const testimonials = await fetchTestimonials();

        if (isMounted) {
          setReviews(testimonials);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(getApiErrorMessage(fetchError, 'Unable to load testimonials.'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayTestimonials = reviews.length > 0
    ? reviews.map((review) => ({
      id: review.id,
      name: review.author_name,
      event: review.author_title || 'Client Event',
      location: review.location || 'Nigeria',
      rating: review.rating || 5,
      text: review.content,
    }))
    : hardcodedTestimonials;

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Testimonials"
        title="Client Reviews"
        subtitle="Read stories of successful event dinners and client experiences directly from our customers."
        breadcrumb={[{ label: 'Home' }, { label: 'Testimonials' }]}
        backgroundImage="https://images.unsplash.com/photo-1574484284002-952d92456975?w=1600&q=60&fit=crop&auto=format"
        backgroundAlt="Elegant dining experience"
      />

      <Section background="dark" spacing="sm">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {summaryStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-jj-orange/15 bg-jj-card p-5 text-center">
                <p className="font-display text-3xl text-jj-orange">{item.value}</p>
                <p className="mt-2 jj-label text-[0.6rem] text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="cream" spacing="lg">
        <Container className="flex flex-col gap-12">
          {isLoading ? (
            <div className="jj-shimmer rounded-2xl py-16 text-center text-sm text-white/70">Loading testimonials...</div>
          ) : error ? (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center text-sm text-red-200">
              {error}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {displayTestimonials.map((item) => (
                  <Card key={item.id} className="relative h-full p-8 hover:border-jj-orange/40" hoverable>
                    <div className="absolute left-4 top-3 font-display text-[6rem] leading-none text-jj-orange/15">"</div>
                    <p className="pt-16 font-display text-[1.1rem] italic leading-8 text-white">{item.text}</p>
                    <div className="mt-5 flex gap-1 text-jj-orange">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                    </div>
                    <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(232,101,26,0.55),transparent)]" />
                    <div className="mt-5 space-y-1">
                      <span className="font-display text-2xl text-white">{item.name}</span>
                      <p className="jj-label text-[0.58rem] text-jj-orange">{item.event}</p>
                      <p className="flex items-center gap-2 text-sm text-jj-muted">
                        <MapPin size={14} />
                        {item.location}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Link to="/request-quote">
                  <Button variant="primary" size="lg">Request a Quote</Button>
                </Link>
              </div>
            </>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default Testimonials;
