export class Article{
    id: number | -1;
    title: string | null;
    subtitle: string | null;
    text: string | null;

    constructor(id: number, title: string, subtitle: string, text: string){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
    }
}