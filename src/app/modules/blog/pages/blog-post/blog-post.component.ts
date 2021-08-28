import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { BlogPost } from 'src/app/data/models/blog-post';
import { BlogPostService } from 'src/app/data/services/blog-post.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost$: Observable<BlogPost>;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    const postSlug = this.route.snapshot.paramMap.get('blog_post_slug_id');
    const postId = parseInt(postSlug.split('-').pop());

    this.blogPost$ = this.blogPostService
      .getBlogPost(postId)
      .pipe(
        delay(2000),
        tap(() => (this.loading = false)),
      );
  }

}
