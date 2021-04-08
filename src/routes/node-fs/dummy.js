import fs from 'fs';
import path from 'path';

const getFilePath = (fileName) => path.join(process.cwd(), 'src', 'data', fileName);

const oriFile = (path) => JSON.parse(fs.readFileSync(path));

export const get = () => {
	const fullpath = getFilePath('dummyBack.json');
	const dataFromPath = oriFile(fullpath);

	return {
		status: 200, //HTTP status
		body: dataFromPath
	};
};
