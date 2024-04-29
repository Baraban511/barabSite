import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import IconBrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-discord.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import IconBrandSteam from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-steam.tsx";
import IconBrandXbox from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-xbox.tsx";
//Xbox buttons
import IconXboxA from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/xbox-a.tsx";
import IconXboxB from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/xbox-b.tsx";
import IconXboxX from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/xbox-x.tsx";
import IconXboxY from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/xbox-y.tsx";
export default function Footer() {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-[#fbffee] flex flex-col md:flex-row w-full max-w-screen gap-8 md:gap-16 px-8 text-sm pt-8">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <img
            src="./barab_logo_simple.png"
            class=" h-6"
            alt="the barab logo"
          />
        </div>
        <div class="text-gray-500 mb-2">
          Learning developer
        </div>
        <a href="https://wakatime.com/badge/user/45f0ba86-46c8-41e2-8b47-b13184fb2b11/project/9335871f-f383-4abe-acf3-65e6092ebdd3">
          <img
            src="https://wakatime.com/badge/user/45f0ba86-46c8-41e2-8b47-b13184fb2b11/project/9335871f-f383-4abe-acf3-65e6092ebdd3.svg"
            alt="wakatime"
          />
        </a>

        <img
          width="160"
          height="32"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
          class="mt-2"
        >
        </img>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-[#008080]"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © 2024 barab<br />
          All right reserved.
        </div>
        <a
          href="https://github.com/Baraban511"
          class="inline-block hover:text-[#008080]"
          aria-label="GitHub"
        >
          <BrandGithub aria-hidden="true" />
        </a>
      </div>
      <div class="text-gray-500 space-y-2">
        <IconXboxA class="hover:text-[#008080]" />
        <IconXboxB class="hover:text-[#008080]" />
        <IconXboxX class="hover:text-[#008080]" />
        <IconXboxY class="hover:text-[#008080]" />
      </div>
    </div>
  );
}
