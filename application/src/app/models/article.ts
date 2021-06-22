export class Article{
    id: number | -1;
    title: string | 'undefined';
    subtitle: string | 'undefined';
    text: string | 'undefined';
    hidden: boolean | true;
    date?: Date;
    imgUri?: string | 'undefined';

    constructor(id: number, title: string, subtitle: string, text: string, date?: Date, imgUri?: string){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.hidden = true;

        if(date)
            this.date = date;            
        if(imgUri)
            this.imgUri = imgUri;

    }
}