import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import { SITE } from "@/constants/site";
import GlowCard from "@/components/common/GlowCard";

export default function ProfileCard() {
  return (
    <GlowCard className="flex flex-col items-center gap-5 text-center lg:col-span-1">
      <div className="relative h-28 w-28">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-40 blur-xl" />
        <Image
          src="/images/profile.jpg"
          alt={SITE.name}
          fill
          sizes="112px"
          className="rounded-full border border-border-glass object-cover shadow-glow"
        />
      </div>

      <div>
        <h3 className="font-display text-xl font-bold">{SITE.name}</h3>
        <p className="text-sm text-text-secondary">{SITE.role}</p>
      </div>

      <p className="text-sm text-text-secondary">
        A developer who enjoys turning complex ideas into simple, elegant products —
        with a growing focus on applied AI.
      </p>

      <div className="flex items-center gap-2 text-xs text-text-secondary">
        <MapPin size={14} className="text-accent-sky" />
        {SITE.location}
      </div>
      <div className="flex items-center gap-2 text-xs text-accent-cyan">
        <CheckCircle2 size={14} />
        {SITE.availability}
      </div>
    </GlowCard>
  );
}
