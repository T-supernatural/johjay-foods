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
      {/* Page Header */}
      <Section background="primary" spacing="sm" className="text-center">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-cream-100/80 font-sans max-w-xl mx-auto">
            Get in touch with us for general inquiries, career opportunities, or corporate partnerships.
          </p>
        </Container>
      </Section>

      {/* Contact Form & Sidebar */}
      <Section background="white">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card padding="lg" hoverable={false} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-primary-700">Send a Message</h2>
              {formError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {formError}
                </div>
              )}
              {submitted ? (
                <div className="bg-primary-50 border border-primary-200 text-primary-800 p-6 rounded-lg text-center font-sans">
                  <h3 className="font-bold text-lg mb-2">Thank you!</h3>
                  <p className="text-sm">Your contact message has been sent successfully. Our team will get back to you shortly.</p>
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
            <Card padding="md" hoverable={false} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary-700">Office Address</h3>
              <p className="text-sm text-primary-800/80 font-sans leading-relaxed">
                Johjay Foods Catering HQ<br />
                12 Culinary Avenue, Suite 100<br />
                Lagos, Nigeria
              </p>
            </Card>

            <Card padding="md" hoverable={false} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary-700">Call or Email</h3>
              <p className="text-sm text-primary-800/80 font-sans leading-relaxed">
                <strong>General:</strong> info@johjayfoods.com<br />
                <strong>Phone:</strong> +234 123 456 7890
              </p>
            </Card>

            <Card padding="md" hoverable={false} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary-700">Catering Inquiry</h3>
              <p className="text-xs text-primary-800/60 font-sans mb-2">
                For detailed wedding, corporate event, or holiday party quotes, please use our dedicated form.
              </p>
              <Link to="/request-quote" className="text-xs font-bold text-gold-600 hover:text-gold-700 uppercase tracking-wider font-sans">
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
