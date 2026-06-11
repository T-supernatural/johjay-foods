import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { fetchGalleryItems } from '../api/galleryService.js';
import { getApiErrorMessage } from '../api/errorUtils.js';

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
      {/* Page Header */}
      <Section background="primary" spacing="sm" className="text-center">
        <Container className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">Visual Gallery</h1>
          <p className="text-cream-100/80 font-sans max-w-xl mx-auto">
            Browse through our portfolio of past catering setups, plated cuisines, and decorated tables.
          </p>
        </Container>
      </Section>

      {/* Filter Tabs & Gallery Grid */}
      <Section background="white">
        <Container className="flex flex-col gap-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-cream-200 pb-4">
            {categories.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer
                  ${activeTab === tab.key 
                    ? 'bg-primary-500 text-cream-50' 
                    : 'text-primary-700 hover:bg-cream-100'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="py-16 text-center text-sm text-primary-800/70">Loading gallery...</div>
          ) : error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
              {error}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 text-center text-sm text-primary-800/70">
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
                      <div className="text-primary-800/40 text-center p-4">
                        <p className="font-serif italic text-sm">Image unavailable</p>
                      </div>
                    )}
                    <span className="text-xs uppercase font-bold tracking-widest text-primary-700 bg-cream-100 border border-cream-200 px-3 py-1 rounded-full absolute top-4 left-4">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-primary-800">{item.title}</h3>
                    <p className="text-primary-800/70 text-xs font-sans">{item.description || 'No description provided.'}</p>
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
