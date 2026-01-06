import { useState } from 'react';
import { User as UserIcon, Package, Settings, LogOut, Globe, CreditCard, Lock, Mail, ChevronRight } from './icons';
import { translations, type Language } from '../utils/translations';
import type { User } from '../types';

interface AccountPageProps {
  user: User;
  onUpdateUser: (updates: Partial<User>) => void;
  onLogout: () => void;
  language: Language;
}

type Section = 'main' | 'orders' | 'settings' | 'payment' | 'language' | 'security';

export function AccountPage({ user, onUpdateUser, onLogout, language }: AccountPageProps) {
  const [currentSection, setCurrentSection] = useState<Section>('main');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    language: user.language,
    country: user.country,
    paymentMethod: user.paymentMethod
  });

  const t = translations[language];

  const handleSaveProfile = () => {
    onUpdateUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    });
    setEditMode(false);
  };

  const handleChangePassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert(t.passwordsDoNotMatch);
      return;
    }
    if (formData.currentPassword !== user.password) {
      alert(t.incorrectPassword);
      return;
    }
    onUpdateUser({ password: formData.newPassword });
    setFormData({ ...formData, currentPassword: '', newPassword: '', confirmPassword: '' });
    alert(t.passwordChanged);
  };

  const handleSaveLanguage = () => {
    onUpdateUser({ language: formData.language, country: formData.country });
    setCurrentSection('main');
  };

  const handleSavePayment = () => {
    onUpdateUser({ paymentMethod: formData.paymentMethod });
    setCurrentSection('main');
  };

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-11-20',
      total: 245.99,
      status: 'delivered' as const,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-11-18',
      total: 129.50,
      status: 'shipped' as const,
      items: 2
    },
    {
      id: 'ORD-003',
      date: '2024-11-15',
      total: 89.99,
      status: 'pending' as const,
      items: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (currentSection === 'orders') {
    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-8">
          <button
            onClick={() => setCurrentSection('main')}
            className="flex items-center gap-2 mb-4 text-green-100 hover:text-white"
          >
            ← {t.back}
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-8 h-8" />
            <h1 className="text-3xl">{t.myOrders}</h1>
          </div>
          <p className="text-green-100">{t.trackPurchases}</p>
        </div>

        <div className="px-6 py-6 space-y-4">
          {mockOrders.map(order => (
            <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1">{order.id}</h3>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                  {t[order.status]}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <p className="text-sm text-gray-600">{order.items} {t.items}</p>
                <p className="text-lg">${order.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentSection === 'settings') {
    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-8">
          <button
            onClick={() => setCurrentSection('main')}
            className="flex items-center gap-2 mb-4 text-purple-100 hover:text-white"
          >
            ← {t.back}
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Settings className="w-8 h-8" />
            <h1 className="text-3xl">{t.profileSettings}</h1>
          </div>
          <p className="text-purple-100">{t.manageAccount}</p>
        </div>

        <div className="px-6 py-6">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            {!editMode ? (
              <>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">{t.firstName}</label>
                  <p className="text-lg">{user.firstName}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">{t.lastName}</label>
                  <p className="text-lg">{user.lastName}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">{t.email}</label>
                  <p className="text-lg">{user.email}</p>
                </div>
                <button
                  onClick={() => setEditMode(true)}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                >
                  {t.editProfile}
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm mb-2">{t.firstName}</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">{t.lastName}</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">{t.email}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                  >
                    {t.saveChanges}
                  </button>
                  <button
                    onClick={() => {
                      setEditMode(false);
                      setFormData({
                        ...formData,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                      });
                    }}
                    className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
                  >
                    {t.cancel}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 'security') {
    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-8">
          <button
            onClick={() => setCurrentSection('main')}
            className="flex items-center gap-2 mb-4 text-red-100 hover:text-white"
          >
            ← {t.back}
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Lock className="w-8 h-8" />
            <h1 className="text-3xl">{t.security}</h1>
          </div>
          <p className="text-red-100">{t.changePasswordTitle}</p>
        </div>

        <div className="px-6 py-6">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm mb-2">{t.currentPassword}</label>
              <input
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">{t.newPassword}</label>
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">{t.confirmPassword}</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              onClick={handleChangePassword}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              {t.changePassword}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 'language') {
    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-8">
          <button
            onClick={() => setCurrentSection('main')}
            className="flex items-center gap-2 mb-4 text-blue-100 hover:text-white"
          >
            ← {t.back}
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-8 h-8" />
            <h1 className="text-3xl">{t.languageAndRegion}</h1>
          </div>
          <p className="text-blue-100">{t.customizePreferences}</p>
        </div>

        <div className="px-6 py-6">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm mb-2">{t.language}</label>
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="English">{t.english}</option>
                <option value="Russian">{t.russian}</option>
                <option value="French">{t.french}</option>
                <option value="Spanish">{t.spanish}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">{t.country}</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="United States">{t.usa}</option>
                <option value="Russia">{t.russia}</option>
                <option value="France">{t.france}</option>
                <option value="Spain">{t.spain}</option>
              </select>
            </div>
            <button
              onClick={handleSaveLanguage}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              {t.savePreferences}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 'payment') {
    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-8">
          <button
            onClick={() => setCurrentSection('main')}
            className="flex items-center gap-2 mb-4 text-orange-100 hover:text-white"
          >
            ← {t.back}
          </button>
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="w-8 h-8" />
            <h1 className="text-3xl">{t.paymentMethods}</h1>
          </div>
          <p className="text-orange-100">{t.managePaymentOptions}</p>
        </div>

        <div className="px-6 py-6">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm mb-2">{t.preferredPaymentMethod}</label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="Not set">{t.notSet}</option>
                <option value="Credit Card">{t.creditCard}</option>
                <option value="Debit Card">{t.debitCard}</option>
                <option value="PayPal">{t.paypal}</option>
                <option value="Apple Pay">{t.applePay}</option>
                <option value="Google Pay">{t.googlePay}</option>
              </select>
            </div>
            <button
              onClick={handleSavePayment}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              {t.savePaymentMethod}
            </button>
            <p className="text-sm text-gray-500 text-center">
              {t.paymentSecure}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main account menu
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <UserIcon className="w-8 h-8" />
          <h1 className="text-3xl">{t.myAccount}</h1>
        </div>
        <p className="text-indigo-100">{user.email}</p>
      </div>

      <div className="px-6 py-6">
        <div className="bg-white rounded-lg shadow-sm mb-4 p-6">
          <h2 className="text-xl mb-2">{user.firstName} {user.lastName}</h2>
          <p className="text-sm text-gray-600 mb-1">{t.language}: {user.language}</p>
          <p className="text-sm text-gray-600 mb-1">{t.country}: {user.country}</p>
          <p className="text-sm text-gray-600">{t.preferredPaymentMethod}: {user.paymentMethod}</p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setCurrentSection('orders')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-gray-600" />
              <span>{t.myOrders}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => setCurrentSection('settings')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-gray-600" />
              <span>{t.profileSettings}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => setCurrentSection('security')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-gray-600" />
              <span>{t.security}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => setCurrentSection('language')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-gray-600" />
              <span>{t.languageAndRegion}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => setCurrentSection('payment')}
            className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-gray-600" />
              <span>{t.paymentMethods}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={onLogout}
            className="w-full bg-red-50 text-red-600 rounded-lg p-4 shadow-sm flex items-center justify-center gap-3 hover:bg-red-100 transition-colors mt-6"
          >
            <LogOut className="w-6 h-6" />
            <span>{t.logout}</span>
          </button>
        </div>
      </div>
    </div>
  );
}