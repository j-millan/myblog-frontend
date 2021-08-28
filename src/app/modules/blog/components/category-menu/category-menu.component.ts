import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogCategoryService } from 'src/app/data/services/blog-category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent {
  categories$ = this.blogCategoryService
    .getBlogCategories()
    .pipe(
      map((categories) => categories.slice(0, 7)),
    );
  
  constructor(
    private blogCategoryService: BlogCategoryService
  ) { }
}
