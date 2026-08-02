import SectionHeading from "@/components/common/SectionHeading";
import SkillCard from "./SkillCard";
import { SKILL_CATEGORIES } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative px-6 sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to design, build, and ship complete products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
