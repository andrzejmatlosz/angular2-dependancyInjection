import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-3',
    template: `
        <div class="child-component level-one component-3">
            3: {{message}}
            <component-7></component-7>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component3Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}