import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { fetchGalleryItems } from '../api/galleryService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';

const placeholderImages = [
  {
    id: 'p1',
    title: 'Elegant Wedding Spread',
    category: 'Weddings',
    categoryKey: 'weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p2',
    title: 'Corporate Buffet Setup',
    category: 'Corporate',
    categoryKey: 'corporate',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p3',
    title: 'Nigerian Party Jollof',
    category: 'Plated Meals',
    categoryKey: 'plated_meals',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p4',
    title: 'Assorted Meat Platter',
    category: 'Buffet',
    categoryKey: 'buffet',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p5',
    title: 'Dessert Table Display',
    category: 'Desserts',
    categoryKey: 'desserts',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p6',
    title: 'Private Dining Setup',
    category: 'Private Parties',
    categoryKey: 'private',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p7',
    title: 'Cocktail Reception',
    category: 'Corporate',
    categoryKey: 'corporate',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p8',
    title: 'Outdoor Event Catering',
    category: 'Weddings',
    categoryKey: 'weddings',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&fit=crop&auto=format',
  },
  {
    id: 'p9',
    title: 'Chef at Work',
    category: 'Plated Meals',
    categoryKey: 'plated_meals',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&fit=crop&auto=format',
  },
]

const normalizeCategory = (item) => {
  if (item.categoryKey) {
    return item.categoryKey
  }

  const category = item.category || ''
  return category.toLowerCase().replace(/\s+/g, '_')
}

const Gallery = () => {
  const categories = [
    { key: 'all', label: 'All Images' },
    { key: 'weddings', label: 'Weddings' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'private', label: 'Private Parties' },
    { key: 'plated_meals', label: 'Plated Meals' },
    { key: 'buffet', label: 'Buffet' },
    { key: 'desserts', label: 'Desserts' },
  ];

  const [activeTab, setActiveTab] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadGallery = async () => {
      try {
        const items = await fetchGalleryItems();

        if (isMounted) {
          setGalleryItems(items);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(getApiErrorMessage(fetchError, 'Unable to load gallery items.'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadGallery();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayImages = galleryItems.length > 0 ? galleryItems : placeholderImages
  const showingPlaceholders = galleryItems.length === 0

  const filteredItems = activeTab === 'all'
    ? displayImages
    : displayImages.filter((item) => normalizeCategory(item) === activeTab)

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Gallery"
        title="Visual Gallery"
        subtitle="Browse through our portfolio of past catering setups, plated cuisines, and decorated tables."
        breadcrumb={[{ label: 'Home' }, { label: 'Gallery' }]}
        backgroundImage="https://images.unsplash.com/photo-1567337710282-00832b415979?w=1600&q=60&fit=crop&auto=format"
        backgroundAlt="Elegant catering spread"
      />

      {/* Filter Tabs & Gallery Grid */}
      <Section background="white" spacing="lg">
        <Container className="flex flex-col gap-8">
          {showingPlaceholders && !error && (
            <div className="rounded-2xl border border-jj-orange/20 bg-jj-orange/10 px-5 py-4 text-sm leading-7 text-white">
              📸 Our gallery is being updated. These are sample catering setups from our portfolio.
            </div>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 pb-4">
            {categories.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`jj-label cursor-pointer rounded-full border px-4 py-2 text-[0.62rem] transition-all duration-200
                  ${activeTab === tab.key
                    ? 'border-jj-orange bg-jj-orange text-black shadow-[0_0_20px_rgba(232,101,26,0.24)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-jj-orange/30 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="jj-shimmer rounded-2xl py-16 text-center text-sm text-white/70">Loading gallery...</div>
          ) : error ? (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center text-sm text-red-200">
              {error}
            </div>
          ) : (
            <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group mb-6 break-inside-avoid overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-jj-orange/35 hover:shadow-[0_20px_40px_rgba(232,101,26,0.15)]">
                  <div className="relative overflow-hidden" style={{ aspectRatio: filteredItems.indexOf(item) % 3 === 0 ? '4 / 3' : '3 / 4' }}>
                    <img src={item.image} alt={item.title} loading="lazy" className="jj-photo h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))] transition-colors duration-300 group-hover:bg-[rgba(232,101,26,0.18)]" />
                    <span className="jj-label absolute left-4 top-4 rounded-full border border-jj-orange/20 bg-jj-black/80 px-3 py-1 text-[0.55rem] text-jj-orange backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-jj-muted">{item.description || 'No description provided.'}</p>
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

export default Gallery;
