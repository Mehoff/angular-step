import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ARTICLES } from '../mocks/article-mock'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
    
  articles: Article[] = ARTICLES;

}
