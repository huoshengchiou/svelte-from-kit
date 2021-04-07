import { Tedis } from 'tedis';

const db = new Tedis({ host: '127.0.0.1', port: 6379 });

export const get = async ({ context }) => {
	if (!context.authenticated) {
		return {
			status: 401,
			body: {
				message: 'unauthenticated'
			}
		};
	}

	const user = JSON.parse(await db.get(context.email));
	if (!user) {
		return {
			status: 404,
			body: {
				message: ' user not found'
			}
		};
	}
	delete user.password; //拿掉password資訊，即便是hash過的

	return {
		status: 404,
		body: user
	};
};
