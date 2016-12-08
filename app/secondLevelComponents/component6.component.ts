import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';
import { BetterMessageService } from './../core/betterMessage.service';

@Component({
    selector: 'component-6',
    template: `
        <div class="child-component level-one component-6">
            6: {{message}}
            <ng-content></ng-content>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ],
    providers: [ BetterMessageService ] 
})
export class Component6Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService: BetterMessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}