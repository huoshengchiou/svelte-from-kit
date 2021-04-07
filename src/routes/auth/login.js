import stringHash from 'string-hash'; //deal with password
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { Tedis } from 'tedis';

const db = new Tedis({ host: '127.0.0.1', port: 6379 });

export const post = async ({ body }) => {
	const user = JSON.parse(await db.get(body.email));
	if (!user) {
		return {
			status: 409,
			body: { message: 'incorrect email or password' }
		};
	}

	if (user.password !== stringHash(body.password)) {
		return {
			status: 401,
			body: { message: 'not correct password' }
		};
	}

	//send back cookie if success
	const cookieId = uuidv4();
	//在DB端也存著cookie
	await db.set(cookieId, JSON.stringify({ email: body.email }));
	const headers = {
		'Set-Cookie': cookie.serialize('sessin_id', cookieId, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'lax',
			path: '/'
		})
	};
	return {
		status: 200,
		headers,
		body: {
			message: 'reg success'
		}
	};
};
