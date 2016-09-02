import { Component } from 'angular2/core';
import {StandupsComponent} from './Standup/standups.component'

@Component({
    selector: 'pm-app',
    template: `
            <pm-standups></pm-standups> `,
    directives: [StandupsComponent]
})

export class AppComponent {
    pageTitle: string = 'Standup Management ';
}

