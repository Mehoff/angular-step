import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  constructor(
    private articleService: ArticlesService, 
    public datepipe: DatePipe,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addImage(): void{
    let ul = document.getElementById('image-list');
    if(ul){
      let li = document.createElement('li');

      let input = document.createElement('input');
      input.type="text";
      input.classList.add("text-input")
      let button = document.createElement('button');
      button.classList.add('button')
      button.textContent = "Удалить картинку";
      button.addEventListener('click', (event) => this.deleteImage(event))

      li.append(input);
      li.append(document.createElement('br'));
      li.append(button);
      
      ul.append(li);
    }
  }

  deleteImage(event: MouseEvent){
    let button = event.target as HTMLInputElement;
    button.parentElement?.remove();
  }

  validateArticle(article: any){
    if(article.title.length > 3 && article.subtitle.length > 3 && article.text.length > 10){
      return true;
    }
    else return false;
  }

  addArticle(){
    let nextId: number;
    this.articleService.getNextArticleId().subscribe(res => nextId = res.id);
    
    let title = (document.getElementById('title') as HTMLInputElement).value.trim();
    let subtitle = (document.getElementById('subtitle') as HTMLInputElement).value.trim();
    let text = (document.getElementById('text') as HTMLInputElement).value.trim();
    let date = this.datepipe.transform(Date.now(), 'MMM d, y, hh:mm a')
    let imageNodes = document.getElementsByClassName('input-image');


    let images: Array<any> = [];

    Array.from(imageNodes).forEach((element) => {

      const url = (element as HTMLInputElement).value.trim();

      if(url.match(/(https?:\/\/.*\.(?:png|jpg))/))
        images?.push(url)
    })
    
    let newArticle = {
        title,
        subtitle,
        text,
        date,
        images
    }

    if(!this.validateArticle(newArticle)){
      alert('Не все данные введены корректно!');
      return;
    }

    this.articleService.postArticle(newArticle).subscribe(result => {
      if(result.err){
        alert(result.err);
        return;
      }
      alert('Пост отправлен')
      this.router.navigate([`/articles/${result.id}`])
    })
  }
}
