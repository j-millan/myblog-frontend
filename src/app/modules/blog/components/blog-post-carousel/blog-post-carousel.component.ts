import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/data/models/blog-post';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-blog-post-carousel',
  templateUrl: './blog-post-carousel.component.html',
  styleUrls: ['./blog-post-carousel.component.scss']
})
export class BlogPostCarouselComponent {
  @Input() blogPosts: BlogPost[];
  currentIndex: number = 0;
  get currentPost(): BlogPost {
    return this.blogPosts[this.currentIndex];
  };

  constructor(public commonService: CommonService) { }

  nextPost(): void {
    this.currentIndex = Math.max(
      0, 
      Math.min(this.currentIndex + 1, this.blogPosts.length - 1)
    );
    console.debug(this.currentIndex)
  }

  previousPost(): void {
    this.currentIndex = Math.max(
      0,
      Math.min(this.currentIndex - 1, this.blogPosts.length - 1)
    );
    console.debug(this.currentIndex)
  }

}
