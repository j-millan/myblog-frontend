import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { BlogCategory } from '../models/blog-category';

@Injectable({
  providedIn: 'root'
})
export class BlogCategoryService {

  readonly BLOG_CATEGORY_LIST_PATH = 'blog-categories';
  readonly POPULAR_BLOG_CATEGORY_LIST_PATH = 'blog-categories/popular';

  constructor(private api: ApiService) { }

  getBlogCategories(): Observable<BlogCategory[]> {
    return this.api.get<BlogCategory[]>(this.BLOG_CATEGORY_LIST_PATH);
  }

  getPopularBlogCategories(): Observable<BlogCategory[]> {
    return this.api.get<BlogCategory[]>(this.POPULAR_BLOG_CATEGORY_LIST_PATH);
  }
}
