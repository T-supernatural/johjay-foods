import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { fetchTestimonials } from '../api/testimonialsService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';

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

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Testimonials"
        title="Client Reviews"
        subtitle="Read stories of successful event dinners and client experiences directly from our customers."
        breadcrumb={[{ label: 'Home' }, { label: 'Testimonials' }]}
      />

      {/* Review Cards Grid */}
      <Section background="white" spacing="lg">
        <Container className="flex flex-col gap-12">
          {isLoading ? (
            <div className="jj-shimmer rounded-2xl py-16 text-center text-sm text-white/70">Loading testimonials...</div>
          ) : error ? (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center text-sm text-red-200">
              {error}
            </div>
          ) : reviews.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
              No approved testimonials are available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="flex flex-col justify-between gap-6 p-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-jj-orange text-lg">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="font-display text-2xl italic leading-8 text-white">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex flex-col">
                    <span className="font-heading text-lg text-white">{review.author_name}</span>
                    <span className="jj-label text-[0.58rem] text-jj-orange">{review.author_title || 'Client'}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default Testimonials;
