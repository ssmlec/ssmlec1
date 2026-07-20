import { partners as defaultPartners } from "@/lib/site-data";

export function PartnerMarquee({
  partners = defaultPartners,
  reverse = false,
}: {
  partners?: {
    name: string;
    logo: string;
  }[];
  reverse?: boolean;
}) {
  const row = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div
        className={`flex w-max gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row.map((partner, i) => (
          <div
            key={i}
            className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border bg-white px-6 shadow-soft"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}