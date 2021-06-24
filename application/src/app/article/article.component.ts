import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ARTICLES } from '../mocks/article-mock';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // Хочется перейти на @Input
  
  article?: Article;

  constructor(private router: Router, private articleService: ArticlesService) { }

  ngOnInit(): void {
    // Дрянь какая-то
    var n = this.router.url.lastIndexOf('/');
    var id = this.router.url.substring(n + 1);
    //this.article = ARTICLES.find((article) => article.id.toString() == id)
    this.articleService.getArticles().subscribe(articles => this.article = articles.find((a) => a.id.toString() == id));
  }

}
