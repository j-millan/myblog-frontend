import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogCategoryService } from 'src/app/data/services/blog-category.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent {
  categories$ = this.blogCategoryService
    .getBlogCategories()
    .pipe(
      map((categories) => categories.slice(0, 7)),
    );
  
  constructor(
    private blogCategoryService: BlogCategoryService
  ) { }
}
