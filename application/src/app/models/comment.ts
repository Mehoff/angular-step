export class Comment{
    name: string | ''
    text: string | ''

    constructor(name: string, text: string){
        this.name = name;
        this.text = text;
    }
}