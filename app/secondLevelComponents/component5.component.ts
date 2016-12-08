import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-5',
    template: `
        <div class="child-component level-one component-5">
            5: {{message}}
            <component-9></component-9>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component5Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}