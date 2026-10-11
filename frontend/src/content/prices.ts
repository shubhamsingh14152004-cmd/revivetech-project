export type DevicePrice = {
  id: string;
  brandId: string;
  model: string;
  storage: string;
  prices: {
    mint: [number, number]; // [min, max]
    worn: [number, number];
    cracked: [number, number];
    dead: [number, number];
  };
};

// TODO(owner): verify all of these base values and add the full matrix for all supported brands.
export const DEVICE_PRICES: DevicePrice[] = [
  {
    id: "iphone-15-pro-max-256",
    brandId: "apple",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    prices: {
      mint: [65000, 72000],
      worn: [50000, 58000],
      cracked: [35000, 42000],
      dead: [15000, 20000],
    },
  },
  {
    id: "iphone-15-pro-128",
    brandId: "apple",
    model: "iPhone 15 Pro",
    storage: "128GB",
    prices: {
      mint: [55000, 62000],
      worn: [42000, 48000],
      cracked: [28000, 34000],
      dead: [12000, 16000],
    },
  },
  {
    id: "iphone-14-128",
    brandId: "apple",
    model: "iPhone 14",
    storage: "128GB",
    prices: {
      mint: [35000, 40000],
      worn: [25000, 30000],
      cracked: [15000, 18000],
      dead: [8000, 10000],
    },
  },
  {
    id: "galaxy-s24-ultra-256",
    brandId: "samsung",
    model: "Galaxy S24 Ultra",
    storage: "256GB",
    prices: {
      mint: [70000, 78000],
      worn: [55000, 62000],
      cracked: [40000, 48000],
      dead: [18000, 24000],
    },
  },
  {
    id: "galaxy-s23-128",
    brandId: "samsung",
    model: "Galaxy S23",
    storage: "128GB",
    prices: {
      mint: [38000, 45000],
      worn: [28000, 34000],
      cracked: [18000, 22000],
      dead: [9000, 12000],
    },
  },
  {
    id: "pixel-8-pro-128",
    brandId: "pixel",
    model: "Pixel 8 Pro",
    storage: "128GB",
    prices: {
      mint: [45000, 52000],
      worn: [35000, 40000],
      cracked: [22000, 28000],
      dead: [12000, 16000],
    },
  },
  {
    id: "oneplus-12-256",
    brandId: "oneplus",
    model: "OnePlus 12",
    storage: "256GB",
    prices: {
      mint: [42000, 48000],
      worn: [32000, 38000],
      cracked: [20000, 25000],
      dead: [10000, 14000],
    },
  }
];
