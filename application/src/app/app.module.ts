import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from './services/articles.service';
import { ArticleAddComponent } from './article-add/article-add.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    NavigationBarComponent,
    AboutComponent,
    ArticleAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticlesService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
