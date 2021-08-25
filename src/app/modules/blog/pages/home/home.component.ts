import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/data/models/blog-post';
import { BlogPostService } from 'src/app/data/services/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPost$: Observable<BlogPost>;

  constructor(private blogPostService: BlogPostService) { }
  
  ngOnInit(): void {
    this.blogPost$ = this.blogPostService.getBlogPost(11);
  }

}
