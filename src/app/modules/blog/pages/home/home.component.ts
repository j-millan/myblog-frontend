import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogCategory } from 'src/app/data/models/blog-category';
import { BlogPost } from 'src/app/data/models/blog-post';
import { BlogCategoryService } from 'src/app/data/services/blog-category.service';
import { BlogPostService } from 'src/app/data/services/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPosts$: Observable<BlogPost[]>;
  popularCategories$: Observable<BlogCategory[]>;

  constructor(
    private blogPostService: BlogPostService,
    private blogCategoryService: BlogCategoryService,
  ) { }
  
  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getBlogPosts();
    this.popularCategories$ = this.blogCategoryService.getPopularBlogCategories();
    this.popularCategories$.subscribe();
  }
}
