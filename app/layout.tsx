import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Climate Helper',
  description: 'Simple climate actions, emitters and calculator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
