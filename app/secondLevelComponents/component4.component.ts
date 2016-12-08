import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-4',
    template: `
        <div class="child-component level-one component-4">
            4: {{message}}
            <component-8></component-8>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component4Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}