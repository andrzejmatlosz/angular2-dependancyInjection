import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';

@Component({
    selector: 'component-0',
    template: `
        <div class="child-component level-zero component-0">
            0: {{message}}
            <component-1></component-1>
            <component-2></component-2>
        </div>`,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component0Component implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }

}