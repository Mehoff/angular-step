export class Article{
    id: number;
    title: string;
    subtitle: string;
    text: string;
    date?: Date;
    imgUri?: string;

    constructor(id: number, title: string, subtitle: string, text: string, date?: Date, imgUri?: string){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        
        if(imgUri)
            this.imgUri = imgUri;

        if(date)
            this.date = date;
        
    }
}