import { Direction } from "@angular/cdk/bidi";

export class TextDirectionController {

    public textDirection =localStorage.getItem('lang') as Direction;

    constructor() {
        this.CheckDiriction();
        this.textDirection;
    }

    public CheckDiriction(): void {
        const lang = localStorage.getItem('lang');
        if (lang === 'en') { 
            this.textDirection = 'ltr';
        } else {
            this.textDirection = 'ltr';
        }
    }
}