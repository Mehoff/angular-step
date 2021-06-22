import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

// === COMPONENTS ===
import { ArticleComponent } from './article/article.component'
import { ArticleListComponent } from './article-list/article-list.component';
// import { AppComponent } from './app.component';

const routes: Route[] = [
  { path: "articles/:id", component: ArticleComponent },
  { path: "articles", component: ArticleListComponent},
  // { path: "", component: AppComponent }
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
