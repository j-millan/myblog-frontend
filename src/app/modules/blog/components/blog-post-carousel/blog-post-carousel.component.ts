import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { BlogPost } from 'src/app/data/models/blog-post';

@Component({
  selector: 'app-blog-post-carousel',
  templateUrl: './blog-post-carousel.component.html',
  styleUrls: ['./blog-post-carousel.component.scss']
})
export class BlogPostCarouselComponent extends BaseComponent {
  @Input() blogPosts: BlogPost[];
  currentIndex: number = 0;
  get currentPost(): BlogPost {
    return this.blogPosts[this.currentIndex];
  };

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
