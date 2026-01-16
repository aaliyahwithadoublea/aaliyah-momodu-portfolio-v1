"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiJest,
  SiGraphql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiCloudinary,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { Code, Globe, TestTube, Database } from "lucide-react";

// Map skills to their icon components
const iconComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "JavaScript (ES6+)": SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "React Native": SiReact,
  Redux: SiRedux,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Responsive Design": Globe,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Ant Design": SiAntdesign,
  Jest: SiJest,
  Playwright: TestTube,
  "Axe DevTools": TestTube,
  "Google Lighthouse": TestTube,
  "OWASP ZAP": TestTube,
  "REST APIs": Database,
  GraphQL: SiGraphql,
  Axios: Code,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Cloudinary: SiCloudinary,
  Postman: SiPostman,
  Figma: SiFigma,
};

// Map skills to their icons
export const getSkillIcon = (skill: string) => {
  const IconComponent = iconComponents[skill] || Code;
  return <IconComponent className="w-4 h-4" />;
};
