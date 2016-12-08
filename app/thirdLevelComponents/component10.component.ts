import { Component, DoCheck, Optional, Host } from '@angular/core';
import { MessageService } from './../core/message.service';
import { BetterMessageService } from './../core/betterMessage.service';

@Component({
    selector: 'component-10',
    template: `
        <div class="child-component level-one component-10">
            10: {{message}}
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component10Component implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(
        private messageService: MessageService, 
        @Optional() @Host() private betterMessageService: BetterMessageService
    ) {}

    ngDoCheck () {
        this.counter++;
        if (this.betterMessageService) {
            this.message = this.betterMessageService.generateMessage(this.counter);
        } else {
            this.message = this.messageService.generateMessage(this.counter);
        }
    }
}