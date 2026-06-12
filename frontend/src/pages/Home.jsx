import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import Section from '../components/Section'

const stats = [
  { value: '500+', label: 'Events Catered' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Menu Items' },
]

const services = [
  {
    title: 'Wedding Catering',
    description: 'Elegant multi-course menus, refined presentation, and seamless service for your most important day.',
    icon: 'W',
  },
  {
    title: 'Corporate Events',
    description: 'Professional dining experiences for meetings, launches, and executive gatherings with a polished finish.',
    icon: 'C',
  },
  {
    title: 'Private Dining',
    description: 'Intimate chef-led menus and curated hospitality for private celebrations with an upscale touch.',
    icon: 'P',
  },
  {
    title: 'Food Delivery',
    description: 'Warm, timely delivery for office lunches, family gatherings, and occasion-ready meals.',
    icon: 'D',
  },
  {
    title: 'Birthday Parties',
    description: 'Celebratory menus, dessert moments, and shareable platters designed to delight guests of every age.',
    icon: 'B',
  },
  {
    title: 'Outdoor Events',
    description: 'Reliable catering for garden parties, beach gatherings, and destination-style experiences.',
    icon: 'O',
  },
]

const menuPreview = [
  { name: 'Charred Suya Salmon', description: 'Yam purée, citrus glaze, pepper herb oil', price: '₦18,500' },
  { name: 'Jollof Crusted Chicken', description: 'Smoky rice gratin, charred vegetables', price: '₦14,000' },
  { name: 'Asun Sliders', description: 'Mini brioche, slaw, chili aioli', price: '₦9,500' },
  { name: 'Mango Pavlova', description: 'Coconut cream, berry compote, gold dust', price: '₦7,500' },
]

const testimonials = [
  {
    quote: 'Johjay Foods gave our wedding a level of elegance we did not think was possible. The service was flawless and the food was unforgettable.',
    author: 'Amaka & Tunde',
    tag: 'Wedding Reception',
  },
  {
    quote: 'Their corporate catering felt premium from start to finish. The team was punctual, polished, and completely professional.',
    author: 'Ngozi Okafor',
    tag: 'Corporate Event',
  },
  {
    quote: 'The birthday dinner was warm, stylish, and full of flavor. Every plate looked like it belonged in a fine dining room.',
    author: 'David O.',
    tag: 'Private Celebration',
  },
]

const highlights = [
  'Fresh ingredients sourced with care',
  'Experienced chefs and polished service teams',
  'Custom menus designed around your event',
  'Reliable preparation, setup, and delivery',
]

const Home = () => {
  return (
    <div className="flex w-full flex-col bg-jj-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-jj-black text-white">
        <div className="jj-noise absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(232,101,26,0.14)_0%,transparent_70%)]" />
        <div className="absolute inset-0 jj-hero-grid opacity-35" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-jj-orange/10 blur-3xl" />

        <Container className="relative z-10 flex min-h-screen flex-col justify-center py-20">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="jj-label text-[0.65rem] text-jj-gold"
              >
                Exquisite Catering & Culinary Artistry for Memorable Events
              </motion.span>

              <div className="mt-6 space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.05 }}
                  className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
                >
                  <span className="block text-white">Exquisite Catering &</span>
                  <span className="block jj-gradient-text">Culinary Artistry</span>
                  <span className="block text-white">for Memorable Events</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.15 }}
                  className="max-w-2xl text-sm leading-8 text-[#a8a8a8] sm:text-base"
                >
                  Johjay Foods delivers premium Nigerian catering and event dining for weddings, corporate functions, private celebrations, and outdoor gatherings with a refined, inviting touch.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link to="/request-quote">
                  <Button variant="primary" size="lg">Request a Quote</Button>
                </Link>
                <Link to="/services">
                  <Button variant="secondary" size="lg">Explore Services</Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative"
            >
              <div className="jj-glass relative overflow-hidden rounded-[2.25rem] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,101,26,0.08),transparent_40%,rgba(212,175,106,0.08))]" />
                <div className="relative grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="jj-label text-[0.62rem] text-jj-orange">Signature Service</p>
                    <p className="mt-3 font-heading text-2xl text-white">Elegant plating. Warm hospitality.</p>
                    <p className="mt-3 text-sm leading-7 text-jj-muted">A catering experience shaped for premium Nigerian events.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(232,101,26,0.18),rgba(17,17,17,0.9))] p-5">
                    <p className="jj-label text-[0.62rem] text-white/80">Available For</p>
                    <ul className="mt-4 space-y-3 text-sm text-white/85">
                      <li>Weddings</li>
                      <li>Corporate Events</li>
                      <li>Private Dining</li>
                      <li>Outdoor Celebrations</li>
                    </ul>
                  </div>
                  <div className="sm:col-span-2 rounded-[1.5rem] border border-jj-orange/20 bg-jj-black/80 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="jj-label text-[0.62rem] text-jj-gold">Our Promise</p>
                        <p className="mt-2 font-display text-3xl text-white">Premium taste, polished delivery.</p>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-3xl text-jj-orange">98%</p>
                        <p className="jj-label text-[0.55rem] text-jj-muted">Client Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="jj-scroll-indicator flex flex-col items-center gap-3 text-jj-muted">
              <span className="jj-label text-[0.58rem]">Scroll</span>
              <span className="text-2xl text-jj-orange">⌄</span>
            </div>
          </div>
        </Container>
      </section>

      <Section background="dark" spacing="none" className="border-y border-jj-orange/10">
        <Container className="grid grid-cols-2 gap-0 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-b border-jj-orange/10 px-4 py-8 text-center md:border-b-0 md:border-r md:border-jj-orange/10 last:border-r-0">
              <p className="font-heading text-4xl text-jj-orange sm:text-5xl">{item.value}</p>
              <p className="mt-2 jj-label text-[0.6rem] text-jj-muted">{item.label}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="jj-section-heading mx-auto mb-14 max-w-2xl">
            <span className="jj-label text-[0.65rem] text-jj-gold">What We Offer</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Tailored culinary experiences for every occasion</h2>
            <p className="max-w-xl text-sm leading-7 text-jj-muted">Designed for refined events, warm hospitality, and memorable moments across Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group flex flex-col gap-5 p-7 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-jj-orange/20 bg-jj-orange/10 font-heading text-2xl text-jj-orange transition-colors group-hover:bg-jj-orange group-hover:text-black">
                    {service.icon}
                  </div>
                  <span className="jj-label text-[0.58rem] text-jj-muted">Signature</span>
                </div>
                <h3 className="font-heading text-2xl text-white">{service.title}</h3>
                <p className="text-sm leading-7 text-jj-muted">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="dark" spacing="lg">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <span className="jj-label text-[0.65rem] text-jj-gold">Why Choose Us</span>
            <h2 className="font-display text-4xl sm:text-5xl">Food should feel as memorable as the event itself</h2>
            <p className="max-w-xl text-sm leading-7 text-jj-muted">
              From sourcing to plating, Johjay Foods treats every event like a signature dining experience. We combine dependable execution with culinary detail, so hosts can focus on their guests.
            </p>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-jj-orange text-xs font-bold text-black">✓</span>
                  <div>
                    <h3 className="font-heading text-xl text-white">{item}</h3>
                    <p className="mt-1 text-sm leading-7 text-jj-muted">
                      Carefully executed with style, warmth, and an attention to detail that fits premium hospitality.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(232,101,26,0.2),transparent_65%)] blur-xl" />
            <div className="relative grid gap-5 sm:grid-cols-2">
              <Card className="p-6">
                <p className="jj-label text-[0.58rem] text-jj-gold">Fresh Ingredients</p>
                <p className="mt-4 font-heading text-2xl text-white">Seasonal flavor, carefully sourced.</p>
              </Card>
              <Card className="p-6 sm:mt-8">
                <p className="jj-label text-[0.58rem] text-jj-gold">Experienced Chefs</p>
                <p className="mt-4 font-heading text-2xl text-white">Polished culinary teams with event discipline.</p>
              </Card>
              <Card className="p-6">
                <p className="jj-label text-[0.58rem] text-jj-gold">Timely Delivery</p>
                <p className="mt-4 font-heading text-2xl text-white">Prepared, punctual, and event-ready.</p>
              </Card>
              <Card className="p-6 sm:mt-8">
                <p className="jj-label text-[0.58rem] text-jj-gold">Custom Menus</p>
                <p className="mt-4 font-heading text-2xl text-white">Tailored experiences built around your vision.</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="cream" spacing="lg">
        <Container>
          <div className="jj-section-heading mx-auto mb-14 max-w-2xl">
            <span className="jj-label text-[0.65rem] text-jj-gold">A Taste of Our Menu</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Featured dishes that reflect our culinary style</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {menuPreview.map((dish, index) => (
              <Card key={dish.name} className="overflow-hidden p-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(232,101,26,0.2),rgba(255,255,255,0.04))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.14),transparent_52%)]" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/80">Dish {index + 1}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-white">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-jj-muted">{dish.description}</p>
                  <p className="mt-4 font-heading text-xl text-jj-orange">{dish.price}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/request-quote">
              <Button variant="primary" size="lg">View Full Menu</Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Section background="dark" spacing="lg">
        <Container>
          <div className="jj-section-heading mx-auto mb-14 max-w-2xl">
            <span className="jj-label text-[0.65rem] text-jj-gold">Testimonials</span>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Our clients speak for the experience</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.author} className="relative p-7">
                <div className="absolute right-5 top-5 text-5xl text-jj-orange/20">“</div>
                <div className="flex gap-1 text-jj-orange">★★★★★</div>
                <p className="mt-5 font-display text-2xl italic leading-8 text-white">{item.quote}</p>
                <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="font-heading text-lg text-white">{item.author}</p>
                    <p className="text-sm text-jj-muted">Johjay Foods Client</p>
                  </div>
                  <span className="jj-label rounded-full border border-jj-orange/20 bg-jj-orange/10 px-3 py-1 text-[0.55rem] text-jj-orange">{item.tag}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-[linear-gradient(135deg,#e8651a_0%,#c45510_100%)] py-16 text-black md:py-20">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Ready to Make Your Event Unforgettable?</h2>
          <p className="max-w-2xl text-sm leading-7 text-black/75 sm:text-base">
            Let us shape the culinary experience around your event with premium service, warm hospitality, and refined flavor.
          </p>
          <Link to="/request-quote">
            <Button variant="secondary" size="lg" className="border-black text-black hover:bg-white hover:text-black">
              Request a Quote
            </Button>
          </Link>
        </Container>
      </section>
    </div>
  )
}

export default Home