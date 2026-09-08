export type Card = {
  id: string;
  image: string;
  description: string;
  owner: { id: string };
  likes: Array<{ id: string }>;
};
