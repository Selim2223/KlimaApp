import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

// meta info
export const metadata = {
  title: "Climate Helper",
  description: "Simple climate actions, emitters and calculator",
};

// viewport for mobil
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="h-full">
      {/* hovedside */}
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        {/* topp meny */}
        <Header />

        {/* hovedinnhold – responsiv bredde og padding */}
        <main className="w-full max-w-screen-xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex-1">
          {children}
        </main>

        {/* bunntekst */}
        <Footer />
      </body>
    </html>
  );
}
