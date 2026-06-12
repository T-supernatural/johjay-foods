import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/useAuth.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';

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
      <PageHero
        eyebrow="Account"
        title="Welcome Back"
        subtitle="Login to view your event bookings and messages."
        breadcrumb={[{ label: 'Home' }, { label: 'Login' }]}
      />

      <Section background="dark" className="flex min-h-[70vh] items-center" spacing="lg">
        <Container size="sm">
          <Card padding="lg" className="mx-auto flex max-w-md flex-col gap-6 p-8">
            <div className="text-center flex flex-col gap-2">
              <h1 className="font-display text-4xl text-white">Login</h1>
              <p className="text-sm leading-7 text-jj-muted">Access your event bookings and messages.</p>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-200">
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
              <Link to="/register" className="font-semibold text-jj-orange hover:text-white">
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
