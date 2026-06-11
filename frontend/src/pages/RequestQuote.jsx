import { useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { submitLeadRequest } from '../api/leadsService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';

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
      {/* Page Header */}
      <Section background="primary" spacing="sm" className="text-center">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">Request a Quote</h1>
          <p className="text-cream-100/80 font-sans max-w-xl mx-auto">
            Provide details about your upcoming wedding, corporate gala, or private dinner, and we will prepare a bespoke catering estimate.
          </p>
        </Container>
      </Section>

      {/* Form Section */}
      <Section background="white">
        <Container size="md">
          <Card padding="lg" hoverable={false} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-primary-700">Catering Lead Inquiry Form</h2>
            {formError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {formError}
              </div>
            )}
            
            {submitted ? (
              <div className="bg-primary-50 border border-primary-200 text-primary-800 p-8 rounded-lg text-center font-sans">
                <h3 className="font-bold text-xl mb-3">Lead Submitted Successfully!</h3>
                <p className="text-sm leading-relaxed mb-4">
                  We have received your event details. A Johjay Foods event coordinator will review your request and contact you within 24–48 hours to discuss menu details and pricing.
                </p>
                <div className="text-xs text-primary-800/60">
                  Lead Summary: {formData.event_type} on {formData.event_date} for {formData.guest_count} guests.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gold-600 border-b border-cream-200 pb-2">1. Contact Information</h3>
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

                <h3 className="text-sm font-bold uppercase tracking-wider text-gold-600 border-b border-cream-200 pb-2 mt-4">2. Event Specifics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="event_type" className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                      Event Type *
                    </label>
                    <select
                      id="event_type"
                      required
                      value={formData.event_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg text-sm bg-white text-primary-800 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
