export interface Book {
  _id: string;
  title: string;
  author: Author;
  description: string;
  coverImage: string;
  file: string;
}

type Author = {
  _id: string;
  name: string;
};
