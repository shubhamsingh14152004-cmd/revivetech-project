import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-ink group-[.toaster]:text-white group-[.toaster]:border-line group-[.toaster]:shadow-subtle group-[.toaster]:rounded-xl font-medium text-[14px]",
          description: "group-[.toast]:text-muted",
          actionButton: "group-[.toast]:bg-brand group-[.toast]:text-white group-[.toast]:rounded-lg",
          cancelButton: "group-[.toast]:bg-neutral-800 group-[.toast]:text-neutral-400 group-[.toast]:rounded-lg",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
