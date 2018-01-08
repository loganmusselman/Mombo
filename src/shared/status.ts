import { Comment } from './comment';

export interface Status {
	id: Number;
	description: String;
	numLikes: Number;
	numFavs: Number;
	comments: Comment[];
	date: String;
}