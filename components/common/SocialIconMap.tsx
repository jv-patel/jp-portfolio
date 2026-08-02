import { Github, Mail, Instagram, LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IconType } from "react-icons";

export const SOCIAL_ICON_MAP: Record<string, LucideIcon | IconType> = {
  Github,
  Whatsapp: FaWhatsapp,
  Mail,
  Instagram,
};
