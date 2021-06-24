import { Comment } from "./comment";

export class Article{
    id: number | -1;
    title: string | 'undefined';
    subtitle: string | 'undefined';
    text: string | 'undefined';
    hidden: boolean | true;
    date?: Date;
    images?: string[];
    comments?: Comment[]

    constructor(id: number,
                title: string,
                subtitle: string, 
                text: string, 
                date?: Date, 
                images?: string[],
                comments?: any[]){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.hidden = true;

        if(date)
            this.date = date;            
        if(images){
            images.forEach(image => {
                this.images?.push(image);
            })
        }
        if(comments){
            comments.forEach(comment => {
                this.comments?.push(new Comment(comment.name, comment.text));
            })
        }
    }
}