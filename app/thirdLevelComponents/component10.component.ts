import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-10',
    template: `
        <div class="child-component level-one component-10">
            10: {{message}}
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component10Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}