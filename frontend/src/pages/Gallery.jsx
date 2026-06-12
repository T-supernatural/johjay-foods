import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { fetchGalleryItems } from '../api/galleryService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';
import PageHero from '../components/PageHero.jsx';

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

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Gallery"
        title="Visual Gallery"
        subtitle="Browse through our portfolio of past catering setups, plated cuisines, and decorated tables."
        breadcrumb={[{ label: 'Home' }, { label: 'Gallery' }]}
      />

      {/* Filter Tabs & Gallery Grid */}
      <Section background="white" spacing="lg">
        <Container className="flex flex-col gap-8">
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
          ) : filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
              No gallery items are available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card key={item.id} className="flex flex-col justify-between" padding="none">
                  <div className="bg-primary-900/10 h-64 flex items-center justify-center relative overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="text-center p-4 text-white/40">
                        <p className="font-heading italic text-sm">Image unavailable</p>
                      </div>
                    )}
                    <span className="jj-label absolute left-4 top-4 rounded-full border border-jj-orange/20 bg-jj-black/70 px-3 py-1 text-[0.55rem] text-jj-orange backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                    <p className="text-xs leading-7 text-jj-muted">{item.description || 'No description provided.'}</p>
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
