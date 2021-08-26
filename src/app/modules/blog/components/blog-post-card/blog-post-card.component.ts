import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/data/models/blog-post';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss'],
})
export class BlogPostCardComponent {
  @Input() blogPost: BlogPost;

  constructor(public commonService: CommonService) {  }
}
