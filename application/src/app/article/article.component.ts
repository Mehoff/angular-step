import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ARTICLES } from '../mocks/article-mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // Хочется перейти на @Input
  
  article?: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Дрянь какая-то
    var n = this.router.url.lastIndexOf('/');
    var id = this.router.url.substring(n + 1);
    this.article = ARTICLES.find((article) => article.id.toString() == id)
  }

}
