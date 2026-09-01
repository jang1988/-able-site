import ReferencjeClient from '@/components/ReferencjeClient';

export const metadata = {
  title: 'Referencje | BIGBUD',
  description: 'Galeria naszych referencji i realizacji projektów.',
  keywords: ['referencje', 'projekty', 'galeria', 'BIGBUD'],
  openGraph: {
    title: 'Referencje | BIGBUD',
    description: 'Galeria naszych referencji i realizacji projektów.',
    type: 'website',
    url: 'https://yourdomain.com/referencje',
    images: [
      {
        url: '/referencje1.webp',
        width: 1200,
        height: 630,
        alt: 'Referencja 1',
      },
    ],
  },
};

export default function Referencje() {
  return <ReferencjeClient />;
}
