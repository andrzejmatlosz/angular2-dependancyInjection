
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component0Component } from './zeroLevelComponents/component0.component';
import { Component1Component } from './firstLevelComponents/component1.component';
import { Component2Component } from './firstLevelComponents/component2.component';
import { Component3Component } from './secondLevelComponents/component3.component';
import { Component4Component } from './secondLevelComponents/component4.component';
import { Component5Component } from './secondLevelComponents/component5.component';
import { Component7Component } from './thirdLevelComponents/component7.component';
import { Component8Component } from './thirdLevelComponents/component8.component';
import { Component9Component } from './thirdLevelComponents/component9.component';

import { AdditionalModule } from './additional.module';
import { MessageService } from './core/message.service';

@NgModule({
    imports: [ 
        BrowserModule, AdditionalModule
    ],
    declarations: [ 
        AppComponent,
        Component0Component,
        Component1Component,
        Component2Component,
        Component3Component,
        Component4Component,
        Component5Component,
        Component7Component,
        Component8Component,
        Component9Component,
    ],
    bootstrap: [ AppComponent ],
    providers: [ MessageService ]
})
export class AppModule { }