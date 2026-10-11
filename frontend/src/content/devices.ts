// Auto-generated static device catalog for Revora
// Contains 482 verified devices across all supported brands

export interface DeviceVariant {
  storage: string;
}

export interface PriceRangeValues {
  min: number;
  max: number;
}

export interface DevicePriceRanges {
  dead?: PriceRangeValues;
  cracked?: PriceRangeValues;
  worn?: PriceRangeValues;
  mint?: PriceRangeValues;
}

export interface DeviceData {
  _id: string;
  brandId: string;
  name: string;
  series: string;
  releaseYear?: number;
  slug?: string;
  variants: DeviceVariant[];
  priceRanges?: DevicePriceRanges;
}

export const ALL_DEVICES: DeviceData[] = [
  {
    "_id": "dev_1791582521231_0j51n",
    "brandId": "apple",
    "name": "iPhone 15 Pro Max",
    "series": "iPhone 15",
    "releaseYear": 2023,
    "slug": "iphone-15-pro-max",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 65000,
        "max": 72000
      },
      "worn": {
        "min": 50000,
        "max": 58000
      },
      "cracked": {
        "min": 35000,
        "max": 42000
      },
      "dead": {
        "min": 15000,
        "max": 20000
      }
    }
  },
  {
    "_id": "dev_1791582521237_o6vdd",
    "brandId": "apple",
    "name": "iPhone 15 Pro",
    "series": "iPhone 15",
    "releaseYear": 2023,
    "slug": "iphone-15-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 55000,
        "max": 62000
      },
      "worn": {
        "min": 42000,
        "max": 48000
      },
      "cracked": {
        "min": 28000,
        "max": 34000
      },
      "dead": {
        "min": 12000,
        "max": 16000
      }
    }
  },
  {
    "_id": "dev_1791582521251_kbvcu",
    "brandId": "apple",
    "name": "iPhone 15 Plus",
    "series": "iPhone 15",
    "releaseYear": 2023,
    "slug": "iphone-15-plus",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 45000,
        "max": 50000
      },
      "worn": {
        "min": 34000,
        "max": 39000
      },
      "cracked": {
        "min": 22000,
        "max": 27000
      },
      "dead": {
        "min": 10000,
        "max": 14000
      }
    }
  },
  {
    "_id": "dev_1791582521254_eende",
    "brandId": "apple",
    "name": "iPhone 15",
    "series": "iPhone 15",
    "releaseYear": 2023,
    "slug": "iphone-15",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 40000,
        "max": 45000
      },
      "worn": {
        "min": 30000,
        "max": 35000
      },
      "cracked": {
        "min": 18000,
        "max": 23000
      },
      "dead": {
        "min": 9000,
        "max": 12000
      }
    }
  },
  {
    "_id": "dev_1791582521257_q3g5o",
    "brandId": "apple",
    "name": "iPhone 14 Pro Max",
    "series": "iPhone 14",
    "releaseYear": 2022,
    "slug": "iphone-14-pro-max",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 52000,
        "max": 58000
      },
      "worn": {
        "min": 40000,
        "max": 46000
      },
      "cracked": {
        "min": 26000,
        "max": 32000
      },
      "dead": {
        "min": 12000,
        "max": 16000
      }
    }
  },
  {
    "_id": "dev_1791582521258_ub9o5",
    "brandId": "apple",
    "name": "iPhone 14 Pro",
    "series": "iPhone 14",
    "releaseYear": 2022,
    "slug": "iphone-14-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 44000,
        "max": 50000
      },
      "worn": {
        "min": 33000,
        "max": 39000
      },
      "cracked": {
        "min": 21000,
        "max": 26000
      },
      "dead": {
        "min": 10000,
        "max": 13000
      }
    }
  },
  {
    "_id": "dev_1791582521260_xawmz",
    "brandId": "apple",
    "name": "iPhone 14 Plus",
    "series": "iPhone 14",
    "releaseYear": 2022,
    "slug": "iphone-14-plus",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521262_vdrus",
    "brandId": "apple",
    "name": "iPhone 14",
    "series": "iPhone 14",
    "releaseYear": 2022,
    "slug": "iphone-14",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 35000,
        "max": 40000
      },
      "worn": {
        "min": 25000,
        "max": 30000
      },
      "cracked": {
        "min": 15000,
        "max": 18000
      },
      "dead": {
        "min": 8000,
        "max": 10000
      }
    }
  },
  {
    "_id": "dev_1791582521264_054qj",
    "brandId": "apple",
    "name": "iPhone 13 Pro Max",
    "series": "iPhone 13",
    "releaseYear": 2021,
    "slug": "iphone-13-pro-max",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 42000,
        "max": 48000
      },
      "worn": {
        "min": 32000,
        "max": 38000
      },
      "cracked": {
        "min": 20000,
        "max": 25000
      },
      "dead": {
        "min": 9000,
        "max": 12000
      }
    }
  },
  {
    "_id": "dev_1791582521266_b7krm",
    "brandId": "apple",
    "name": "iPhone 13 Pro",
    "series": "iPhone 13",
    "releaseYear": 2021,
    "slug": "iphone-13-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "_id": "dev_1791582521267_pmr27",
    "brandId": "apple",
    "name": "iPhone 13",
    "series": "iPhone 13",
    "releaseYear": 2021,
    "slug": "iphone-13",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 28000,
        "max": 33000
      },
      "worn": {
        "min": 20000,
        "max": 25000
      },
      "cracked": {
        "min": 12000,
        "max": 15000
      },
      "dead": {
        "min": 6000,
        "max": 8000
      }
    }
  },
  {
    "_id": "dev_1791582521269_4lbmf",
    "brandId": "apple",
    "name": "iPhone 13 mini",
    "series": "iPhone 13",
    "releaseYear": 2021,
    "slug": "iphone-13-mini",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521272_w5lhd",
    "brandId": "apple",
    "name": "iPhone 12 Pro Max",
    "series": "iPhone 12",
    "releaseYear": 2020,
    "slug": "iphone-12-pro-max",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521274_hfspm",
    "brandId": "apple",
    "name": "iPhone 12 Pro",
    "series": "iPhone 12",
    "releaseYear": 2020,
    "slug": "iphone-12-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521275_4zcch",
    "brandId": "apple",
    "name": "iPhone 12",
    "series": "iPhone 12",
    "releaseYear": 2020,
    "slug": "iphone-12",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 20000,
        "max": 24000
      },
      "worn": {
        "min": 14000,
        "max": 18000
      },
      "cracked": {
        "min": 8000,
        "max": 11000
      },
      "dead": {
        "min": 4000,
        "max": 6000
      }
    }
  },
  {
    "_id": "dev_1791582521277_6htjg",
    "brandId": "apple",
    "name": "iPhone 12 mini",
    "series": "iPhone 12",
    "releaseYear": 2020,
    "slug": "iphone-12-mini",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521279_j0bns",
    "brandId": "apple",
    "name": "iPhone 11 Pro Max",
    "series": "iPhone 11",
    "releaseYear": 2019,
    "slug": "iphone-11-pro-max",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521281_aq63g",
    "brandId": "apple",
    "name": "iPhone 11 Pro",
    "series": "iPhone 11",
    "releaseYear": 2019,
    "slug": "iphone-11-pro",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521283_fq4hn",
    "brandId": "apple",
    "name": "iPhone 11",
    "series": "iPhone 11",
    "releaseYear": 2019,
    "slug": "iphone-11",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 15000,
        "max": 18000
      },
      "worn": {
        "min": 10000,
        "max": 13000
      },
      "cracked": {
        "min": 5500,
        "max": 7500
      },
      "dead": {
        "min": 2500,
        "max": 4000
      }
    }
  },
  {
    "_id": "dev_1791582521287_b71l0",
    "brandId": "apple",
    "name": "iPhone XS Max",
    "series": "Older Models",
    "releaseYear": 2018,
    "slug": "iphone-xs-max",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521289_z4nsr",
    "brandId": "apple",
    "name": "iPhone XS",
    "series": "Older Models",
    "releaseYear": 2018,
    "slug": "iphone-xs",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521298_thn3p",
    "brandId": "apple",
    "name": "iPhone XR",
    "series": "Older Models",
    "releaseYear": 2018,
    "slug": "iphone-xr",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521300_ibuj1",
    "brandId": "apple",
    "name": "iPhone X",
    "series": "Older Models",
    "releaseYear": 2017,
    "slug": "iphone-x",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521302_gkno6",
    "brandId": "apple",
    "name": "iPhone 8 Plus",
    "series": "Older Models",
    "releaseYear": 2017,
    "slug": "iphone-8-plus",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521304_e6c3o",
    "brandId": "apple",
    "name": "iPhone 8",
    "series": "Older Models",
    "releaseYear": 2017,
    "slug": "iphone-8",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521306_5knxy",
    "brandId": "apple",
    "name": "iPhone SE (3rd Gen)",
    "series": "Older Models",
    "releaseYear": 2022,
    "slug": "iphone-se-3rd-gen-",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521308_zi8js",
    "brandId": "apple",
    "name": "iPhone SE (2nd Gen)",
    "series": "Older Models",
    "releaseYear": 2020,
    "slug": "iphone-se-2nd-gen-",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521314_97sbp",
    "brandId": "samsung",
    "name": "Galaxy S24 Ultra",
    "series": "Galaxy S Series",
    "releaseYear": 2024,
    "slug": "galaxy-s24-ultra",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 70000,
        "max": 78000
      },
      "worn": {
        "min": 55000,
        "max": 62000
      },
      "cracked": {
        "min": 40000,
        "max": 48000
      },
      "dead": {
        "min": 18000,
        "max": 24000
      }
    }
  },
  {
    "_id": "dev_1791582521318_yz3ib",
    "brandId": "samsung",
    "name": "Galaxy S24+",
    "series": "Galaxy S Series",
    "releaseYear": 2024,
    "slug": "galaxy-s24-",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 52000,
        "max": 58000
      },
      "worn": {
        "min": 40000,
        "max": 46000
      },
      "cracked": {
        "min": 27000,
        "max": 33000
      },
      "dead": {
        "min": 12000,
        "max": 16000
      }
    }
  },
  {
    "_id": "dev_1791582521321_prh7q",
    "brandId": "samsung",
    "name": "Galaxy S24",
    "series": "Galaxy S Series",
    "releaseYear": 2024,
    "slug": "galaxy-s24",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 44000,
        "max": 50000
      },
      "worn": {
        "min": 32000,
        "max": 38000
      },
      "cracked": {
        "min": 20000,
        "max": 25000
      },
      "dead": {
        "min": 9000,
        "max": 13000
      }
    }
  },
  {
    "_id": "dev_1791582521324_3r0t1",
    "brandId": "samsung",
    "name": "Galaxy S23 Ultra",
    "series": "Galaxy S Series",
    "releaseYear": 2023,
    "slug": "galaxy-s23-ultra",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 52000,
        "max": 60000
      },
      "worn": {
        "min": 40000,
        "max": 48000
      },
      "cracked": {
        "min": 28000,
        "max": 35000
      },
      "dead": {
        "min": 13000,
        "max": 18000
      }
    }
  },
  {
    "_id": "dev_1791582521326_vdtjk",
    "brandId": "samsung",
    "name": "Galaxy S23+",
    "series": "Galaxy S Series",
    "releaseYear": 2023,
    "slug": "galaxy-s23-",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521328_v2p71",
    "brandId": "samsung",
    "name": "Galaxy S23",
    "series": "Galaxy S Series",
    "releaseYear": 2023,
    "slug": "galaxy-s23",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 38000,
        "max": 45000
      },
      "worn": {
        "min": 28000,
        "max": 34000
      },
      "cracked": {
        "min": 18000,
        "max": 22000
      },
      "dead": {
        "min": 9000,
        "max": 12000
      }
    }
  },
  {
    "_id": "dev_1791582521331_37h0l",
    "brandId": "samsung",
    "name": "Galaxy S23 FE",
    "series": "Galaxy S Series",
    "releaseYear": 2023,
    "slug": "galaxy-s23-fe",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521334_09811",
    "brandId": "samsung",
    "name": "Galaxy S22 Ultra",
    "series": "Galaxy S Series",
    "releaseYear": 2022,
    "slug": "galaxy-s22-ultra",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "_id": "dev_1791582521336_jnlo1",
    "brandId": "samsung",
    "name": "Galaxy S22+",
    "series": "Galaxy S Series",
    "releaseYear": 2022,
    "slug": "galaxy-s22-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521338_hepio",
    "brandId": "samsung",
    "name": "Galaxy S22",
    "series": "Galaxy S Series",
    "releaseYear": 2022,
    "slug": "galaxy-s22",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521340_shawk",
    "brandId": "samsung",
    "name": "Galaxy S21 Ultra",
    "series": "Galaxy S Series",
    "releaseYear": 2021,
    "slug": "galaxy-s21-ultra",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521342_q57ie",
    "brandId": "samsung",
    "name": "Galaxy S21+",
    "series": "Galaxy S Series",
    "releaseYear": 2021,
    "slug": "galaxy-s21-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521345_vkfb2",
    "brandId": "samsung",
    "name": "Galaxy S21",
    "series": "Galaxy S Series",
    "releaseYear": 2021,
    "slug": "galaxy-s21",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521347_iou6a",
    "brandId": "samsung",
    "name": "Galaxy S21 FE",
    "series": "Galaxy S Series",
    "releaseYear": 2022,
    "slug": "galaxy-s21-fe",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521349_vzecx",
    "brandId": "samsung",
    "name": "Galaxy S20 Ultra",
    "series": "Galaxy S Series",
    "releaseYear": 2020,
    "slug": "galaxy-s20-ultra",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521351_yr2bm",
    "brandId": "samsung",
    "name": "Galaxy S20+",
    "series": "Galaxy S Series",
    "releaseYear": 2020,
    "slug": "galaxy-s20-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521353_zt6rm",
    "brandId": "samsung",
    "name": "Galaxy S20",
    "series": "Galaxy S Series",
    "releaseYear": 2020,
    "slug": "galaxy-s20",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521355_bj7p7",
    "brandId": "samsung",
    "name": "Galaxy S20 FE",
    "series": "Galaxy S Series",
    "releaseYear": 2020,
    "slug": "galaxy-s20-fe",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521357_jl7lg",
    "brandId": "samsung",
    "name": "Galaxy S10+",
    "series": "Galaxy S Series",
    "releaseYear": 2019,
    "slug": "galaxy-s10-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "_id": "dev_1791582521359_h3lk5",
    "brandId": "samsung",
    "name": "Galaxy S10",
    "series": "Galaxy S Series",
    "releaseYear": 2019,
    "slug": "galaxy-s10",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521361_41e33",
    "brandId": "samsung",
    "name": "Galaxy S10e",
    "series": "Galaxy S Series",
    "releaseYear": 2019,
    "slug": "galaxy-s10e",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521364_ds4qe",
    "brandId": "samsung",
    "name": "Galaxy S9+",
    "series": "Galaxy S Series",
    "releaseYear": 2018,
    "slug": "galaxy-s9-",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521367_e0bd7",
    "brandId": "samsung",
    "name": "Galaxy S9",
    "series": "Galaxy S Series",
    "releaseYear": 2018,
    "slug": "galaxy-s9",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521369_d1vk3",
    "brandId": "samsung",
    "name": "Galaxy Note 20 Ultra",
    "series": "Galaxy Note Series",
    "releaseYear": 2020,
    "slug": "galaxy-note-20-ultra",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521372_0dptp",
    "brandId": "samsung",
    "name": "Galaxy Note 20",
    "series": "Galaxy Note Series",
    "releaseYear": 2020,
    "slug": "galaxy-note-20",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521375_rfkmv",
    "brandId": "samsung",
    "name": "Galaxy Note 10+",
    "series": "Galaxy Note Series",
    "releaseYear": 2019,
    "slug": "galaxy-note-10-",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521377_m4t76",
    "brandId": "samsung",
    "name": "Galaxy Note 10",
    "series": "Galaxy Note Series",
    "releaseYear": 2019,
    "slug": "galaxy-note-10",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521380_4aho9",
    "brandId": "samsung",
    "name": "Galaxy Note 9",
    "series": "Galaxy Note Series",
    "releaseYear": 2018,
    "slug": "galaxy-note-9",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521382_j1suu",
    "brandId": "samsung",
    "name": "Galaxy Z Fold 5",
    "series": "Galaxy Z Series",
    "releaseYear": 2023,
    "slug": "galaxy-z-fold-5",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "_id": "dev_1791582521385_j1acq",
    "brandId": "samsung",
    "name": "Galaxy Z Flip 5",
    "series": "Galaxy Z Series",
    "releaseYear": 2023,
    "slug": "galaxy-z-flip-5",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521387_4vodm",
    "brandId": "samsung",
    "name": "Galaxy Z Fold 4",
    "series": "Galaxy Z Series",
    "releaseYear": 2022,
    "slug": "galaxy-z-fold-4",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "_id": "dev_1791582521389_1edgk",
    "brandId": "samsung",
    "name": "Galaxy Z Flip 4",
    "series": "Galaxy Z Series",
    "releaseYear": 2022,
    "slug": "galaxy-z-flip-4",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521392_jvm5r",
    "brandId": "samsung",
    "name": "Galaxy Z Fold 3",
    "series": "Galaxy Z Series",
    "releaseYear": 2021,
    "slug": "galaxy-z-fold-3",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521397_4cpwl",
    "brandId": "samsung",
    "name": "Galaxy Z Flip 3",
    "series": "Galaxy Z Series",
    "releaseYear": 2021,
    "slug": "galaxy-z-flip-3",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521401_q2ino",
    "brandId": "samsung",
    "name": "Galaxy A54 5G",
    "series": "Galaxy A Series",
    "releaseYear": 2023,
    "slug": "galaxy-a54-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521403_f861d",
    "brandId": "samsung",
    "name": "Galaxy A34 5G",
    "series": "Galaxy A Series",
    "releaseYear": 2023,
    "slug": "galaxy-a34-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521406_fy2rx",
    "brandId": "samsung",
    "name": "Galaxy A53 5G",
    "series": "Galaxy A Series",
    "releaseYear": 2022,
    "slug": "galaxy-a53-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521408_cp2jd",
    "brandId": "samsung",
    "name": "Galaxy A73 5G",
    "series": "Galaxy A Series",
    "releaseYear": 2022,
    "slug": "galaxy-a73-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521411_7nuzu",
    "brandId": "samsung",
    "name": "Galaxy A52s 5G",
    "series": "Galaxy A Series",
    "releaseYear": 2021,
    "slug": "galaxy-a52s-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521413_rdeeb",
    "brandId": "samsung",
    "name": "Galaxy A52",
    "series": "Galaxy A Series",
    "releaseYear": 2021,
    "slug": "galaxy-a52",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521416_7iee7",
    "brandId": "samsung",
    "name": "Galaxy A72",
    "series": "Galaxy A Series",
    "releaseYear": 2021,
    "slug": "galaxy-a72",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521419_p9tl5",
    "brandId": "samsung",
    "name": "Galaxy A51",
    "series": "Galaxy A Series",
    "releaseYear": 2019,
    "slug": "galaxy-a51",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521421_nm9v3",
    "brandId": "samsung",
    "name": "Galaxy A71",
    "series": "Galaxy A Series",
    "releaseYear": 2019,
    "slug": "galaxy-a71",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521423_ttbog",
    "brandId": "samsung",
    "name": "Galaxy M54 5G",
    "series": "Galaxy M Series",
    "releaseYear": 2023,
    "slug": "galaxy-m54-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521425_ecb2b",
    "brandId": "samsung",
    "name": "Galaxy M34 5G",
    "series": "Galaxy M Series",
    "releaseYear": 2023,
    "slug": "galaxy-m34-5g",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521427_o0gp8",
    "brandId": "samsung",
    "name": "Galaxy M53 5G",
    "series": "Galaxy M Series",
    "releaseYear": 2022,
    "slug": "galaxy-m53-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521430_9g39t",
    "brandId": "samsung",
    "name": "Galaxy M33 5G",
    "series": "Galaxy M Series",
    "releaseYear": 2022,
    "slug": "galaxy-m33-5g",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521432_7d4ep",
    "brandId": "samsung",
    "name": "Galaxy M51",
    "series": "Galaxy M Series",
    "releaseYear": 2020,
    "slug": "galaxy-m51",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521434_lyeoj",
    "brandId": "samsung",
    "name": "Galaxy F54 5G",
    "series": "Galaxy F Series",
    "releaseYear": 2023,
    "slug": "galaxy-f54-5g",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521436_bvdmi",
    "brandId": "samsung",
    "name": "Galaxy F23 5G",
    "series": "Galaxy F Series",
    "releaseYear": 2022,
    "slug": "galaxy-f23-5g",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521438_n35zf",
    "brandId": "oneplus",
    "name": "OnePlus 12",
    "series": "Numbered Series",
    "releaseYear": 2024,
    "slug": "oneplus-12",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 42000,
        "max": 48000
      },
      "worn": {
        "min": 32000,
        "max": 38000
      },
      "cracked": {
        "min": 20000,
        "max": 25000
      },
      "dead": {
        "min": 10000,
        "max": 14000
      }
    }
  },
  {
    "_id": "dev_1791582521440_wodgy",
    "brandId": "oneplus",
    "name": "OnePlus 12R",
    "series": "Numbered Series",
    "releaseYear": 2024,
    "slug": "oneplus-12r",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521442_vx0dv",
    "brandId": "oneplus",
    "name": "OnePlus 11",
    "series": "Numbered Series",
    "releaseYear": 2023,
    "slug": "oneplus-11",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ],
    "priceRanges": {
      "mint": {
        "min": 28000,
        "max": 34000
      },
      "worn": {
        "min": 21000,
        "max": 26000
      },
      "cracked": {
        "min": 13000,
        "max": 17000
      },
      "dead": {
        "min": 6500,
        "max": 9000
      }
    }
  },
  {
    "_id": "dev_1791582521444_itqfz",
    "brandId": "oneplus",
    "name": "OnePlus 11R",
    "series": "Numbered Series",
    "releaseYear": 2023,
    "slug": "oneplus-11r",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521446_r5s8z",
    "brandId": "oneplus",
    "name": "OnePlus 10 Pro",
    "series": "Numbered Series",
    "releaseYear": 2022,
    "slug": "oneplus-10-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521449_5s3pv",
    "brandId": "oneplus",
    "name": "OnePlus 10T",
    "series": "Numbered Series",
    "releaseYear": 2022,
    "slug": "oneplus-10t",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521451_tnsfn",
    "brandId": "oneplus",
    "name": "OnePlus 10R",
    "series": "Numbered Series",
    "releaseYear": 2022,
    "slug": "oneplus-10r",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521453_rb321",
    "brandId": "oneplus",
    "name": "OnePlus 9 Pro",
    "series": "Numbered Series",
    "releaseYear": 2021,
    "slug": "oneplus-9-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521455_jo4v0",
    "brandId": "oneplus",
    "name": "OnePlus 9",
    "series": "Numbered Series",
    "releaseYear": 2021,
    "slug": "oneplus-9",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521457_5een2",
    "brandId": "oneplus",
    "name": "OnePlus 9R",
    "series": "Numbered Series",
    "releaseYear": 2021,
    "slug": "oneplus-9r",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521459_mg0k4",
    "brandId": "oneplus",
    "name": "OnePlus 8 Pro",
    "series": "Numbered Series",
    "releaseYear": 2020,
    "slug": "oneplus-8-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521462_ni86z",
    "brandId": "oneplus",
    "name": "OnePlus 8",
    "series": "Numbered Series",
    "releaseYear": 2020,
    "slug": "oneplus-8",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521464_680no",
    "brandId": "oneplus",
    "name": "OnePlus 8T",
    "series": "Numbered Series",
    "releaseYear": 2020,
    "slug": "oneplus-8t",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521466_r5q0m",
    "brandId": "oneplus",
    "name": "OnePlus 7 Pro",
    "series": "Numbered Series",
    "releaseYear": 2019,
    "slug": "oneplus-7-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521468_y0x1p",
    "brandId": "oneplus",
    "name": "OnePlus 7T Pro",
    "series": "Numbered Series",
    "releaseYear": 2019,
    "slug": "oneplus-7t-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521470_56b9c",
    "brandId": "oneplus",
    "name": "OnePlus 7",
    "series": "Numbered Series",
    "releaseYear": 2019,
    "slug": "oneplus-7",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521473_bjxs3",
    "brandId": "oneplus",
    "name": "OnePlus 7T",
    "series": "Numbered Series",
    "releaseYear": 2019,
    "slug": "oneplus-7t",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521475_zxbu7",
    "brandId": "oneplus",
    "name": "OnePlus 6T",
    "series": "Numbered Series",
    "releaseYear": 2018,
    "slug": "oneplus-6t",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521477_2wpge",
    "brandId": "oneplus",
    "name": "OnePlus 6",
    "series": "Numbered Series",
    "releaseYear": 2018,
    "slug": "oneplus-6",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521479_ptm0b",
    "brandId": "oneplus",
    "name": "OnePlus Nord 3",
    "series": "Nord Series",
    "releaseYear": 2023,
    "slug": "oneplus-nord-3",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521482_6ma9m",
    "brandId": "oneplus",
    "name": "OnePlus Nord CE 3",
    "series": "Nord Series",
    "releaseYear": 2023,
    "slug": "oneplus-nord-ce-3",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521484_fpndt",
    "brandId": "oneplus",
    "name": "OnePlus Nord CE 3 Lite",
    "series": "Nord Series",
    "releaseYear": 2023,
    "slug": "oneplus-nord-ce-3-lite",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521486_wpfge",
    "brandId": "oneplus",
    "name": "OnePlus Nord 2T",
    "series": "Nord Series",
    "releaseYear": 2022,
    "slug": "oneplus-nord-2t",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521488_l1802",
    "brandId": "oneplus",
    "name": "OnePlus Nord 2",
    "series": "Nord Series",
    "releaseYear": 2021,
    "slug": "oneplus-nord-2",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521490_rung5",
    "brandId": "oneplus",
    "name": "OnePlus Nord CE",
    "series": "Nord Series",
    "releaseYear": 2021,
    "slug": "oneplus-nord-ce",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521492_wrpgk",
    "brandId": "oneplus",
    "name": "OnePlus Nord",
    "series": "Nord Series",
    "releaseYear": 2020,
    "slug": "oneplus-nord",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521495_vhwcf",
    "brandId": "xiaomi",
    "name": "Xiaomi 14",
    "series": "Xiaomi Series",
    "releaseYear": 2024,
    "slug": "xiaomi-14",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521497_gxtgn",
    "brandId": "xiaomi",
    "name": "Xiaomi 13 Pro",
    "series": "Xiaomi Series",
    "releaseYear": 2023,
    "slug": "xiaomi-13-pro",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521500_2xq7v",
    "brandId": "xiaomi",
    "name": "Xiaomi 12 Pro",
    "series": "Xiaomi Series",
    "releaseYear": 2022,
    "slug": "xiaomi-12-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521502_16gm5",
    "brandId": "xiaomi",
    "name": "Xiaomi Mi 11 Ultra",
    "series": "Xiaomi Series",
    "releaseYear": 2021,
    "slug": "xiaomi-mi-11-ultra",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521504_1852q",
    "brandId": "xiaomi",
    "name": "Xiaomi Mi 11X Pro",
    "series": "Xiaomi Series",
    "releaseYear": 2021,
    "slug": "xiaomi-mi-11x-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521506_8nnn7",
    "brandId": "xiaomi",
    "name": "Xiaomi Mi 11X",
    "series": "Xiaomi Series",
    "releaseYear": 2021,
    "slug": "xiaomi-mi-11x",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521509_9fn9r",
    "brandId": "xiaomi",
    "name": "Xiaomi Mi 10",
    "series": "Xiaomi Series",
    "releaseYear": 2020,
    "slug": "xiaomi-mi-10",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521511_y3e2m",
    "brandId": "xiaomi",
    "name": "Redmi Note 13 Pro+",
    "series": "Redmi Note Series",
    "releaseYear": 2024,
    "slug": "redmi-note-13-pro-",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521513_df0r8",
    "brandId": "xiaomi",
    "name": "Redmi Note 13 Pro",
    "series": "Redmi Note Series",
    "releaseYear": 2024,
    "slug": "redmi-note-13-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521515_zseay",
    "brandId": "xiaomi",
    "name": "Redmi Note 13",
    "series": "Redmi Note Series",
    "releaseYear": 2024,
    "slug": "redmi-note-13",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521517_dvkoz",
    "brandId": "xiaomi",
    "name": "Redmi Note 12 Pro+",
    "series": "Redmi Note Series",
    "releaseYear": 2023,
    "slug": "redmi-note-12-pro-",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521520_fcnpt",
    "brandId": "xiaomi",
    "name": "Redmi Note 12 Pro",
    "series": "Redmi Note Series",
    "releaseYear": 2023,
    "slug": "redmi-note-12-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521522_ml3fn",
    "brandId": "xiaomi",
    "name": "Redmi Note 11 Pro+",
    "series": "Redmi Note Series",
    "releaseYear": 2022,
    "slug": "redmi-note-11-pro-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521524_ets3r",
    "brandId": "xiaomi",
    "name": "Redmi Note 10 Pro Max",
    "series": "Redmi Note Series",
    "releaseYear": 2021,
    "slug": "redmi-note-10-pro-max",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521527_ibxui",
    "brandId": "xiaomi",
    "name": "Redmi Note 9 Pro Max",
    "series": "Redmi Note Series",
    "releaseYear": 2020,
    "slug": "redmi-note-9-pro-max",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521529_pj884",
    "brandId": "xiaomi",
    "name": "Redmi Note 8 Pro",
    "series": "Redmi Note Series",
    "releaseYear": 2019,
    "slug": "redmi-note-8-pro",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521531_pjkl2",
    "brandId": "xiaomi",
    "name": "POCO X6 Pro",
    "series": "POCO Series",
    "releaseYear": 2024,
    "slug": "poco-x6-pro",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521533_6cwff",
    "brandId": "xiaomi",
    "name": "POCO X5 Pro",
    "series": "POCO Series",
    "releaseYear": 2023,
    "slug": "poco-x5-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521536_i8l9k",
    "brandId": "xiaomi",
    "name": "POCO F5",
    "series": "POCO Series",
    "releaseYear": 2023,
    "slug": "poco-f5",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521538_4s11y",
    "brandId": "xiaomi",
    "name": "POCO F4",
    "series": "POCO Series",
    "releaseYear": 2022,
    "slug": "poco-f4",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521541_5c8xi",
    "brandId": "xiaomi",
    "name": "POCO X4 Pro",
    "series": "POCO Series",
    "releaseYear": 2022,
    "slug": "poco-x4-pro",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521543_vjm2j",
    "brandId": "xiaomi",
    "name": "POCO X3 Pro",
    "series": "POCO Series",
    "releaseYear": 2021,
    "slug": "poco-x3-pro",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521545_v6xat",
    "brandId": "xiaomi",
    "name": "POCO F1",
    "series": "POCO Series",
    "releaseYear": 2018,
    "slug": "poco-f1",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521547_8hqsc",
    "brandId": "oppo",
    "name": "Oppo Reno 11 Pro",
    "series": "Reno Series",
    "releaseYear": 2024,
    "slug": "oppo-reno-11-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521550_vyme8",
    "brandId": "oppo",
    "name": "Oppo Reno 11",
    "series": "Reno Series",
    "releaseYear": 2024,
    "slug": "oppo-reno-11",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521552_n28x3",
    "brandId": "oppo",
    "name": "Oppo Reno 10 Pro+",
    "series": "Reno Series",
    "releaseYear": 2023,
    "slug": "oppo-reno-10-pro-",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521555_53t05",
    "brandId": "oppo",
    "name": "Oppo Reno 10 Pro",
    "series": "Reno Series",
    "releaseYear": 2023,
    "slug": "oppo-reno-10-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521557_d3ot9",
    "brandId": "oppo",
    "name": "Oppo Reno 8 Pro",
    "series": "Reno Series",
    "releaseYear": 2022,
    "slug": "oppo-reno-8-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521560_7rpob",
    "brandId": "oppo",
    "name": "Oppo Reno 7 Pro",
    "series": "Reno Series",
    "releaseYear": 2021,
    "slug": "oppo-reno-7-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521562_ldp8h",
    "brandId": "oppo",
    "name": "Oppo Find N3 Flip",
    "series": "Find Series",
    "releaseYear": 2023,
    "slug": "oppo-find-n3-flip",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521565_ex584",
    "brandId": "oppo",
    "name": "Oppo Find N2 Flip",
    "series": "Find Series",
    "releaseYear": 2023,
    "slug": "oppo-find-n2-flip",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521567_aofxa",
    "brandId": "oppo",
    "name": "Oppo Find X2",
    "series": "Find Series",
    "releaseYear": 2020,
    "slug": "oppo-find-x2",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521569_ccub4",
    "brandId": "oppo",
    "name": "Oppo F25 Pro",
    "series": "F and A Series",
    "releaseYear": 2024,
    "slug": "oppo-f25-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521572_iq3l9",
    "brandId": "oppo",
    "name": "Oppo F23",
    "series": "F and A Series",
    "releaseYear": 2023,
    "slug": "oppo-f23",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521574_825zq",
    "brandId": "oppo",
    "name": "Oppo F21 Pro",
    "series": "F and A Series",
    "releaseYear": 2022,
    "slug": "oppo-f21-pro",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521576_mbb28",
    "brandId": "vivo",
    "name": "Vivo X100 Pro",
    "series": "X Series",
    "releaseYear": 2024,
    "slug": "vivo-x100-pro",
    "variants": [
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521579_0d80u",
    "brandId": "vivo",
    "name": "Vivo X100",
    "series": "X Series",
    "releaseYear": 2024,
    "slug": "vivo-x100",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521581_9mvd7",
    "brandId": "vivo",
    "name": "Vivo X90 Pro",
    "series": "X Series",
    "releaseYear": 2023,
    "slug": "vivo-x90-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521584_f8p8o",
    "brandId": "vivo",
    "name": "Vivo X80 Pro",
    "series": "X Series",
    "releaseYear": 2022,
    "slug": "vivo-x80-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521587_g4amw",
    "brandId": "vivo",
    "name": "Vivo X70 Pro+",
    "series": "X Series",
    "releaseYear": 2021,
    "slug": "vivo-x70-pro-",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521589_1mv2u",
    "brandId": "vivo",
    "name": "Vivo X60 Pro+",
    "series": "X Series",
    "releaseYear": 2021,
    "slug": "vivo-x60-pro-",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521592_5ulh3",
    "brandId": "vivo",
    "name": "Vivo V30 Pro",
    "series": "V Series",
    "releaseYear": 2024,
    "slug": "vivo-v30-pro",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521595_27kmy",
    "brandId": "vivo",
    "name": "Vivo V29 Pro",
    "series": "V Series",
    "releaseYear": 2023,
    "slug": "vivo-v29-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521597_3t422",
    "brandId": "vivo",
    "name": "Vivo V27 Pro",
    "series": "V Series",
    "releaseYear": 2023,
    "slug": "vivo-v27-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521601_tincg",
    "brandId": "vivo",
    "name": "Vivo V25 Pro",
    "series": "V Series",
    "releaseYear": 2022,
    "slug": "vivo-v25-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521603_eoc7t",
    "brandId": "vivo",
    "name": "Vivo V23 Pro",
    "series": "V Series",
    "releaseYear": 2022,
    "slug": "vivo-v23-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521606_ldsg1",
    "brandId": "iqoo",
    "name": "iQOO 12",
    "series": "Numbered Series",
    "releaseYear": 2023,
    "slug": "iqoo-12",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521609_bnh6h",
    "brandId": "iqoo",
    "name": "iQOO 11",
    "series": "Numbered Series",
    "releaseYear": 2023,
    "slug": "iqoo-11",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521611_tyvyg",
    "brandId": "iqoo",
    "name": "iQOO 9 Pro",
    "series": "Numbered Series",
    "releaseYear": 2022,
    "slug": "iqoo-9-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521614_ct2a4",
    "brandId": "iqoo",
    "name": "iQOO 7 Legend",
    "series": "Numbered Series",
    "releaseYear": 2021,
    "slug": "iqoo-7-legend",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521616_jynr3",
    "brandId": "iqoo",
    "name": "iQOO Neo 9 Pro",
    "series": "Neo Series",
    "releaseYear": 2024,
    "slug": "iqoo-neo-9-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521618_91en6",
    "brandId": "iqoo",
    "name": "iQOO Neo 7 Pro",
    "series": "Neo Series",
    "releaseYear": 2023,
    "slug": "iqoo-neo-7-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521621_u3uui",
    "brandId": "iqoo",
    "name": "iQOO Neo 6",
    "series": "Neo Series",
    "releaseYear": 2022,
    "slug": "iqoo-neo-6",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521623_hy0xw",
    "brandId": "iqoo",
    "name": "iQOO Z9",
    "series": "Z Series",
    "releaseYear": 2024,
    "slug": "iqoo-z9",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521625_xo7ek",
    "brandId": "iqoo",
    "name": "iQOO Z7 Pro",
    "series": "Z Series",
    "releaseYear": 2023,
    "slug": "iqoo-z7-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521628_ckcck",
    "brandId": "realme",
    "name": "Realme GT 5 Pro",
    "series": "GT Series",
    "releaseYear": 2023,
    "slug": "realme-gt-5-pro",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521630_6phb3",
    "brandId": "realme",
    "name": "Realme GT 2 Pro",
    "series": "GT Series",
    "releaseYear": 2022,
    "slug": "realme-gt-2-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521632_hagn2",
    "brandId": "realme",
    "name": "Realme GT Neo 3",
    "series": "GT Series",
    "releaseYear": 2022,
    "slug": "realme-gt-neo-3",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521635_w3h24",
    "brandId": "realme",
    "name": "Realme GT Master Edition",
    "series": "GT Series",
    "releaseYear": 2021,
    "slug": "realme-gt-master-edition",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521637_scpfv",
    "brandId": "realme",
    "name": "Realme 12 Pro+",
    "series": "Numbered Series",
    "releaseYear": 2024,
    "slug": "realme-12-pro-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521639_lilse",
    "brandId": "realme",
    "name": "Realme 11 Pro+",
    "series": "Numbered Series",
    "releaseYear": 2023,
    "slug": "realme-11-pro-",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521642_jpubr",
    "brandId": "realme",
    "name": "Realme 10 Pro+",
    "series": "Numbered Series",
    "releaseYear": 2022,
    "slug": "realme-10-pro-",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521644_vljss",
    "brandId": "realme",
    "name": "Realme 9 Pro+",
    "series": "Numbered Series",
    "releaseYear": 2022,
    "slug": "realme-9-pro-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521651_jgr5o",
    "brandId": "realme",
    "name": "Realme 8 Pro",
    "series": "Numbered Series",
    "releaseYear": 2021,
    "slug": "realme-8-pro",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521653_8122z",
    "brandId": "motorola",
    "name": "Motorola Edge 50 Pro",
    "series": "Edge Series",
    "releaseYear": 2024,
    "slug": "motorola-edge-50-pro",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521656_oiw0k",
    "brandId": "motorola",
    "name": "Motorola Edge 40 Neo",
    "series": "Edge Series",
    "releaseYear": 2023,
    "slug": "motorola-edge-40-neo",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521658_anbfo",
    "brandId": "motorola",
    "name": "Motorola Edge 30 Ultra",
    "series": "Edge Series",
    "releaseYear": 2022,
    "slug": "motorola-edge-30-ultra",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521661_dkhij",
    "brandId": "motorola",
    "name": "Motorola Edge 20 Pro",
    "series": "Edge Series",
    "releaseYear": 2021,
    "slug": "motorola-edge-20-pro",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521663_rnz2t",
    "brandId": "motorola",
    "name": "Motorola Razr 40 Ultra",
    "series": "Razr Series",
    "releaseYear": 2023,
    "slug": "motorola-razr-40-ultra",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521665_9awmb",
    "brandId": "motorola",
    "name": "Motorola Razr 40",
    "series": "Razr Series",
    "releaseYear": 2023,
    "slug": "motorola-razr-40",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521668_y464j",
    "brandId": "motorola",
    "name": "Moto G84",
    "series": "G Series",
    "releaseYear": 2023,
    "slug": "moto-g84",
    "variants": [
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521670_ezo8m",
    "brandId": "motorola",
    "name": "Moto G54",
    "series": "G Series",
    "releaseYear": 2023,
    "slug": "moto-g54",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521672_6lbsu",
    "brandId": "motorola",
    "name": "Moto G82",
    "series": "G Series",
    "releaseYear": 2022,
    "slug": "moto-g82",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521675_455ea",
    "brandId": "pixel",
    "name": "Google Pixel 8 Pro",
    "series": "Pixel Series",
    "releaseYear": 2023,
    "slug": "google-pixel-8-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521678_aigj3",
    "brandId": "pixel",
    "name": "Google Pixel 8",
    "series": "Pixel Series",
    "releaseYear": 2023,
    "slug": "google-pixel-8",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521682_v3iex",
    "brandId": "pixel",
    "name": "Google Pixel 7 Pro",
    "series": "Pixel Series",
    "releaseYear": 2022,
    "slug": "google-pixel-7-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521684_49pel",
    "brandId": "pixel",
    "name": "Google Pixel 7",
    "series": "Pixel Series",
    "releaseYear": 2022,
    "slug": "google-pixel-7",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521687_7yoon",
    "brandId": "pixel",
    "name": "Google Pixel 7a",
    "series": "Pixel Series",
    "releaseYear": 2023,
    "slug": "google-pixel-7a",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521689_nyivv",
    "brandId": "pixel",
    "name": "Google Pixel 6 Pro",
    "series": "Pixel Series",
    "releaseYear": 2021,
    "slug": "google-pixel-6-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521692_9rwlc",
    "brandId": "pixel",
    "name": "Google Pixel 6",
    "series": "Pixel Series",
    "releaseYear": 2021,
    "slug": "google-pixel-6",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521695_6tv2k",
    "brandId": "pixel",
    "name": "Google Pixel 6a",
    "series": "Pixel Series",
    "releaseYear": 2022,
    "slug": "google-pixel-6a",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521697_ifhe8",
    "brandId": "pixel",
    "name": "Google Pixel 5",
    "series": "Pixel Series",
    "releaseYear": 2020,
    "slug": "google-pixel-5",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521699_8tvly",
    "brandId": "pixel",
    "name": "Google Pixel 4a",
    "series": "Pixel Series",
    "releaseYear": 2020,
    "slug": "google-pixel-4a",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521702_wgs5b",
    "brandId": "pixel",
    "name": "Google Pixel 4",
    "series": "Pixel Series",
    "releaseYear": 2019,
    "slug": "google-pixel-4",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521704_fxh57",
    "brandId": "pixel",
    "name": "Google Pixel 3 XL",
    "series": "Pixel Series",
    "releaseYear": 2018,
    "slug": "google-pixel-3-xl",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521706_xijsj",
    "brandId": "pixel",
    "name": "Google Pixel 3",
    "series": "Pixel Series",
    "releaseYear": 2018,
    "slug": "google-pixel-3",
    "variants": [
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521709_xynt3",
    "brandId": "nothing",
    "name": "Nothing Phone (2)",
    "series": "Phone Series",
    "releaseYear": 2023,
    "slug": "nothing-phone-2-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521712_10083",
    "brandId": "nothing",
    "name": "Nothing Phone (2a)",
    "series": "Phone Series",
    "releaseYear": 2024,
    "slug": "nothing-phone-2a-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521714_q9j1k",
    "brandId": "nothing",
    "name": "Nothing Phone (1)",
    "series": "Phone Series",
    "releaseYear": 2022,
    "slug": "nothing-phone-1-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791582521716_an8fr",
    "brandId": "nothing",
    "name": "CMF Phone 1",
    "series": "Phone Series",
    "releaseYear": 2024,
    "slug": "cmf-phone-1",
    "variants": [
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 16 Pro Max",
    "series": "iPhone 16",
    "releaseYear": 2024,
    "slug": "iphone-16-pro-max",
    "variants": [
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 16 Pro",
    "series": "iPhone 16",
    "releaseYear": 2024,
    "slug": "iphone-16-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      },
      {
        "storage": "1TB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 16 Plus",
    "series": "iPhone 16",
    "releaseYear": 2024,
    "slug": "iphone-16-plus",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 16",
    "series": "iPhone 16",
    "releaseYear": 2024,
    "slug": "iphone-16",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      },
      {
        "storage": "512GB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 7 Plus",
    "series": "iPhone 7",
    "releaseYear": 2016,
    "slug": "iphone-7-plus",
    "variants": [
      {
        "storage": "32GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 7",
    "series": "iPhone 7",
    "releaseYear": 2016,
    "slug": "iphone-7",
    "variants": [
      {
        "storage": "32GB"
      },
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 6s Plus",
    "series": "iPhone 6",
    "releaseYear": 2015,
    "slug": "iphone-6s-plus",
    "variants": [
      {
        "storage": "16GB"
      },
      {
        "storage": "32GB"
      },
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "brandId": "apple",
    "name": "iPhone 6s",
    "series": "iPhone 6",
    "releaseYear": 2015,
    "slug": "iphone-6s",
    "variants": [
      {
        "storage": "16GB"
      },
      {
        "storage": "32GB"
      },
      {
        "storage": "64GB"
      },
      {
        "storage": "128GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy S8+",
    "series": "Galaxy",
    "releaseYear": 2017,
    "slug": "galaxy-s8-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy S8",
    "series": "Galaxy",
    "releaseYear": 2017,
    "slug": "galaxy-s8",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Note 10 Lite",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-note-10-lite",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Note 8",
    "series": "Galaxy",
    "releaseYear": 2017,
    "slug": "galaxy-note-8",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Z Fold 6",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-z-fold-6",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Z Flip 6",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-z-flip-6",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Z Fold 2",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-z-fold-2",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Z Flip",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-z-flip",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy Fold",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-fold",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A00",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a00",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A10",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a10",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A20",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a20",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A30",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a30",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A40",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a40",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A50",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a50",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A60",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a60",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A70",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a70",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A80",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a80",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A90",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-a90",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A01",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a01",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A11",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a11",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A21",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a21",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A31",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a31",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A41",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a41",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A61",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a61",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A81",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a81",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A91",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-a91",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A02",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a02",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A02s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a02s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A12",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a12",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A12s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a12s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A22",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a22",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A22s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a22s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A32",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a32",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A32s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a32s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A42",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a42",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A42s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a42s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A52s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a52s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A62",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a62",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A62s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a62s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A72s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a72s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A82",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a82",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A82s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a82s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A92",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a92",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A92s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-a92s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A03",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a03",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A03s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a03s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A03 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a03-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A13",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a13",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A13s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a13s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A13 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a13-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A23",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a23",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A23s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a23s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A23 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a23-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A33",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a33",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A33s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a33s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A33 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a33-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A43",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a43",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A43s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a43s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A43 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a43-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A53",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a53",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A53s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a53s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A63",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a63",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A63s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a63s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A63 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a63-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A73",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a73",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A73s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a73s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A83",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a83",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A83s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a83s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A83 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a83-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A93",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a93",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A93s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a93s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A93 5G",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-a93-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A04",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a04",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A04s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a04s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A04 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a04-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A14",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a14",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A14s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a14s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A14 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a14-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A24",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a24",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A24s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a24s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A24 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a24-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A34",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a34",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A34s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a34s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A44",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a44",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A44s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a44s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A44 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a44-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A54",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a54",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A54s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a54s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A64",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a64",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A64s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a64s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A64 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a64-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A74",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a74",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A74s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a74s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A74 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a74-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A84",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a84",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A84s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a84s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A84 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a84-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A94",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a94",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A94s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a94s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A94 5G",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-a94-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A05",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a05",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A05s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a05s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A05 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a05-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A15",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a15",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A15s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a15s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A15 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a15-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A25",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a25",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A25s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a25s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A25 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a25-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A35",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a35",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A35s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a35s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A35 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a35-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A45",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a45",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A45s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a45s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A45 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a45-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A55",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a55",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A55s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a55s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A55 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a55-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A65",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a65",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A65s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a65s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A65 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a65-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A75",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a75",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A75s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a75s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A75 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a75-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A85",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a85",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A85s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a85s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A85 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a85-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A95",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a95",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A95s",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a95s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy A95 5G",
    "series": "Galaxy",
    "releaseYear": 2024,
    "slug": "galaxy-a95-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M00",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m00",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M00s",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m00s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M10",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m10",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M10s",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m10s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M20",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m20",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M20s",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m20s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M30",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m30",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M30s",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m30s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M40",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m40",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M40s",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m40s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M50",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m50",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M50s",
    "series": "Galaxy",
    "releaseYear": 2019,
    "slug": "galaxy-m50s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M01",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m01",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M01s",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m01s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M11",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m11",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M11s",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m11s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M21",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m21",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M21s",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m21s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M31",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m31",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M31s",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m31s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M41",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m41",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M41s",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m41s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M51s",
    "series": "Galaxy",
    "releaseYear": 2020,
    "slug": "galaxy-m51s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M02",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m02",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M02s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m02s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M12",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m12",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M12s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m12s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M22",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m22",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M22s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m22s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M32",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m32",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M32s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m32s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M42",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m42",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M42s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m42s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M52",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m52",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M52s",
    "series": "Galaxy",
    "releaseYear": 2021,
    "slug": "galaxy-m52s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M03",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m03",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M03s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m03s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M13",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m13",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M13s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m13s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M23",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m23",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M23s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m23s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M33",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m33",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M33s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m33s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M43",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m43",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M43s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m43s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M53",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m53",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M53s",
    "series": "Galaxy",
    "releaseYear": 2022,
    "slug": "galaxy-m53s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M04",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m04",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M04s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m04s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M14",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m14",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M14s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m14s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M24",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m24",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M24s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m24s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M34",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m34",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M34s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m34s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M44",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m44",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M44s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m44s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M54",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m54",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "brandId": "samsung",
    "name": "Galaxy M54s",
    "series": "Galaxy",
    "releaseYear": 2023,
    "slug": "galaxy-m54s",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416651_yv94m",
    "brandId": "oneplus",
    "name": "OnePlus 11 5G",
    "series": "Flagship",
    "releaseYear": 2023,
    "slug": "oneplus-11-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_euq7g",
    "brandId": "oneplus",
    "name": "OnePlus 11R 5G",
    "series": "R Series",
    "releaseYear": 2023,
    "slug": "oneplus-11r-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_az9gj",
    "brandId": "oneplus",
    "name": "OnePlus 10 Pro 5G",
    "series": "Flagship",
    "releaseYear": 2022,
    "slug": "oneplus-10-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_rpfpc",
    "brandId": "oneplus",
    "name": "OnePlus 10T 5G",
    "series": "T Series",
    "releaseYear": 2022,
    "slug": "oneplus-10t-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_t5p98",
    "brandId": "oneplus",
    "name": "OnePlus 10R 5G",
    "series": "R Series",
    "releaseYear": 2022,
    "slug": "oneplus-10r-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_0qzd9",
    "brandId": "oneplus",
    "name": "OnePlus 9RT",
    "series": "T Series",
    "releaseYear": 2021,
    "slug": "oneplus-9rt",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_iwy50",
    "brandId": "oneplus",
    "name": "OnePlus Nord 3 5G",
    "series": "Nord",
    "releaseYear": 2023,
    "slug": "oneplus-nord-3-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_8cj5f",
    "brandId": "oneplus",
    "name": "OnePlus Nord CE 3 5G",
    "series": "Nord",
    "releaseYear": 2023,
    "slug": "oneplus-nord-ce-3-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_uzd18",
    "brandId": "oneplus",
    "name": "OnePlus Nord CE 3 Lite 5G",
    "series": "Nord",
    "releaseYear": 2023,
    "slug": "oneplus-nord-ce-3-lite-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_81r34",
    "brandId": "oneplus",
    "name": "OnePlus Nord 2T 5G",
    "series": "Nord",
    "releaseYear": 2022,
    "slug": "oneplus-nord-2t-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416652_hhae6",
    "brandId": "oneplus",
    "name": "OnePlus Nord CE 2",
    "series": "Nord",
    "releaseYear": 2022,
    "slug": "oneplus-nord-ce-2",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_8ow99",
    "brandId": "xiaomi",
    "name": "Xiaomi 14 Ultra",
    "series": "Xiaomi 14",
    "releaseYear": 2024,
    "slug": "xiaomi-14-ultra",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_k09hl",
    "brandId": "xiaomi",
    "name": "Xiaomi 13",
    "series": "Xiaomi 13",
    "releaseYear": 2023,
    "slug": "xiaomi-13",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_iv69t",
    "brandId": "xiaomi",
    "name": "Redmi Note 13 Pro+ 5G",
    "series": "Redmi Note 13",
    "releaseYear": 2024,
    "slug": "redmi-note-13-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_5ycxd",
    "brandId": "xiaomi",
    "name": "Redmi Note 13 Pro 5G",
    "series": "Redmi Note 13",
    "releaseYear": 2024,
    "slug": "redmi-note-13-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_ajvto",
    "brandId": "xiaomi",
    "name": "Redmi Note 13 5G",
    "series": "Redmi Note 13",
    "releaseYear": 2024,
    "slug": "redmi-note-13-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_tjhdg",
    "brandId": "xiaomi",
    "name": "Redmi Note 12 Pro+ 5G",
    "series": "Redmi Note 12",
    "releaseYear": 2023,
    "slug": "redmi-note-12-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_4ixkp",
    "brandId": "xiaomi",
    "name": "Redmi Note 12 Pro 5G",
    "series": "Redmi Note 12",
    "releaseYear": 2023,
    "slug": "redmi-note-12-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_7nwgn",
    "brandId": "xiaomi",
    "name": "Redmi Note 12 5G",
    "series": "Redmi Note 12",
    "releaseYear": 2023,
    "slug": "redmi-note-12-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_pj81z",
    "brandId": "xiaomi",
    "name": "POCO X6 Pro 5G",
    "series": "POCO X",
    "releaseYear": 2024,
    "slug": "poco-x6-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_y7zcw",
    "brandId": "xiaomi",
    "name": "POCO X6 5G",
    "series": "POCO X",
    "releaseYear": 2024,
    "slug": "poco-x6-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_cw5qh",
    "brandId": "xiaomi",
    "name": "POCO F5 5G",
    "series": "POCO F",
    "releaseYear": 2023,
    "slug": "poco-f5-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_kerag",
    "brandId": "xiaomi",
    "name": "POCO F4 5G",
    "series": "POCO F",
    "releaseYear": 2022,
    "slug": "poco-f4-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_xupqh",
    "brandId": "xiaomi",
    "name": "POCO X5 Pro 5G",
    "series": "POCO X",
    "releaseYear": 2023,
    "slug": "poco-x5-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_i6fhr",
    "brandId": "oppo",
    "name": "Oppo Reno 11 Pro 5G",
    "series": "Reno",
    "releaseYear": 2024,
    "slug": "oppo-reno-11-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_29llr",
    "brandId": "oppo",
    "name": "Oppo Reno 11 5G",
    "series": "Reno",
    "releaseYear": 2024,
    "slug": "oppo-reno-11-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_zawbz",
    "brandId": "oppo",
    "name": "Oppo Reno 10 Pro+ 5G",
    "series": "Reno",
    "releaseYear": 2023,
    "slug": "oppo-reno-10-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_90z85",
    "brandId": "oppo",
    "name": "Oppo Reno 10 Pro 5G",
    "series": "Reno",
    "releaseYear": 2023,
    "slug": "oppo-reno-10-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_5ncyz",
    "brandId": "oppo",
    "name": "Oppo Reno 10 5G",
    "series": "Reno",
    "releaseYear": 2023,
    "slug": "oppo-reno-10-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_b6133",
    "brandId": "oppo",
    "name": "Oppo Reno 8 Pro 5G",
    "series": "Reno",
    "releaseYear": 2022,
    "slug": "oppo-reno-8-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_vyozp",
    "brandId": "oppo",
    "name": "Oppo Reno 8 5G",
    "series": "Reno",
    "releaseYear": 2022,
    "slug": "oppo-reno-8-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_doodi",
    "brandId": "oppo",
    "name": "Oppo F25 Pro 5G",
    "series": "F Series",
    "releaseYear": 2024,
    "slug": "oppo-f25-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_0e1tf",
    "brandId": "oppo",
    "name": "Oppo F23 5G",
    "series": "F Series",
    "releaseYear": 2023,
    "slug": "oppo-f23-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416657_xlvum",
    "brandId": "oppo",
    "name": "Oppo F21 Pro 5G",
    "series": "F Series",
    "releaseYear": 2022,
    "slug": "oppo-f21-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_e8grs",
    "brandId": "oppo",
    "name": "Oppo A79 5G",
    "series": "A Series",
    "releaseYear": 2023,
    "slug": "oppo-a79-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_pm4dx",
    "brandId": "oppo",
    "name": "Oppo A78 5G",
    "series": "A Series",
    "releaseYear": 2023,
    "slug": "oppo-a78-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_ttu09",
    "brandId": "oppo",
    "name": "Oppo A59 5G",
    "series": "A Series",
    "releaseYear": 2023,
    "slug": "oppo-a59-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_tz1pm",
    "brandId": "oppo",
    "name": "Oppo A58",
    "series": "A Series",
    "releaseYear": 2023,
    "slug": "oppo-a58",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_1rkpj",
    "brandId": "vivo",
    "name": "Vivo X90",
    "series": "X Series",
    "releaseYear": 2023,
    "slug": "vivo-x90",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_fk3wg",
    "brandId": "vivo",
    "name": "Vivo V30",
    "series": "V Series",
    "releaseYear": 2024,
    "slug": "vivo-v30",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_slvjq",
    "brandId": "vivo",
    "name": "Vivo V29",
    "series": "V Series",
    "releaseYear": 2023,
    "slug": "vivo-v29",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_sbx6b",
    "brandId": "vivo",
    "name": "Vivo V27",
    "series": "V Series",
    "releaseYear": 2023,
    "slug": "vivo-v27",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_torgl",
    "brandId": "vivo",
    "name": "Vivo T2 Pro 5G",
    "series": "T Series",
    "releaseYear": 2023,
    "slug": "vivo-t2-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_lys4t",
    "brandId": "vivo",
    "name": "Vivo T2 5G",
    "series": "T Series",
    "releaseYear": 2023,
    "slug": "vivo-t2-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_s15wt",
    "brandId": "vivo",
    "name": "Vivo Y200 5G",
    "series": "Y Series",
    "releaseYear": 2023,
    "slug": "vivo-y200-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_qs2mz",
    "brandId": "vivo",
    "name": "Vivo Y100",
    "series": "Y Series",
    "releaseYear": 2023,
    "slug": "vivo-y100",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_uaoy8",
    "brandId": "iqoo",
    "name": "iQOO 12 5G",
    "series": "Flagship",
    "releaseYear": 2023,
    "slug": "iqoo-12-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_i4rcj",
    "brandId": "iqoo",
    "name": "iQOO 11 5G",
    "series": "Flagship",
    "releaseYear": 2023,
    "slug": "iqoo-11-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_qspzc",
    "brandId": "iqoo",
    "name": "iQOO 9 Pro 5G",
    "series": "Flagship",
    "releaseYear": 2022,
    "slug": "iqoo-9-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_2ne9h",
    "brandId": "iqoo",
    "name": "iQOO 9T 5G",
    "series": "Flagship",
    "releaseYear": 2022,
    "slug": "iqoo-9t-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_7wfhh",
    "brandId": "iqoo",
    "name": "iQOO 9 5G",
    "series": "Flagship",
    "releaseYear": 2022,
    "slug": "iqoo-9-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_4ltcl",
    "brandId": "iqoo",
    "name": "iQOO Neo 9 Pro 5G",
    "series": "Neo",
    "releaseYear": 2024,
    "slug": "iqoo-neo-9-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_hlk3r",
    "brandId": "iqoo",
    "name": "iQOO Neo 7 Pro 5G",
    "series": "Neo",
    "releaseYear": 2023,
    "slug": "iqoo-neo-7-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_9tfrn",
    "brandId": "iqoo",
    "name": "iQOO Neo 7 5G",
    "series": "Neo",
    "releaseYear": 2023,
    "slug": "iqoo-neo-7-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_bv7gj",
    "brandId": "iqoo",
    "name": "iQOO Neo 6 5G",
    "series": "Neo",
    "releaseYear": 2022,
    "slug": "iqoo-neo-6-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_0vsu3",
    "brandId": "iqoo",
    "name": "iQOO Z9 5G",
    "series": "Z Series",
    "releaseYear": 2024,
    "slug": "iqoo-z9-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_0tten",
    "brandId": "iqoo",
    "name": "iQOO Z7 Pro 5G",
    "series": "Z Series",
    "releaseYear": 2023,
    "slug": "iqoo-z7-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_ztz36",
    "brandId": "iqoo",
    "name": "iQOO Z7 5G",
    "series": "Z Series",
    "releaseYear": 2023,
    "slug": "iqoo-z7-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_3kblq",
    "brandId": "iqoo",
    "name": "iQOO Z7s 5G",
    "series": "Z Series",
    "releaseYear": 2023,
    "slug": "iqoo-z7s-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_heqv9",
    "brandId": "iqoo",
    "name": "iQOO Z6 Pro 5G",
    "series": "Z Series",
    "releaseYear": 2022,
    "slug": "iqoo-z6-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_pnqs1",
    "brandId": "iqoo",
    "name": "iQOO Z6 5G",
    "series": "Z Series",
    "releaseYear": 2022,
    "slug": "iqoo-z6-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_7m3zo",
    "brandId": "realme",
    "name": "Realme 12 Pro+ 5G",
    "series": "Number Series",
    "releaseYear": 2024,
    "slug": "realme-12-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_f7wq2",
    "brandId": "realme",
    "name": "Realme 12 Pro 5G",
    "series": "Number Series",
    "releaseYear": 2024,
    "slug": "realme-12-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_0lc22",
    "brandId": "realme",
    "name": "Realme 12+ 5G",
    "series": "Number Series",
    "releaseYear": 2024,
    "slug": "realme-12-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_qha0d",
    "brandId": "realme",
    "name": "Realme 11 Pro+ 5G",
    "series": "Number Series",
    "releaseYear": 2023,
    "slug": "realme-11-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_tfvob",
    "brandId": "realme",
    "name": "Realme 11 Pro 5G",
    "series": "Number Series",
    "releaseYear": 2023,
    "slug": "realme-11-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_wng0a",
    "brandId": "realme",
    "name": "Realme 11 5G",
    "series": "Number Series",
    "releaseYear": 2023,
    "slug": "realme-11-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_bt3gg",
    "brandId": "realme",
    "name": "Realme 10 Pro+ 5G",
    "series": "Number Series",
    "releaseYear": 2022,
    "slug": "realme-10-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_126or",
    "brandId": "realme",
    "name": "Realme 10 Pro 5G",
    "series": "Number Series",
    "releaseYear": 2022,
    "slug": "realme-10-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_zmn3t",
    "brandId": "realme",
    "name": "Realme GT 2",
    "series": "GT Series",
    "releaseYear": 2022,
    "slug": "realme-gt-2",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_aa64f",
    "brandId": "realme",
    "name": "Realme GT Neo 3T",
    "series": "GT Series",
    "releaseYear": 2022,
    "slug": "realme-gt-neo-3t",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_lj9ag",
    "brandId": "realme",
    "name": "Realme Narzo 70 Pro 5G",
    "series": "Narzo",
    "releaseYear": 2024,
    "slug": "realme-narzo-70-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_1bzxq",
    "brandId": "realme",
    "name": "Realme Narzo 60 Pro 5G",
    "series": "Narzo",
    "releaseYear": 2023,
    "slug": "realme-narzo-60-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_hbbpw",
    "brandId": "realme",
    "name": "Realme Narzo 60 5G",
    "series": "Narzo",
    "releaseYear": 2023,
    "slug": "realme-narzo-60-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_bxaaj",
    "brandId": "realme",
    "name": "Realme C67 5G",
    "series": "C Series",
    "releaseYear": 2023,
    "slug": "realme-c67-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_x5bmg",
    "brandId": "motorola",
    "name": "Motorola Edge 50 Pro 5G",
    "series": "Edge",
    "releaseYear": 2024,
    "slug": "motorola-edge-50-pro-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_w66yf",
    "brandId": "motorola",
    "name": "Motorola Edge 40",
    "series": "Edge",
    "releaseYear": 2023,
    "slug": "motorola-edge-40",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_fchj2",
    "brandId": "motorola",
    "name": "Motorola Edge 30 Fusion",
    "series": "Edge",
    "releaseYear": 2022,
    "slug": "motorola-edge-30-fusion",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_fi9w8",
    "brandId": "motorola",
    "name": "Motorola Edge 30 Pro",
    "series": "Edge",
    "releaseYear": 2022,
    "slug": "motorola-edge-30-pro",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_3pvnb",
    "brandId": "motorola",
    "name": "Motorola Edge 30",
    "series": "Edge",
    "releaseYear": 2022,
    "slug": "motorola-edge-30",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_o3exh",
    "brandId": "motorola",
    "name": "Moto G84 5G",
    "series": "G Series",
    "releaseYear": 2023,
    "slug": "moto-g84-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_mhz0z",
    "brandId": "motorola",
    "name": "Moto G54 5G",
    "series": "G Series",
    "releaseYear": 2023,
    "slug": "moto-g54-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_avq6w",
    "brandId": "motorola",
    "name": "Moto G34 5G",
    "series": "G Series",
    "releaseYear": 2024,
    "slug": "moto-g34-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_26soc",
    "brandId": "motorola",
    "name": "Moto G73 5G",
    "series": "G Series",
    "releaseYear": 2023,
    "slug": "moto-g73-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_qsuuy",
    "brandId": "motorola",
    "name": "Moto G62 5G",
    "series": "G Series",
    "releaseYear": 2022,
    "slug": "moto-g62-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416658_33z1l",
    "brandId": "motorola",
    "name": "Moto G82 5G",
    "series": "G Series",
    "releaseYear": 2022,
    "slug": "moto-g82-5g",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416659_6t714",
    "brandId": "motorola",
    "name": "Moto G72",
    "series": "G Series",
    "releaseYear": 2022,
    "slug": "moto-g72",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416659_wxkny",
    "brandId": "pixel",
    "name": "Google Pixel 5a",
    "series": "Pixel 5",
    "releaseYear": 2021,
    "slug": "google-pixel-5a",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416659_5fibd",
    "brandId": "pixel",
    "name": "Google Pixel 4 XL",
    "series": "Pixel 4",
    "releaseYear": 2019,
    "slug": "google-pixel-4-xl",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416659_xg7e8",
    "brandId": "pixel",
    "name": "Google Pixel 4a (5G)",
    "series": "Pixel 4",
    "releaseYear": 2020,
    "slug": "google-pixel-4a-5g-",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  },
  {
    "_id": "dev_1791634416659_iexqh",
    "brandId": "nothing",
    "name": "Nothing CMF Phone 1",
    "series": "CMF",
    "releaseYear": 2024,
    "slug": "nothing-cmf-phone-1",
    "variants": [
      {
        "storage": "128GB"
      },
      {
        "storage": "256GB"
      }
    ]
  }
];

const brandIndex: Record<string, DeviceData[]> = {};
for (const dev of ALL_DEVICES) {
  const b = dev.brandId.toLowerCase();
  if (!brandIndex[b]) {
    brandIndex[b] = [];
  }
  brandIndex[b].push(dev);
}

export function getAllDevices(): DeviceData[] {
  return ALL_DEVICES;
}

export function getDevicesByBrand(brandId: string): DeviceData[] {
  if (!brandId) return [];
  const normalized = brandId.toLowerCase().trim();
  return brandIndex[normalized] || [];
}

export function getDeviceByName(name: string): DeviceData | undefined {
  if (!name) return undefined;
  const normalized = name.toLowerCase().trim();
  return ALL_DEVICES.find(d => d.name.toLowerCase() === normalized);
}
