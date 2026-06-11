import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/useAuth.js';
import { getApiErrorMessage } from '../api/errorUtils.js';

const Register = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await register(formData);
      setSuccessMessage('Account created successfully. You can now log in.');
    } catch (registerError) {
      setError(getApiErrorMessage(registerError, 'Unable to create your account right now.'));
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
      <Section background="cream" className="min-h-[70vh] flex items-center">
        <Container size="sm">
          <Card padding="lg" className="flex flex-col gap-6 max-w-md mx-auto">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-primary-800">Create Account</h1>
              <p className="text-sm text-primary-800/60 font-sans">Register to track and manage event bookings.</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-xs font-sans">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="bg-primary-50 border border-primary-200 text-primary-800 p-3 rounded-lg text-xs font-sans">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                label="Full Name"
                id="full_name"
                required
                placeholder="e.g. John Doe"
                value={formData.full_name}
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
              <Input
                label="Phone Number"
                id="phone"
                placeholder="e.g. +1 555-123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                required
                placeholder="Choose a password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button type="submit" variant="primary" fullWidth className="mt-2">
                {isSubmitting ? 'Creating account...' : 'Register Account'}
              </Button>
            </form>

            <div className="border-t border-cream-200 pt-4 text-center font-sans text-xs text-primary-800/60">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-gold-600 hover:text-gold-700">
                Login here
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default Register;
