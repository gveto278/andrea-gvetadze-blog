export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author: User;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
