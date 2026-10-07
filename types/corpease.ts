export interface NavLink {
  id?: string;
  label: string;
  href: string;
}

export interface CtaButton {
  label: string;
  href: string;
}

export interface LogoConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
