import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/useAuth.js';
import { getApiErrorMessage } from '../api/errorUtils.js';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await login(formData);
      navigate('/');
    } catch (loginError) {
      setError(getApiErrorMessage(loginError, 'Unable to log in with those credentials.'));
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
              <h1 className="text-3xl font-bold text-primary-800">Welcome Back</h1>
              <p className="text-sm text-primary-800/60 font-sans">Login to view your event bookings and messages.</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-xs font-sans">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                label="Password"
                id="password"
                type="password"
                required
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button type="submit" variant="primary" fullWidth className="mt-2">
                {isSubmitting ? 'Logging in...' : 'Login Account'}
              </Button>
            </form>

            <div className="border-t border-cream-200 pt-4 text-center font-sans text-xs text-primary-800/60">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-gold-600 hover:text-gold-700">
                Register here
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default Login;
