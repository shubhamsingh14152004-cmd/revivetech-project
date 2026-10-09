export type PhonePrice = {
 brand: string;
 model: string;
 storage: string;
 conditions: {
 dead: [number, number];
 cracked: [number, number];
 worn: [number, number];
 mint: [number, number];
 };
};

// Seed from SUPPORTED_BRANDS, TODO(owner): verify all prices and models
export const prices: PhonePrice[] = [
 {
 brand: "Apple",
 model: "iPhone 13",
 storage: "128GB",
 conditions: {
 dead: [2000, 4000],
 cracked: [8000, 12000],
 worn: [15000, 18000],
 mint: [20000, 24000],
 },
 },
 {
 brand: "Samsung",
 model: "Galaxy S22",
 storage: "128GB",
 conditions: {
 dead: [1500, 3000],
 cracked: [6000, 9000],
 worn: [12000, 15000],
 mint: [17000, 20000],
 },
 },
 // Add more models here...
];

export const SUPPORTED_BRANDS = Array.from(new Set(prices.map(p => p.brand)));
