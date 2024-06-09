import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#008080]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <br />
          <div class="flex items-center">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
              alt="Waving Hand"
              class="w-16 h-16"
            />
            <h1 class="text-4xl font-bold ml-4 select-none">Welcome on my website</h1>
          </div>
          <img
            class="my-6"
            src="/barab_logo_v.png"
            width="128"
            height="128"
            alt="the barab logo"
          />

          <br />
        </div>
      </div>
      <Projects />
    </>
  );
}
