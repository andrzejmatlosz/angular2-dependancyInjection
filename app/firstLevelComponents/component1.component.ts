import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-1',
    template: `
        <div class="child-component level-one component-1">
            1: {{message}}
            <component-3></component-3>
            <component-4></component-4>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component1Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}