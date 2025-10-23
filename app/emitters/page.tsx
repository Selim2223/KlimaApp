// 'use client';

// import { useState } from 'react';
// import { countries } from '@data/countries';
// import CountryTable from '@components/CountryTable';
// import CountryChart from '@components/CountryChart';

// export default function EmittersPage() {
//   const [view, setView] = useState<'table' | 'chart'>('table');

//   return (
//     <section className="space-y-4">
//       <h1 className="text-2xl font-bold text-center">
//         Top 20 land med CO2 utslipp per inbygger
//       </h1>

//       <div className="flex gap-10">
//         <button
//           className={`btn text-2xl rounded-lg border-1 transition  ${view === 'table' ? 'btn-active' : ''}`}
//           onClick={() => setView('table')}
//         >
//           Tabell
//         </button>
//         <button
//           className={`btn text-2xl rounded-lg border-1 transition ${view === 'chart' ? 'btn-active' : ''}`}
//           onClick={() => setView('chart')}
//         >
//           Diagram
//         </button>
//       </div>

//       {view === 'table' ? (
//         <CountryTable data={countries} />
//       ) : (
//         <CountryChart data={countries} />
//       )}
//     </section>
//   );
// }





'use client';

import { useState } from 'react';
import { countries } from '@data/countries';
import CountryTable from '@components/CountryTable';
import CountryChart from '@components/CountryChart';

export default function EmittersPage() {
  const [view, setView] = useState<'table' | 'chart'>('table');

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-center">
        Top 20 land med CO2 utslipp per inbygger
      </h1>

      <div className="flex gap-6 justify-center">
        <button
          className={`btn btn-tab text-2xl ${view === 'table' ? 'btn-tab-active' : ''}`}
          onClick={() => setView('table')}
        >
          Tabell
        </button>

        <button
          className={`btn btn-tab text-2xl ${view === 'chart' ? 'btn-tab-active' : ''}`}
          onClick={() => setView('chart')}
        >
          Diagram
        </button>
      </div>

      {view === 'table' ? (
        <CountryTable data={countries} />
      ) : (
        <CountryChart data={countries} />
      )}
    </section>
  );
}
