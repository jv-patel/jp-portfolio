import { Mail, MapPin, CircleDot } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/constants/site";
import GlowCard from "@/components/common/GlowCard";
import { SOCIAL_ICON_MAP as ICON_MAP } from "@/components/common/SocialIconMap";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
          Let&apos;s build something amazing
        </h3>
        <p className="mt-3 max-w-md text-text-secondary">
          Have a project in mind, an opportunity to discuss, or just want to say hi?
          My inbox is always open.
        </p>
      </div>

      <GlowCard tilt={false} className="flex flex-col gap-4">
        <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-accent-sky">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <Mail size={17} className="text-accent-sky" />
          </span>
          {SITE.email}
        </a>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <MapPin size={17} className="text-accent-cyan" />
          </span>
          {SITE.location}
        </div>
        <div className="flex items-center gap-3 text-sm text-emerald-300">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <CircleDot size={15} className="animate-pulse-glow text-emerald-400" />
          </span>
          {SITE.availability}
        </div>
      </GlowCard>

      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICON_MAP[social.icon as keyof typeof ICON_MAP];
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              data-magnetic
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-glass bg-white/5 text-text-secondary transition-all hover:-translate-y-1 hover:border-accent-sky/50 hover:text-accent-sky hover:shadow-glow-cyan"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
