import { skills } from "@/data/portfolio";

const items = [...skills.languages, ...skills.technologies];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/50 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee flex w-max gap-10 [animation-play-state:running] hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-2.5 text-muted"
          >
            <item.icon size={20} className="text-accent" />
            <span className="whitespace-nowrap text-sm font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
