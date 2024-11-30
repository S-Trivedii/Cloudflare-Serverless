export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		/*
		console.log(request.body);
		console.log(request.headers);
		console.log(request.url);

		*/
		console.log('Request object ', request);

		// This is very verbose instead use Hono
		if (request.method === 'GET') {
			return Response.json({
				message: 'you sent a get request',
			});
		} else {
			return Response.json({
				message: 'you did not send a get request',
			});
		}

		return Response.json({ mssg: 'Hello world' });
	},
} satisfies ExportedHandler<Env>;

// Command to deploy a simple application using cloudflare workers
// npm create cloudflare -- my-app
// npm run start / npm run dev
// npx wrangler login
// npx wrangler whoami
// npm run deploy

// You can visit cloudflare website for example on 'How to

// Cloudflare has its own runtime. It does not support commonJS ('require' syntax), but it support ES module ('import/export' syntax)

// Express.js doesn't work with cloudflare, you have to use other libraries like honojs - a web framework build on web standards. With hono you can write similar code ( but not same ) as express.

/*
Cloudflare Workers use Web Standard APIs instead of Node.js-specific APIs. These include:
    - fetch for HTTP requests (instead of http or axios in Node.js).
    - Request and Response objects (similar to the browser).
    - URL for parsing URLs.
This makes Workers more similar to client-side JavaScript in a browser than to Node.js.

*/
