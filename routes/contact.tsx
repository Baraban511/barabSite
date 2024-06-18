//import Hero from "../components/hero.tsx";
import { Handlers } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/send.tsx";
import IconMessage from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/message.tsx";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();
const client = new SMTPClient({
  connection: {
    hostname: "smtp.eu.mailgun.org",
    port: 2525,
    tls: false,

    auth: {
      username: env["MAIL_USERNAME"],
      password: env["MAIL_PASSWORD"],
    },
  // },
  // debug: {
  //   log: true,
  //   allowUnsecure: true,
  //   encodeLB: false,
  //   noStartTLS: true,
  // },
});
export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    console.log(form);
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();
    // Add email to list.

    await client.send({
      from: env["MAIL_USERNAME"],
      to: env["MAIL_TO"],
      replyTo: email,
      subject: "Contact - barabSite",
      content: message,
    });

    await client.close();

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
        class="flex flex-col gap-5 text-sm"
      >
        <input
          type="text"
          name="email"
          class="rounded-md p-3 focus:placeholder-[#008080] outline-none ring-none"
          placeholder="Email"
        >
        </input>
        <textarea
          class="rounded-md focus:placeholder-[#008080]"
          placeholder="Message"
          name="message"
          rows={5}
        >
        </textarea>
        <button
          type="submit"
          class="bg-[#fbffee] cursor-pointer p-8 rounded-md text-gray-500 hover:text-gray-700 hover:font-bold py-1 border-gray-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
