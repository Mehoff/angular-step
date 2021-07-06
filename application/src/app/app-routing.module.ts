import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

// === COMPONENTS ===
import { ArticleComponent } from './article/article.component'
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "articles/:id", component: ArticleComponent },
  { path: "articles", component: ArticleListComponent },
  { path: "addArticle", component: ArticleAddComponent},
  { path: "about", component: AboutComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
