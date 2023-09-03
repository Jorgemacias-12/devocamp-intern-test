import { MenuItem, SocialMedia } from "@/types";

export const MenuItems: MenuItem[] = [
  {
    name: "Inicio",
    nodeType: "Link",
    url: "/"
  },
  {
    name: "Contacto",
    nodeType: "Link",
    url: "/contact"
  },
  {
    name: "Iniciar sesión",
    nodeType: "button",
    url: "/signIn"
  }
];

export const socialMedias: SocialMedia[] = [
  {
    name: "GitHub",
    iconClass: "fab fa-github",
    url: "https://github.com/Jorgemacias-12"
  },
  {
    name: "Twitter",
    iconClass: "fab fa-twitter",
    url: "https://www.twitter.com/tuusuario"
  },
  {
    name: "Steam",
    iconClass: "fab fa-steam",
    url: "https://steamcommunity.com/id/Jorgemacias"
  },
  {
    name: "LinkedIn",
    iconClass: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/tuusuario"
  }
];
