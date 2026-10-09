export const siteConfig = {
  brandName:"Revora",
  phoneDisplay:"+91 85917 70877", // TODO(owner): verify
  phoneE164:"+918591770877", // TODO(owner): verify
  whatsappNumber:"918591770877", // TODO(owner): verify
  whatsappMessages: {
    general:"Hi Revora, I have a question about my phone.",
    sell:"Hi Revora, I would like to sell my phone.",
    repair:"Hi Revora, I need to book a phone repair.",
  },
  email:"supportsellphone@gmail.com", // TODO(owner): verify
  address:"Mumbai, Maharashtra, India", // TODO(owner): verify (real address needed)
  hours:"10:00 AM - 8:00 PM", // TODO(owner): verify
  doorstepFee: 499, // TODO(owner): verify whether free or 499
  warrantyDays: 90, // TODO(owner): verify
  social: {
    instagram:"", // TODO(owner): verify
    facebook:"", // TODO(owner): verify
    youtube:"", // TODO(owner): verify
    googleBusiness:"", // TODO(owner): verify
  },
  stats: {
    devicesRepaired: undefined, // TODO(owner): verify or leave undefined
    paidOut: undefined, // TODO(owner): verify or leave undefined
  },
};

export function telHref() {
  return `tel:${siteConfig.phoneE164}`;
}

export function waHref(kind: keyof typeof siteConfig.whatsappMessages ="general") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages[kind])}`;
}

export function mailtoHref() {
  return `mailto:${siteConfig.email}`;
}
