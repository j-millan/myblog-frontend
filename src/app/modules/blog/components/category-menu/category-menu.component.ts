import { Component } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { BlogCategory } from 'src/app/data/models/blog-category';
import { BlogCategoryService } from 'src/app/data/services/blog-category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent extends BaseComponent {
  categories: BlogCategory[];
  loading: boolean = true;
  
  constructor(
    private blogCategoryService: BlogCategoryService
  ) { 
    super();

    this.subscriptions.push(
      this.blogCategoryService.getBlogCategories()
        .pipe(delay(1000)) // delay is for aesthetical purposes only
        .subscribe((categories) => {
          this.categories = categories.slice(0, 7);
        }),
    );
  }
}
