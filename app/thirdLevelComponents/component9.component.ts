import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-9',
    template: `
        <div class="child-component level-one component-9">
            9: {{message}}
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component9Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}