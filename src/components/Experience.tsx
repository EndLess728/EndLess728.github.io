import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ExperienceItem } from "./ExperienceItem";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Career Path"
          title="Experience"
          subtitle="7+ years leading teams and shipping mobile apps used by thousands."
        />

        <div className="mx-auto max-w-3xl">
          {experience.map((item, i) => (
            <ExperienceItem
              key={item.company}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
