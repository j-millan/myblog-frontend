import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { BlogPost } from '../models/blog-post';
import { BlogPostFilter } from '../models/filters/blog-post.filter';
import { SerializerService } from './serializer.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  readonly BLOG_POST_LIST_CREATE_PATH = 'blog-posts';
  readonly BLOG_POST_DETAIL_UPDATE_DELETE_PATH = 'blog-posts/blogPostId';

  constructor(
    private api: ApiService,
  ) { }

  getBlogPost(blogPostId: number): Observable<BlogPost> {
    const path = this.api.replaceParams(
      this.BLOG_POST_DETAIL_UPDATE_DELETE_PATH,
      { blogPostId },
    );

    return this.api.get<BlogPost>(path);
  }

  getBlogPosts(filter?: BlogPostFilter): Observable<BlogPost[]> {
    const queryString = this.api.getQuerystring(filter);
    return this.api.get<BlogPost[]>(
      this.BLOG_POST_LIST_CREATE_PATH + queryString,
    );
  }
}
