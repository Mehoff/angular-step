import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'http://localhost:4201/';


  constructor(private http: HttpClient) { }

  getArticles() : Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + "articles");
  }

  sendComment(id: number, comment: Comment){
    const url = this.baseUrl + "post-comment";
    return this.http.put<Article>(url, {id: id, name: comment.name, text: comment.text});
  }

  postArticle(article: any){
    const url = this.baseUrl + "post-article";
    return this.http.put<any>(url, article);
  }

  getNextArticleId() : Observable<any>{
    const url = this.baseUrl + "next-article-id";
    return this.http.get<any>(url);
  }

  getLastArticle() : Observable<Article>{
    return this.http.get<Article>(this.baseUrl + "lastArticle");
  }

}
