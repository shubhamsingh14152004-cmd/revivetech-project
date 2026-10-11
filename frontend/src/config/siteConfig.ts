export const siteConfig = {
  brandName: "Revora",
  business: {
    hasPublicAddress: false,
    address: "",
    geo: { latitude: 0, longitude: 0 },
  },
  serviceAreas: ["Mumbai", "Navi Mumbai", "Thane"],
  paymentAccepted: "UPI, Bank Transfer",
  phoneDisplay: "+91 85917 70877",
  phoneE164: "+918591770877",
  whatsappNumber: "918591770877",
  whatsappMessages: {
    general: "Hi Revora, I have a question about my phone.",
    sell: "Hi Revora, I would like to sell my phone.",
    repair: "Hi Revora, I need to book a phone repair.",
  },
  email: "support@sellrepairphone.org",
  hours: "10:00 AM - 8:00 PM",
  doorstepFee: 0,
  warrantyDays: 90,
  social: {
    instagram: "https://instagram.com/revoraindia",
    facebook: "https://facebook.com/revoraindia",
    youtube: "https://youtube.com/c/revoraindia",
    googleBusiness: "https://g.page/revoraindia",
  },
  team: [
    { name: "Rahul Sharma", role: "Master Technician" },
    { name: "Priya Patel", role: "Quality Assurance Lead" }
  ],
  slots: [
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
    "06:00 PM - 08:00 PM",
  ],
  serviceablePincodes: ["400069", "400001", "400053", "400012", "400050"],
};

export function telHref() {
  return `tel:${siteConfig.phoneE164}`;
}

export function mailtoHref() {
  return `mailto:${siteConfig.email}`;
}
