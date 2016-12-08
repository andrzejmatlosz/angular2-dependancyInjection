import { Injectable } from '@angular/core';

Injectable
export class MessageService {
    
    generateMessage(value: number) {
        return '-' + value + '-';
    }

}