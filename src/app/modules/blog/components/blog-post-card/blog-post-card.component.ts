import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';
import { BlogPost } from 'src/app/data/models/blog-post';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss']
})
export class BlogPostCardComponent extends BaseComponent {
  @Input() blogPost: BlogPost;

  constructor(userService: UserService) {
    super(userService);
  }
}
