// 檢測用工具
import * as cookie from 'cookie';
import { Tedis } from 'tedis';

const db = new Tedis({ host: '127.0.0.1', port: 6379 });

//invoke  sveltekit when every request send
export async function getContext({ headers }) {
	const cookies = cookie.parse(headers.cookie || '');
	if (!cookies.session_id) {
		return {
			authenticated: false
		};
	}
	//驗證過之後把資料拉出來放session
	const userSession = JSON.parse(await db.get(cookies.session_id));
	if (userSession) {
		return {
			authenticated: true,
			email: userSession.email
		};
	} else {
		return {
			authenticated: false
		};
	}
}

export function getSession({ context }) {
	if (!context.authenticated) {
		return { authenticated: context.authenticated };
	}
	return {
		authenticated: context.authenticated,
		email: context.email
	};
}
