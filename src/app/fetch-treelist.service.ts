
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import {TreeData} from './treeData'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TreeListService{

    constructor (private _http: Http) {}
    private treeUrl = '/api/treelist';

    getTreeData() : Observable<TreeData[]>{
        return this._http.get(this.treeUrl)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}
