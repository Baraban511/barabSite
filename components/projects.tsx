import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/chevron-right.tsx";
import IconDatabase from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/database.tsx";
import IconCalendarCode from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/calendar-code.tsx";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/lemon-2.tsx";
import IconBrandReact from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-react.tsx";
import IconBrandVercel from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-vercel.tsx";
import IconBrandTailwind from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-tailwind.tsx";
import IconBrandNodejs from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-nodejs.tsx";
import IconBrandBulma from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-bulma.tsx";
import IconBrandGithubCopilot from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github-copilot.tsx";
import IconBrandJavascript from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-javascript.tsx";
import IconBrandHtml5 from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-html5.tsx";
import IconBrandNpm from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-npm.tsx";
import IconBrandSpotify from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-spotify.tsx";
import IconBrandVscode from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-vscode.tsx";
import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-typescript.tsx";
import IconBrandDebian from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-debian.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx";
import IconBrandTabler from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-tabler.tsx";

export default function Projects() {
  const language = navigator.language;
  const featureItems = [
    {
      icon: IconDatabase,
      title: "CO internship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam",
      build: [
        IconBrandReact,
        IconBrandTailwind,
        IconBrandVercel,
        IconBrandGithubCopilot,
      ],
      link: "https://barab.me",
    },
    {
      icon: IconCalendarCode,
      title: "EDC",
      description:
        "Nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, ",
      build: [
        IconBrandHtml5,
        IconBrandJavascript,
        IconBrandBulma,
        IconBrandNodejs,
        IconBrandNpm,
        IconBrandDebian,
        IconBrandVscode,
      ],
      link: "https://barab.ovh",
    },
    {
      icon: LemonIcon,
      title: "This site",
      description: "Eget aliquam nisl nisl sit amet lorem.",
      build: [
        LemonIcon,
        IconBrandTailwind,
        IconBrandTabler,
        IconBrandTypescript,
        IconBrandDeno,
        IconBrandGithubCopilot,
        IconBrandVscode,
        IconBrandSpotify,
      ],
    },
  ];
  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="flex items-center space-x-4">
              <div class="bg-[#000028] inline-block p-3 rounded-xl text-white">
                <item.icon class="w-10 h-10" aria-hidden="true" />
              </div>
              <h2 class="text-2xl font-bold">{item.title}</h2>
            </div>
            <p class="text-xl">
              {item.description}
            </p>
            {item.build ? <h3 class="text-lg font-bold">Made using</h3> : null}
            {item.build && (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {item.build.map((Icon, index) => (
                  <div key={index} style={{ margin: "10px" }}>
                    <Icon />
                  </div>
                ))}
              </div>
            )}

            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-[#4F86C6] cursor-pointer hover:underline inline-flex items-center group">
                    See
                    <IconChevronRight
                      class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}
