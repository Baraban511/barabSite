import IconCodeOff from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/code-off.tsx";

export default function Hero() {
  return (
    <div
      class="bg-[#000028] w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl text-white">
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">In development</h1>
        <p class="text-xl max-w-lg text-blue-100">
          This page is in developpement and will be available soon.
        </p>
      </div>
      <IconCodeOff class="w-20 h-20 text-blue-100" />

      <div class="flex flex-col md:flex-row items-center">
        <a
          href="/"
          class="mt-4 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
