import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // Todo: send comment to API 
  }

}
