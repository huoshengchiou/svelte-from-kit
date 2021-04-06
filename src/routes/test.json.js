export async function get(req) {
	console.log('req', req);

	return { status: 400, body: { hello: 'world' } };
}
