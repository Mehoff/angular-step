import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }

  lastArticle: Article | undefined;

  ngOnInit(): void {
    this.loadLastArticle();
  }

  loadLastArticle(){
    this.articleService.getLastArticle().subscribe(article => this.lastArticle = article);
  }

  routeToArticle(){
    
  }

}
