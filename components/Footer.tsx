import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-b border-red-500 bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
        <Link href="/" className="flex flex-col items-center ">
          <Image
            src="/actions/logo.jpg"
            alt="Logo"
            width={120}
            height={80}
            className="rounded-2xl border"
            priority={false}
          />
          <span className="text-green-300 font-bold">ØKO VERDEN</span>
        </Link>

        <div className="pl-10 text-center sm:text-center">
          © {new Date().getFullYear()} Klima Hjelper. Laget for læring
        </div>

        <div>
          <Link
            href="https://miljostatus.miljodirektoratet.no/miljomal/"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 font-semibold hover:underline pl-10"
          >
            VI ANBEFALER
          </Link>
        </div>
      </div>
    </footer>
  );
}
