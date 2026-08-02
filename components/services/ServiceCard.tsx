import * as Icons from "lucide-react";
import { ServiceItem } from "@/types";
import GlowCard from "@/components/common/GlowCard";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;

  return (
    <GlowCard className="h-full">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="font-display text-lg font-bold text-text-primary">{service.title}</h3>
      <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
    </GlowCard>
  );
}
