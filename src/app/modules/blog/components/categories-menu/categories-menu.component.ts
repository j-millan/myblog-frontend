import { Component } from '@angular/core';
import { BlogCategoryService } from 'src/app/data/services/blog-category.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent {
  categories$ = this.blogCategoryService.getBlogCategories();
  
  constructor(
    private blogCategoryService: BlogCategoryService
  ) { }
}
