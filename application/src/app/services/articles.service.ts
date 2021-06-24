import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'http://localhost:4201/';


  constructor(private http: HttpClient) { }

  getArticles() : Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + "articles");
  }

}
