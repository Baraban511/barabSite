import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req, pageData) {
        const headers = new Headers();
        headers.set("location", `mailto:${pageData.params.mail}`);
        return new Response(null, {
            status: 303, // See Other
            headers,
        });
    },
};
