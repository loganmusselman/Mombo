import { Pictures } from './pictures';
import { Status } from './status';
import { Message } from './message';

export interface User {
	id: Number;
	username: String;
	password: String;
	birthday: String;
	numkids: Number;
	profileImg: String;
	description: String;
	pics: Pictures[];
	feed: Status[];
	messages: Message[];
	startDate: String;
	numFriends: Number;
	numMombo: Number;

}