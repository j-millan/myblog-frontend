import { User } from "src/app/core/models/user";
import { BlogCategory } from "./blog-category";

export interface BlogPost {
  id: number;
  title: string;
  author: User;
  introduction: string;
  body: string;
  thumbnail_url: string;
  pub_date: string | Date;
  upd_date: string | Date;
  categories: BlogCategory[];
  slug: string;
}