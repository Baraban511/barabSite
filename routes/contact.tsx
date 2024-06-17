//import Hero from "../components/hero.tsx";
import { Handlers } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/send.tsx";
import IconMessage from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/message.tsx";
const client = new SMTPClient({
  connection: {
    hostname: "smtp.eu.mailgun.org",
    port: 465,
    tls: true,
    auth: {
      username: "postmaster@mail.barab.me",
      password: "611c347b648fc763b0ef5d50c2e3392e-51356527-afd586fd",
    },
  },
});

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    console.log(form);
    const email = form.get("emai")?.toString();
    const message = form.get("message")?.toString();
    // Add email to list.

    await client.send({
      from: "postmaster@mail.barab.me",
      to: "baraban511@outlook.fr",
      subject: "example",
      content: "...",
      html: "<p>...</p>",
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
        <textarea class="rounded-md focus:placeholder-[#008080]" placeholder="Message" rows={5}></textarea>
        <button type="submit" name="message" class="bg-[#fbffee] cursor-pointer p-8 rounded-md text-gray-500 hover:text-gray-700 hover:font-bold py-1 border-gray-500">Submit</button>
      </form>
    </div>
  );
}