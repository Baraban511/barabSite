import { Handlers } from "$fresh/server.ts";
import {
	Client,
	EmbedBuilder,
	Events,
	GatewayIntentBits,
} from "npm:discord.js";
const token = Deno.env.get("DISCORD_TOKEN");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

export const handler: Handlers = {
	async POST(req, ctx) {
		client.login(token);
		const user = await client.users.fetch("768517258262741024");
		const messageEmbed = new EmbedBuilder()
			.setColor("#008080")
			.setTitle("Contact request on barab.me")
			.setAuthor({
				name: "barab",
				iconURL: "https://barab.me/barab_logo_fox.png",
				url: "https://barab.me",
			})
			.setTimestamp()
			.setFooter({
				text: ctx.url.href,
			});

		const form = await req.formData();
		const mail = form.get("email")?.toString();
		if (mail) {
			messageEmbed.addFields(
				{
					name: "Mail",
					value:
						`${mail} \n \n [**Répondre**](https://barab.me/mail/${mail}) \n`,
				},
			);
		}
		const message = form.get("message")?.toString();
		if (message) {
			messageEmbed.addFields(
				{ name: "Message", value: `${message} \n` },
				{ name: "\u200B", value: "\u200B" },
			);
		}
		user.send({ embeds: [messageEmbed] });

		const headers = new Headers();
		headers.set("location", "/thanks-for-contact");
		return new Response(null, {
			status: 303, // See Other
			headers,
		});
	},
};

export default function Contact() {
	return (
		<div class="flex items-center justify-center bg-[#008080] p-5">
			<form
				method="post"
				class="flex flex-col gap-5 text-sm sm:w-3/4 w-full"
			>
				<input
					type="email"
					name="email"
					class="rounded-md p-3 focus:placeholder-[#008080]"
					placeholder="Email"
				>
				</input>
				<textarea
					class="rounded-md focus:placeholder-[#008080]"
					placeholder="Message"
					name="message"
					rows={5}
					required
				>
				</textarea>
				<p class="text-gray-700 select-none m-0">
					Email is not required.
				</p>
				<div>
					<button
						type="submit"
						class="bg-[#fbffee] cursor-pointer p-8 rounded-md text-gray-500 hover:text-gray-700 hover:font-bold py-1 border-gray-500"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
