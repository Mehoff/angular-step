import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';
import { ARTICLES } from '../mocks/article-mock';
import { ArticlesService } from '../services/articles.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article?: Article;

  constructor(private router: Router, private articleService: ArticlesService) { }

  onImageClick(uri: string){
    window.open(uri, 'Image');
  }

  onCommentSubmit(){

    let nameElement = (document.getElementById('comment-name') as HTMLInputElement)
    let textElement = (document.getElementById('comment-text') as HTMLInputElement)

    let name = nameElement.value.trim();
    let text = textElement.value.trim();

    let comment = new Comment(name, text);

    if(!this.validateComment(comment)){
      alert('Некорректные введенные данные');
      return;
    }

    nameElement.value = ''
    textElement.value = '' 

    if(this.article){
      this.articleService.sendComment(this.article.id, comment).subscribe(article => this.article = article);
    }
  }

  validateComment(comment: Comment){
    return (comment.name.length > 0 && comment.name.length < 30 && comment.text.length > 0 && comment.text.length < 255)
  }

  ngOnInit(): void {
    let n = this.router.url.lastIndexOf('/');
    let id = this.router.url.substring(n + 1);
    this.articleService.getArticles().subscribe(articles => this.article = articles.find((a) => a.id.toString() == id));
  }

}
