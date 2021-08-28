import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { BlogPostCarouselComponent } from './components/blog-post-carousel/blog-post-carousel.component';
import { BlogComponent } from './blog.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { BlogPostRowComponent } from './components/blog-post-row/blog-post-row.component';



@NgModule({
  declarations: [
    HomeComponent,
    BlogPostCardComponent,
    BlogPostCarouselComponent,
    BlogComponent,
    CategoryMenuComponent,
    BlogPostRowComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BlogRoutingModule,
    SharedModule,
  ]
})
export class BlogModule { }
