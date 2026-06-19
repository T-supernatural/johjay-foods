import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <section className="relative h-[280px] md:h-[380px] overflow-hidden bg-jj-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=1600&q=60&fit=crop&auto=format"
            alt="Warm catering scene"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.85) 50%, rgba(10,10,10,1) 100%)' }} />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <span className="text-jj-orange font-label text-xs uppercase tracking-widest mb-3">ACCOUNT</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">Create Account</h1>
          <p className="max-w-3xl text-sm text-white/70 mb-4">Join the Johjay Foods family and manage catering bookings effortlessly.</p>
          <p className="text-xs uppercase tracking-widest text-white/50">HOME / REGISTER</p>
        </div>
      </section>

      <section className="bg-jj-black">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left: Image panel - hidden on mobile */}
        <div className="hidden lg:block relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop&auto=format"
            alt="Join Johjay Foods"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jj-black via-jj-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 animate-fadeIn">
            <h3 className="font-display text-3xl text-white mb-2">
              Join the Johjay Foods Family
            </h3>
            <p className="font-sans text-white/70">
              Create an account to track your event bookings, save your preferences, and get exclusive updates on our catering services.
            </p>
          </div>
        </div>

        {/* Right: Form panel */}
        <div className="flex items-center justify-center p-8 lg:p-16 bg-jj-surface animate-fadeIn">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="font-display text-4xl text-white mb-3 pb-3 border-b border-jj-orange/30">
                Create Account
              </h1>
              <p className="text-sm leading-7 text-jj-muted">
                Register to track and manage event bookings
              </p>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200 mb-6">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="rounded-2xl border border-jj-orange/20 bg-jj-orange/10 p-4 text-sm text-white mb-6">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              <Button type="submit" variant="primary" fullWidth className="mt-4 rounded-full py-3 text-base font-bold">
                {isSubmitting ? 'Creating account...' : 'Register Account'}
              </Button>
            </form>

            <div className="border-t border-white/10 pt-6 mt-6 text-center">
              <p className="text-sm text-white/70">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-jj-orange hover:text-white transition-colors">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
