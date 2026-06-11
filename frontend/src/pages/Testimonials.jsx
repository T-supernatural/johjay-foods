import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { fetchTestimonials } from '../api/testimonialsService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';

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
      {/* Page Header */}
      <Section background="primary" spacing="sm" className="text-center">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">Client Reviews</h1>
          <p className="text-cream-100/80 font-sans max-w-xl mx-auto">
            Read stories of successful event dinners and client experiences directly from our customers.
          </p>
        </Container>
      </Section>

      {/* Review Cards Grid */}
      <Section background="white">
        <Container className="flex flex-col gap-12">
          {isLoading ? (
            <div className="py-16 text-center text-sm text-primary-800/70">Loading testimonials...</div>
          ) : error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
              {error}
            </div>
          ) : reviews.length === 0 ? (
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 text-center text-sm text-primary-800/70">
              No approved testimonials are available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-amber-500 text-lg">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-primary-800/85 font-sans italic text-sm leading-relaxed">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="border-t border-cream-200 pt-4 flex flex-col">
                    <span className="font-bold text-primary-800 text-sm">{review.author_name}</span>
                    <span className="text-xs text-primary-800/60 font-sans">{review.author_title || 'Client'}</span>
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
