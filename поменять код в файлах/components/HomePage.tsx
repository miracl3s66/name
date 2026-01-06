import { Sparkles } from './icons';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { translations, type Language } from '../utils/translations';
import type { User } from '../types';

interface HomePageProps {
  user: User;
  language: Language;
}

export function HomePage({ user, language }: HomePageProps) {
  const t = translations[language];
  
  const aiRecommendations = [
    {
      id: '1',
      title: 'Weekend Casual Look',
      description: 'Perfect outfit for a relaxed weekend outing',
      image: 'https://images.unsplash.com/photo-1619027131391-87eadec6a398?w=400'
    },
    {
      id: '2',
      title: 'Business Professional',
      description: 'Elegant ensemble for your important meetings',
      image: 'https://images.unsplash.com/photo-1618953989832-f5323bc3c93a?w=400'
    },
    {
      id: '3',
      title: 'Evening Elegance',
      description: 'Stunning look for special occasions',
      image: 'https://images.unsplash.com/photo-1562182856-e39faab686d7?w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-8">
        <h1 className="text-3xl mb-2">{t.welcome}, {user.firstName}!</h1>
        <p className="text-purple-100">{t.discoverStyle}</p>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* About Store */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl mb-4">{t.aboutStore}</h2>
          <div className="space-y-3 text-gray-600">
            <p>
              {t.aboutStoreDesc1}
            </p>
            <p>
              {t.aboutStoreDesc2}
            </p>
            <p>
              {t.aboutStoreDesc3}
            </p>
          </div>
        </section>

        {/* Store History */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl mb-4">{t.ourJourney}</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <div className="bg-purple-100 text-purple-600 rounded-lg p-2">
                  <p className="text-xl">2020</p>
                </div>
              </div>
              <div>
                <h3 className="mb-1">{t.foundedTitle}</h3>
                <p className="text-gray-600 text-sm">
                  {t.foundedDesc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <div className="bg-blue-100 text-blue-600 rounded-lg p-2">
                  <p className="text-xl">2022</p>
                </div>
              </div>
              <div>
                <h3 className="mb-1">{t.expansionTitle}</h3>
                <p className="text-gray-600 text-sm">
                  {t.expansionDesc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <div className="bg-green-100 text-green-600 rounded-lg p-2">
                  <p className="text-xl">2024</p>
                </div>
              </div>
              <div>
                <h3 className="mb-1">{t.aiPoweredTitle}</h3>
                <p className="text-gray-600 text-sm">
                  {t.aiPoweredDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl">{t.aiRecommendations}</h2>
          </div>
          <p className="text-gray-600 mb-6">
            {t.aiRecommendationsDesc}
          </p>

          <div className="grid gap-4">
            {aiRecommendations.map((recommendation) => (
              <div
                key={recommendation.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-32 h-32 flex-shrink-0">
                    <ImageWithFallback
                      src={recommendation.image}
                      alt={recommendation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="mb-2">{recommendation.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{recommendation.description}</p>
                    <button className="text-sm text-purple-600 hover:text-purple-700">
                      {t.viewCollection} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl mb-1">500+</p>
            <p className="text-sm text-gray-600">{t.productsCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl mb-1">50K+</p>
            <p className="text-sm text-gray-600">{t.customersCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl mb-1">4.8★</p>
            <p className="text-sm text-gray-600">{t.rating}</p>
          </div>
        </section>
      </div>
    </div>
  );
}