import { Pictures } from './pictures';
import { Status } from './status';
import { Message } from './message';

export interface User {
	id: number;
	featured: boolean;
	username: string;
	password: string;
	birthday: string;
	numkids: number;
	profileImg: string;
	description: string;
	pics: Pictures[];
	feed: Status[];
	messages: Message[];
	startDate: string;
	numFriends: number;
	numMombo: number;

}