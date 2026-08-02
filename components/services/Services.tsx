import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "./ServiceCard";
import Testimonials from "./Testimonials";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="section-padding relative px-6 sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Services"
          title="What I can build"
          subtitle="From polished marketing sites to full AI-powered products — here's how I can help."
        />

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <SectionHeading eyebrow="Testimonials" title="What people say" />
        <Testimonials />
      </div>
    </section>
  );
}
