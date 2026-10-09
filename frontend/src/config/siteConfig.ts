export const siteConfig = {
 brandName: "Revora",
 business: {
 hasPublicAddress: false, // Set to true ONLY if address and geo are verified
 address: "Mumbai, Maharashtra, India", // TODO(owner): verify (real street address needed if hasPublicAddress is true)
 geo: undefined, // TODO(owner): e.g., { latitude: 19.076, longitude: 72.8777 }
 },
 serviceAreas: ["Mumbai", "Navi Mumbai", "Thane"], // Do not list both cities and whole country
 paymentAccepted: "UPI, Bank Transfer",
 phoneDisplay: "+91 85917 70877", // TODO(owner): verify
 phoneE164: "+918591770877", // TODO(owner): verify
 whatsappNumber: "918591770877", // TODO(owner): verify
 whatsappMessages: {
 general: "Hi Revora, I have a question about my phone.",
 sell: "Hi Revora, I would like to sell my phone.",
 repair: "Hi Revora, I need to book a phone repair.",
 },
 email: "supportsellphone@gmail.com", // TODO(owner): verify
 hours: "10:00 AM - 8:00 PM", // TODO(owner): verify
 doorstepFee: 499, // TODO(owner): verify whether free or 499
 warrantyDays: 90, // TODO(owner): verify
 social: {
 instagram: "", // TODO(owner): verify
 facebook: "", // TODO(owner): verify
 youtube: "", // TODO(owner): verify
 googleBusiness: "", // TODO(owner): verify
 x: "", // TODO(owner): verify (twitter handle)
 },
 team: [
 // { name: "Sagar", role: "Master Technician" } // TODO(owner): add real people
 ],
 slots: [
 "10:00 AM - 12:00 PM",
 "12:00 PM - 02:00 PM",
 "02:00 PM - 04:00 PM",
 "04:00 PM - 06:00 PM",
 "06:00 PM - 08:00 PM",
 ],
 serviceablePincodes: ["400001", "400002", "400003"], // TODO(owner): provide real pincode prefixes
};

export function telHref() {
 return `tel:${siteConfig.phoneE164}`;
}

export function waHref(kind: keyof typeof siteConfig.whatsappMessages = "general") {
 return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages[kind])}`;
}

export function mailtoHref() {
 return `mailto:${siteConfig.email}`;
}
