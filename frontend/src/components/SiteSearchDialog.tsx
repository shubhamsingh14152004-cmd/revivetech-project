import { useNavigate } from "@tanstack/react-router";
import { NAV_BRANDS, NAV_SERVICES } from "../content/nav";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./ui/command";

interface SiteSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const START_LINKS = [
  { name: "Sell a phone", href: "/sell-phone" },
  { name: "Book a repair", href: "/repair" },
  { name: "Repair service areas", href: "/mobile-repair-mumbai" },
  { name: "Frequently asked questions", href: "/faq" },
  { name: "Contact support", href: "/contact" },
];

export default function SiteSearchDialog({ open, onOpenChange }: SiteSearchDialogProps) {
  const navigate = useNavigate();

  const goTo = (href: string) => {
    onOpenChange(false);
    void navigate({ to: href as any });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search repairs, phones, or help…" aria-label="Search the site" />
      <CommandList>
        <CommandEmpty>No match. Ask us on WhatsApp and we will check.</CommandEmpty>
        <CommandGroup heading="Start here">
          {START_LINKS.map((item) => (
            <CommandItem key={item.href} value={item.name} onSelect={() => goTo(item.href)}>
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Repair by service">
          {NAV_SERVICES.map((item) => (
            <CommandItem key={item.href} value={item.name} onSelect={() => goTo(item.href)}>
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Repair by brand">
          {NAV_BRANDS.map((item) => (
            <CommandItem key={item.href} value={item.name} onSelect={() => goTo(item.href)}>
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
