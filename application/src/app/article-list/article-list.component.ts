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
  
  articles: Article[] = ARTICLES;

  ngOnInit(): void {
  }

  onClick(id: number){
    this.articles.forEach(article => {
        article.hidden = !(article.id == id)
    });
  }

  search(){
    const searchBar = document.getElementById('search-bar') as HTMLInputElement;
    const text = searchBar.value.trim();

    if(text.length > 0){
      this.articles = ARTICLES.filter(article => { 
        return article.title.toLowerCase().includes(text.toLowerCase());
      })
    }
    
    else{
      this.articles = ARTICLES;
    }
  }
}
