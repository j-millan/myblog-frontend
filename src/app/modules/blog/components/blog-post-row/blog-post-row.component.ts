import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogCategory } from 'src/app/data/models/blog-category';
import { BlogPost } from 'src/app/data/models/blog-post';
import { BlogPostFilter } from 'src/app/data/models/filters/blog-post.filter';
import { BlogPostService } from 'src/app/data/services/blog-post.service';

@Component({
  selector: 'app-blog-post-row',
  templateUrl: './blog-post-row.component.html',
  styleUrls: ['./blog-post-row.component.scss']
})
export class BlogPostRowComponent implements OnInit {

  @Input() category: BlogCategory;
  blogPosts$: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {  }
  
  ngOnInit(): void {
    const filter: BlogPostFilter = {
      category_id: this.category.id,
    };
  
    this.blogPosts$ = this.blogPostService.getBlogPosts(filter);
  }

}
