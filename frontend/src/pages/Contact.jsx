import { useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { submitContactMessage } from '../api/contactService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      await submitContactMessage(formData);
      setSubmitted(true);
    } catch (error) {
      setFormError(getApiErrorMessage(error, 'We could not send your message. Please try again.'));
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
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Get in touch with us for general inquiries, career opportunities, or corporate partnerships."
        breadcrumb={[{ label: 'Home' }, { label: 'Contact' }]}
      />

      {/* Contact Form & Sidebar */}
      <Section background="white" spacing="lg">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card padding="lg" hoverable={false} className="flex flex-col gap-6 p-8">
              <div className="jj-section-heading mx-0 items-start text-left">
                <span className="jj-label text-[0.62rem] text-jj-gold">Send a Message</span>
                <h2 className="font-display text-3xl text-white">Send a Message</h2>
              </div>
              {formError && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                  {formError}
                </div>
              )}
              {submitted ? (
                <div className="rounded-2xl border border-jj-orange/15 bg-jj-black/60 p-6 text-center">
                  <h3 className="font-heading text-2xl text-white mb-2">Thank you!</h3>
                  <p className="text-sm leading-7 text-jj-muted">Your contact message has been sent successfully. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input
                      label="Email Address"
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      id="phone"
                      placeholder="e.g. +1 555-123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <Input
                      label="Subject"
                      id="subject"
                      required
                      placeholder="e.g. Inquiry about catering rates"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <Textarea
                    label="Your Message"
                    id="message"
                    required
                    placeholder="Enter your message details..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="primary" className="self-start mt-2">
                    {isSubmitting ? 'Sending...' : 'Submit Message'}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <Card padding="md" hoverable={false} className="flex flex-col gap-4 p-6">
              <h3 className="font-heading text-xl text-white">Office Address</h3>
              <p className="text-sm leading-7 text-jj-muted">
                Johjay Foods Catering HQ<br />
                12 Culinary Avenue, Suite 100<br />
                Lagos, Nigeria
              </p>
            </Card>

            <Card padding="md" hoverable={false} className="flex flex-col gap-4 p-6">
              <h3 className="font-heading text-xl text-white">Call or Email</h3>
              <p className="text-sm leading-7 text-jj-muted">
                <strong>General:</strong> info@johjayfoods.com<br />
                <strong>Phone:</strong> +234 123 456 7890
              </p>
            </Card>

            <Card padding="md" hoverable={false} className="flex flex-col gap-4 p-6">
              <h3 className="font-heading text-xl text-white">Catering Inquiry</h3>
              <p className="mb-2 text-xs leading-6 text-jj-muted">
                For detailed wedding, corporate event, or holiday party quotes, please use our dedicated form.
              </p>
              <Link to="/request-quote" className="jj-label text-[0.6rem] font-bold text-jj-orange hover:text-white">
                Go to Quote Form →
              </Link>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
