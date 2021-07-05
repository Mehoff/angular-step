import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }
  
  articles: Article[] = [];
  
  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
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
      this.articleService.getArticles().subscribe(articles => {
        this.articles = articles.filter(a => {
          return a.title.toLowerCase().includes(text.toLowerCase());
        })
      })
    }
    
    else{
      this.articleService.getArticles().subscribe(articles => this.articles = articles);
    }
  }
}
