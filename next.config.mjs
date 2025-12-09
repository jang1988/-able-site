/** @type {import('next').NextConfig} */
const nextConfig = {
  // Разрешить доступ с других устройств в разработке
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.1.179', // Конкретный IP
    '*.local', // Все .local домены
    'local-origin.dev', // Пример кастомного домена
  ],
  images: {
    qualities: [25, 50, 75, 85, 100],
  },

  // Или разрешить все origins (не рекомендуется для продакшена)
  allowedDevOrigins: process.env.NODE_ENV === 'development' ? ['*'] : [],
}

export default nextConfig