import {IResource} from '../Interfaces/resource'
export class ResourceService {
    private _resourceUrl = "";
    getResources(): IResource[] {
        return [
            {
                "id": "1",
                "name": "Amit"
            },
            {
                "id": "2",
                "name": "Sandhya"
            },
            {
                "id": "3",
                "name": "Kiran"
            },
            {
                "id": "4",
                "name": "Servani"
            },
            {
                "id": "5",
                "name": "Srikanth"
            }]
    }

}