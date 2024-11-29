import {SocialLink} from "@app/core/models/social-link";

export interface User {
  name: string;
  role: string;
  description: string;
  picture: string;
  socialLinks: SocialLink[];
}
