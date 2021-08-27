import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/data/models/blog-post';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-blog-post-carousel',
  templateUrl: './blog-post-carousel.component.html',
  styleUrls: ['./blog-post-carousel.component.scss']
})
export class BlogPostCarouselComponent {
  @Input() set blogPosts(blogPosts: BlogPost[]) {
    this._blogPosts = blogPosts.splice(4);
  };
  
  currentIndex: number = 0;
  isPaused: boolean = false;

  get blogPosts(): BlogPost[] {
    return this._blogPosts;
  }

  _blogPosts: BlogPost[];

  get currentPost(): BlogPost {
    return this.blogPosts[this.currentIndex];
  };

  constructor(public commonService: CommonService) { 
    let nextPost = () => {
      setTimeout(() => {
        if (!this.isPaused) {
          this.nextPost();
        }

        nextPost();
      }, 8000);
    }

    nextPost();
  }

  nextPost(): void {
    if (this.currentIndex < this.blogPosts.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }

  previousPost(): void {
    this.currentIndex = Math.max(
      0,
      Math.min(this.currentIndex - 1, this.blogPosts.length - 1)
    );
  }

}
