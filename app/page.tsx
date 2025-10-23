// import Link from 'next/link';
// import Image from 'next/image';

// export default function HomePage() {
//   return (
//     <section className="flex flex-col items-center py-16">
//       <div className="text-center space-y-20">
//         <h1 className="text-3xl font-bold text-gray-300">
//           Reduser Karbondioksid (CO2) - Beskytt planeten
//         </h1>

//         <div className="flex flex-col md:flex-row gap-10">
//           {/* 1. Actions */}
//           <Link
//             href="/actions"
//             className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-green-500 hover:bg-green-600"
//           >
//             <div className="relative w-50 h-40 overflow-hidden rounded-lg">
//               <Image
//                 src="/content/handlinger.jpg"
//                 alt="Handlinger"
//                 fill
//                 className="object-cover"
//                 sizes="128px"
//               />
//             </div>
//             <span className="mt-3 text-white text-2xl font-semibold">
//               Klimatiltak
//             </span>
//           </Link>

//           {/* 2. Emitters */}
//           <Link
//             href="/emitters"
//             className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-red-500 hover:bg-red-600"
//           >
//             <div className="relative w-50 h-40 overflow-hidden rounded-lg">
//               <Image
//                 src="/content/utslippskilder.jpg"
//                 alt="Utslippskilder"
//                 fill
//                 className="object-cover"
//                 sizes="128px"
//               />
//             </div>
//             <span className="mt-3 text-white text-2xl font-semibold">
//               Utslippskilder
//             </span>
//           </Link>

//           {/* 3. KalKulator */}
//           <Link
//             href="/calculator"
//             className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-orange-500 hover:bg-orange-600"
//           >
//             <div className="relative w-50 h-40 overflow-hidden rounded-lg">
//               <Image
//                 src="/content/kalkulatorCO2.jpg"
//                 alt="Kalkulator"
//                 fill
//                 className="object-cover"
//                 sizes="128px"
//               />
//             </div>
//             <span className="mt-3 text-white text-2xl font-semibold">
//               Kalkulator
//             </span>
//           </Link>
          
//         </div>
      
//       </div>
//     </section>
//   );
// }






import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center py-16">
      <div className="text-center space-y-20">
        <h1 className="text-3xl font-bold text-gray-300">
          Reduser Karbondioksid (CO₂) - Beskytt planeten
        </h1>

        {/* 🔹 три блока */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* 1. Actions */}
          <Link
            href="/actions"
            className="flex flex-col items-center justify-center w-56 h-56 rounded-xl shadow-md text-center transition bg-green-500 hover:bg-green-600"
          >
            <div className="relative w-50 h-40 overflow-hidden rounded-lg">
              <Image
                src="/content/handlinger.jpg"
                alt="Handlinger"
                fill
                className="object-cover"
                sizes="128px"
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
            <div className="relative w-50 h-40 overflow-hidden rounded-lg">
              <Image
                src="/content/utslippskilder.jpg"
                alt="Utslippskilder"
                fill
                className="object-cover"
                sizes="128px"
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
            <div className="relative w-50 h-40 overflow-hidden rounded-lg">
              <Image
                src="/content/kalkulatorCO2.jpg"
                alt="Kalkulator"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <span className="mt-3 text-white text-2xl font-semibold">
              Kalkulator
            </span>
          </Link>
        </div>

        {/* 🔹 определение CO₂ */}
        <p className="max-w-3xl mx-auto text-gray-300 text-xl leading-relaxed mt-12 px-6">
          <dfn className="font-semibold text-white">Karbondioksid (CO₂)</dfn>{' '}
          er en fargeløs, luktfri gass som består av et karbonatom bundet til to
          oksygenatomer. Den er en naturlig del av atmosfæren og er avgjørende
          for fotosyntesen hos planter, men økte menneskeskapte utslipp bidrar
          til global oppvarming. Gassen brukes industrielt som kjølemiddel
          (tørris), i drikkevarer, sveising og til å hindre oksidasjon.
        </p>
      </div>
    </section>
  );
}
