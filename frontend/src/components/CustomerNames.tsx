import { customerNames } from "../content/customerNames";

export function CustomerNames() {
  return (
    <section aria-labelledby="customer-names-heading" className="mx-auto max-w-6xl px-5 py-8">
      <h2 id="customer-names-heading" className="text-2xl font-bold text-ink">
        Customer reviews
      </h2>
      <p className="mt-2 text-sm text-muted">
        Customer names are shown without review text or ratings.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-base text-ink">
        {customerNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
