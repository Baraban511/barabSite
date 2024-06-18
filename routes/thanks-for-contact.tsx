export default function Contact() {
    return (
        <div class="bg-[#008080] flex px-8 py-10 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat select-none">
            <div class="space-y-4 text-center">
                <h1 class="text-4xl inline-block font-bold">Message received</h1>
                <p class="text-xl max-w-lg">
                    Thnaks for your message
                </p>
            </div>

            <div class="flex flex-col text-center">
                <a
                    href="/"
                    class="bg-[#fbffee] mt-4 cursor-pointer px-8 rounded-md text-gray-500 hover:text-gray-700 hover:font-bold py-1 border-gray-500"
                >
                    Go back home
                </a>
            </div>
        </div>
    );
}
