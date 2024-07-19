import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <>
      <div class="p-4 mx-auto bg-[#008080]">
        <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4">
          <div class="flex items-center flex-col text-center gap-4">
           <div class="flex items-center gap-4"> <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
              alt="Waving Hand"
              class="w-16 h-16"
            />
            <p class="text-4xl font-bold select-none">Welcome on my website</p>
            </div>
            <p class="text-xl font-medium select-none">I'm barab, a french developer. I'm learning code and english. Here are my projects :</p>
          </div>
          <img
            class=""
            src="/barab_logo_v.png"
            width="128"
            height="128"
            alt="the barab logo"
          />
        </div>
      </div>
      <Projects />
    </>
  );
}