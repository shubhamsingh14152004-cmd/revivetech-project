import React from 'react';
import { siApple, siSamsung, siOneplus, siXiaomi, siOppo, siMotorola, siGoogle } from 'simple-icons/icons';

const SiIcon = ({ icon, color }: { icon: any; color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
    <path d={icon.path} />
  </svg>
);

const Wordmark = ({ text, color }: { text: string; color: string }) => (
  <div className="w-full h-full flex items-center justify-center font-bold text-[10px] tracking-tight uppercase" style={{ color }}>
    {text}
  </div>
);

export const brands = [
  { id: "apple", name: "Apple", logo: () => <SiIcon icon={siApple} color="#000000" /> },
  { id: "samsung", name: "Samsung", logo: () => <SiIcon icon={siSamsung} color="#1428A0" /> },
  { id: "oneplus", name: "OnePlus", logo: () => <SiIcon icon={siOneplus} color="#F5010C" /> },
  { id: "xiaomi", name: "Xiaomi, Redmi & POCO", logo: () => <SiIcon icon={siXiaomi} color="#FF6900" /> },
  { id: "oppo", name: "Oppo", logo: () => <SiIcon icon={siOppo} color="#006B33" /> },
  { id: "vivo", name: "Vivo", logo: () => <Wordmark text="VIVO" color="#415FFF" /> },
  { id: "iqoo", name: "iQOO", logo: () => <Wordmark text="iQOO" color="#FF0000" /> },
  { id: "realme", name: "Realme", logo: () => <Wordmark text="REALME" color="#FFC915" /> },
  { id: "motorola", name: "Motorola", logo: () => <SiIcon icon={siMotorola} color="#001A72" /> },
  { id: "pixel", name: "Google Pixel", logo: () => <SiIcon icon={siGoogle} color="#4285F4" /> },
  { id: "nothing", name: "Nothing", logo: () => <Wordmark text="NOTHING" color="#000000" /> },
  { id: "other", name: "Other Android", logo: () => <Wordmark text="OTHER" color="#3DDC84" /> },
];
