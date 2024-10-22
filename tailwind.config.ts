import { type Config } from "tailwindcss";
import forms from '@tailwindcss/forms';
export default {
  content: [
    "{routes,islands,components}/**.{ts,tsx}",
  ],
  plugins: [
    forms,
    // ...
  ],
} satisfies Config;
