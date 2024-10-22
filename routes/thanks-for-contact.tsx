export default function Contact() {
    return (
        <div class="bg-[#008080] flex px-8 py-10 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat select-none">
            <div class="space-y-4 text-center max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <div class="flex items-center">
                    <img
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Up.png"
                        alt="Thumbs Up"
                        class="w-16 h-16 p-2"
                    />{" "}
                    <h1 class="text-4xl inline-block font-bold">
                        Message received
                    </h1>
                </div>
                <p class="text-xl max-w-lg">
                    Thanks for your message
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
