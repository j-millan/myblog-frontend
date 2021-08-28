import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/data/models/blog-post';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss'],
})
export class BlogPostCardComponent implements OnInit {
  @Input() blogPost: BlogPost;
  slug: string;

  constructor(public commonService: CommonService) {  }

  ngOnInit(): void {
    this.slug = `${this.blogPost.slug}-${this.blogPost.id}`;    
  }
}
