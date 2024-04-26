import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#7dc5a9]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/barab_logo_v.png"
            width="128"
            height="128"
            alt="the barab logo"
          />
          <h1 class="text-4xl font-bold">Welcome on my website</h1>
          <p class="my-4">
            Sous-titre
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
        </div>
      </div>
      <Projects />
    </>
  );
}
