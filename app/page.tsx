import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    // seksjon – center + luft
    <section className="flex flex-col items-center py-16 px-4">
      <div className="text-center space-y-20 max-w-screen-lg mx-auto">
        {/* tittel */}
        <h1 className="text-3xl font-bold text-gray-300">
          Reduser Karbondioksid (CO₂) - Beskytt planeten!
        </h1>

        {/* tre kort – kolonne på mobil, rad på større */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
          {/* 1. Actions */}
          <Link
            href="/actions"
            className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-green-500 hover:bg-green-600"
          >
            {/* bilde i kort */}
            <div className="relative w-40 h-32 sm:w-48 sm:h-36 overflow-hidden rounded-lg">
              <Image
                src="/content/handlinger.jpg"
                alt="Handlinger"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 192px, 160px"
              />
            </div>
            <span className="mt-3 text-white text-2xl font-semibold">
              Klimatiltak
            </span>
          </Link>

          {/* 2. Emitters */}
          <Link
            href="/emitters"
            className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-red-500 hover:bg-red-600"
          >
            {/* bilde i kort */}
            <div className="relative w-40 h-32 sm:w-48 sm:h-36 overflow-hidden rounded-lg">
              <Image
                src="/content/utslippskilder.jpg"
                alt="Utslippskilder"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 192px, 160px"
              />
            </div>
            <span className="mt-3 text-white text-2xl font-semibold">
              Utslippskilder
            </span>
          </Link>

          {/* 3. Kalkulator */}
          <Link
            href="/calculator"
            className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-orange-500 hover:bg-orange-600"
          >
            {/* bilde i kort */}
            <div className="relative w-40 h-32 sm:w-48 sm:h-36 overflow-hidden rounded-lg">
              <Image
                src="/content/kalkulatorCO2.jpg"
                alt="Kalkulator"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 192px, 160px"
              />
            </div>
            <span className="mt-3 text-white text-2xl font-semibold">
              Kalkulator
            </span>
          </Link>
        </div>

        {/* definisjon – lesbar på mobil */}
        <p className="max-w-3xl mx-auto text-gray-300 text-xl leading-relaxed mt-12 px-6">
          <dfn className="font-semibold text-white">Karbondioksid (CO₂)</dfn> er
          en fargeløs, luktfri gass som består av et karbonatom bundet til to
          oksygenatomer. Den er en naturlig del av atmosfæren og er avgjørende
          for fotosyntesen hos planter, men økte menneskeskapte utslipp bidrar
          til global oppvarming. Gassen brukes industrielt som kjølemiddel
          (tørris), i drikkevarer, sveising og til å hindre oksidasjon.
        </p>
      </div>
    </section>
  );
}
