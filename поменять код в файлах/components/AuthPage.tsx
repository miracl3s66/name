import { useState } from 'react';
import { translations, type Language } from '../utils/translations';
import type { User } from '../types';

interface AuthPageProps {
  onLogin: (username: string, password: string) => boolean;
  onRegister: (userData: Omit<User, 'orders'>) => boolean;
  language: Language;
}

export function AuthPage({ onLogin, onRegister, language }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const success = onLogin(username, password);
      if (!success) {
        setError(t.errorInvalidCredentials);
      }
    } else {
      if (!firstName || !lastName || !email) {
        setError(t.errorFillAllFields);
        return;
      }
      const success = onRegister({
        firstName,
        lastName,
        username,
        email,
        password,
        language: 'Russian',
        country: 'Russia',
        paymentMethod: 'Not set'
      });
      if (!success) {
        setError(t.errorUsernameExists);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">{t.authTitle}</h1>
          <p className="text-gray-600">{t.authSubtitle}</p>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => {
              setIsLogin(true);
              setError('');
            }}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              isLogin ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {t.login}
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setError('');
            }}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              !isLogin ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {t.register}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm mb-2">{t.firstName}</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t.lastName}</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t.email}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
            </>
          )}
          
          <div>
            <label className="block text-sm mb-2">{t.username}</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">{t.password}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isLogin ? t.loginButton : t.registerButton}
          </button>
        </form>

        {isLogin && (
          <p className="text-center text-sm text-gray-500 mt-4">
            {t.demoText}
          </p>
        )}
      </div>
    </div>
  );
}