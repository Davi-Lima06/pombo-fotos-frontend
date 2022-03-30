export interface Photo{
  url: string;
  description: string;
  postDate: Date;
  id: number;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
