import { Component, DoCheck } from '@angular/core';
import { MessageService } from './../core/message.service';
import { BetterMessageService } from './../core/betterMessage.service';

@Component({
    selector: 'component-2',
    template: `
        <div class="child-component level-one component-2">
            2: {{message}}
            <component-5></component-5>
            <component-6><component-10></component-10></component-6>
        </div>
        `,
    styleUrls: [ 'app/child.components.css' ],
    // providers: [ BetterMessageService ]
})
export class Component2Component  implements DoCheck {
    
    private counter: number = 0;
    private message: string;

    constructor(private messageService:MessageService) {}

    ngDoCheck () {
        this.counter++;
        this.message = this.messageService.generateMessage(this.counter);
    }
}