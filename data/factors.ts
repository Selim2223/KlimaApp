export const FACTOR = {
  flightPerHourKg: 150,
  meatPerMealKg: 7,
  fishPerMealKg: 1.7,
  dieselPerKmKg: 0.2,
};

export const AVERAGE = {
  flightKg: 300,
  meatKg: 250,
  fishKg: 90,
  dieselKg: 120,
  heatingKg: 200,
};

export type Answers = {
  flightHours: number;
  meatPerWeek: number;
  fishPerWeek: number;
  dieselKmPerYear: number;
  heatingKgPerYear: number;
};

export function calcTotals(a: Answers) {
  const flightKg = a.flightHours * FACTOR.flightPerHourKg;
  const meatKg = a.meatPerWeek * 52 * FACTOR.meatPerMealKg;
  const fishKg = a.fishPerWeek * 52 * FACTOR.fishPerMealKg;
  const dieselKg = a.dieselKmPerYear * FACTOR.dieselPerKmKg;
  const heatingKg = a.heatingKgPerYear;
  const total = flightKg + meatKg + fishKg + dieselKg + heatingKg;
  return { flightKg, meatKg, fishKg, dieselKg, heatingKg, total };
}
