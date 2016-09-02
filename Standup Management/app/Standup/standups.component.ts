import { Component, OnInit} from 'angular2/core';
import {ResourceService} from '../Services/resource.service'
import {IResource} from '../Interfaces/resource'

@Component({
    selector: 'pm-standups',
    templateUrl: 'app/Standup/standups.component.html',
    providers: [ResourceService]
})

export class StandupsComponent implements OnInit {
    selectedResource: string = "test";
    header: string = "Team Report";
    availableResources : IResource[];
    constructor(private _resourceService: ResourceService) {
    }
    ngOnInit(): void {
        this.availableResources = this._resourceService.getResources();
    }
    //ngDoCheck() {
    //    if (this.selectedResource != "5") {
    //        alert(this.selectedResource);
    //    }
    //}

}