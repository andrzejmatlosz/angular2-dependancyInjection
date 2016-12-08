import { Injectable } from '@angular/core';

@Injectable()
export class BetterMessageService {
    
    generateMessage(value: number) {
        return '<!' + value + '!>';
    }

}