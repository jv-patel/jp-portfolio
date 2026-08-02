import * as Icons from "lucide-react";
import { FeatureHighlight } from "@/types";
import { motion } from "framer-motion";

export default function FeatureCard({ feature }: { feature: FeatureHighlight }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[feature.icon] ?? Icons.Sparkles;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex items-start gap-4 rounded-2xl border border-border-glass bg-white/5 p-5 transition-colors hover:border-accent-blue/40 hover:shadow-glow-cyan"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-text-primary">{feature.title}</h4>
        <p className="mt-1 text-sm text-text-secondary">{feature.description}</p>
      </div>
    </motion.div>
  );
}
