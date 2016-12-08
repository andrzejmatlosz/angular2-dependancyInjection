import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-6',
    template: `
        <div class="child-component level-one component-6">
            6: {{message}}
            <component-10></component-10>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component6Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}