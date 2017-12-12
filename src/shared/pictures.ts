import { Comment } from './comment'

export interface Pictures {
  image: String;
  description: String;
  numLikes: Number;
  numFavs: Number;
  comments: Comment[];
}
