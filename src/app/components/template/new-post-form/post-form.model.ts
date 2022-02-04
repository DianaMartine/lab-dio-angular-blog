export class Post {
  id?: number;
  user: string;
  title: string;
  subtitle?: string;
  postContent: string;

  constructor(
    id: number,
    user: string,
    title: string,
    subtitle: string,
    postContent: string
  ) {
    this.id = id;
    this.user = user;
    this.title = title;
    this.subtitle = subtitle;
    this.postContent = postContent;
  }
}
