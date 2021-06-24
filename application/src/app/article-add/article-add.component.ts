import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
  }

  addImage(): void{
    let ul = document.getElementById('image-list');
    if(ul){
      let li = document.createElement('li');

      let input = document.createElement('input');
      input.type="text";
      input.className = "input-image";
      let button = document.createElement('button');
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

  addArticle(){
    let nextId: number;
    this.articleService.getNextArticleId().subscribe(res => nextId = res.id);
    
    //TODO: make new article properties validation

    let title = (document.getElementById('title') as HTMLInputElement).value.trim();
    let subtitle = (document.getElementById('subtitle') as HTMLInputElement).value.trim();
    let text = (document.getElementById('text') as HTMLInputElement).value.trim();
    let date = Date.now().toLocaleString();
    let imageNodes = document.getElementsByClassName('input-image');


    let urls: Array<any> = [];

    Array.from(imageNodes).forEach((element) => {
      //let url = (element as HTMLInputElement).value; 

      urls?.push({
        url: (element as HTMLInputElement).value
      })
    })
    
    let newArticle = {
        title,
        subtitle,
        text,
        date,
        urls
    }

    console.log(newArticle);
  }
}
