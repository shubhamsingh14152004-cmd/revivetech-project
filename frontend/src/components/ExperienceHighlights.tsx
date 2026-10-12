import { claim } from "../config/claims";

export function ExperienceHighlights() {
  const highlights = [claim("repairs_completed"), claim("mobile_repair_expertise")].filter(
    (item): item is string => Boolean(item),
  );

  if (highlights.length === 0) return null;

  return (
    <section aria-label="Repair experience" className="mx-auto max-w-6xl px-5 py-8">
      <ul className="grid gap-4 border-y border-line py-5 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="text-center text-lg font-semibold text-ink">
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  );
}
