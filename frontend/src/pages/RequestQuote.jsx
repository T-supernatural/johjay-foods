import { useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { submitLeadRequest } from '../api/leadsService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: 'private_party',
    event_date: '',
    guest_count: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.event_date || !formData.guest_count || !formData.budget) {
      setFormError('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      await submitLeadRequest({
        ...formData,
        guest_count: Number(formData.guest_count),
      });
      setSubmitted(true);
    } catch (error) {
      setFormError(getApiErrorMessage(error, 'We could not submit your request. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Request Quote"
        title="Request a Quote"
        subtitle="Provide details about your upcoming wedding, corporate gala, or private dinner, and we will prepare a bespoke catering estimate."
        breadcrumb={[{ label: 'Home' }, { label: 'Request Quote' }]}
      />

      {/* Form Section */}
      <Section background="white" spacing="lg">
        <Container size="md">
          <Card padding="lg" hoverable={false} className="flex flex-col gap-6 p-8">
            <div className="jj-section-heading mx-0 items-start text-left">
              <span className="jj-label text-[0.62rem] text-jj-gold">Catering Lead Inquiry Form</span>
              <h2 className="font-display text-3xl text-white">Catering Lead Inquiry Form</h2>
            </div>
            {formError && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                {formError}
              </div>
            )}
            
            {submitted ? (
              <div className="rounded-2xl border border-jj-orange/15 bg-jj-black/60 p-8 text-center">
                <h3 className="mb-3 font-heading text-3xl text-white">Lead Submitted Successfully!</h3>
                <p className="mb-4 text-sm leading-7 text-jj-muted">
                  We have received your event details. A Johjay Foods event coordinator will review your request and contact you within 24–48 hours to discuss menu details and pricing.
                </p>
                <div className="jj-label text-[0.58rem] text-jj-muted">
                  Lead Summary: {formData.event_type} on {formData.event_date} for {formData.guest_count} guests.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="jj-label border-b border-white/10 pb-2 text-[0.62rem] text-jj-orange">1. Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    id="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    label="Email Address"
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2 pr-0 sm:pr-2">
                  <Input
                    label="Phone Number"
                    id="phone"
                    required
                    placeholder="e.g. +1 555-987-6543"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <h3 className="jj-label mt-4 border-b border-white/10 pb-2 text-[0.62rem] text-jj-orange">2. Event Specifics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="event_type" className="jj-label text-[0.66rem] font-semibold text-jj-muted">
                      Event Type *
                    </label>
                    <select
                      id="event_type"
                      required
                      value={formData.event_type}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-jj-card px-4 py-3 text-sm text-white outline-none focus:border-jj-orange focus:ring-2 focus:ring-jj-orange/20"
                    >
                      <option value="wedding">Wedding Reception</option>
                      <option value="corporate">Corporate Banquet / Gala</option>
                      <option value="private_party">Private Party / Celebration</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="other">Other Event</option>
                    </select>
                  </div>
                  <Input
                    label="Event Date"
                    id="event_date"
                    type="date"
                    required
                    value={formData.event_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    label="Guest Count"
                    id="guest_count"
                    type="number"
                    required
                    placeholder="e.g. 150"
                    value={formData.guest_count}
                    onChange={handleChange}
                  />
                  <Input
                    label="Estimated Budget"
                    id="budget"
                    required
                    placeholder="e.g. $5,000 - $8,000"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  label="Special Dietary Needs & Details"
                  id="message"
                  placeholder="e.g. Vegan dishes, food allergies, layout desires..."
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button type="submit" variant="secondary" size="lg" className="self-start mt-4">
                  {isSubmitting ? 'Submitting...' : 'Submit Lead Request'}
                </Button>
              </form>
            )}
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default RequestQuote;
