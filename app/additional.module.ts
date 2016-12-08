
import { NgModule }      from '@angular/core';

import { Component6Component } from './secondLevelComponents/component6.component';
import { Component10Component } from './thirdLevelComponents/component10.component';

import { MessageService } from './core/message.service';

@NgModule({
    declarations: [ 
        Component6Component,
        Component10Component,
    ],
    exports: [ 
        Component6Component,
        Component10Component,
    ],
    // providers: [ MessageService ]
})
export class AdditionalModule { }