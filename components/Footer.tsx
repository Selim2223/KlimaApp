import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // footer
    <footer className="border-t-1 border-b-3 border-red-500 bg-background text-foreground">
      {/* alt på rad i midten */}
      <div className="container mx-auto max-w-screen-lg px-4 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 text-center">
        {/* logo */}
        <Link href="/" className="flex flex-col items-center">
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

        {/* tekst */}
        <span>
          © {new Date().getFullYear()} Klima Hjelper. Laget for læring
        </span>

        {/* lenke */}
        <Link
          href="https://miljostatus.miljodirektoratet.no/miljomal/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500 font-semibold hover:underline"
        >
          VI ANBEFALER
        </Link>
      </div>
    </footer>
  );
}
