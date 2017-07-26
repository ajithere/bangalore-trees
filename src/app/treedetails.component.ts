import {Component, Input} from '@angular/core'
import {TreeData} from './treeData'

@Component({
    selector: 'tree-details',
    template: `
            <br><md-card class="example-card">
            <div><h5 class="filterCount"> {{index}} of {{count}} </h5></div>
                <md-card-header>
                    
                    <md-card-title>
                        <h1>{{treeData.CommonName}}</h1>
                    </md-card-title>
                    <md-card-subtitle>
                        <h2 style="color:grey">{{treeData.ScientificName}}</h2>
                    </md-card-subtitle>
                </md-card-header>
                <img md-card-image border="0" class="img-responsive" src={{treeData.Image}}>
                <md-card-content>
                    <p>
                        {{treeData.Description}}
                    </p>
                </md-card-content>
                <div><h6 class="filterCount"> Image Copyright: A Ajit </h6></div>
                <md-card-actions>
                    <button md-raised-button >View Details</button>
                </md-card-actions>
            </md-card>
            
        `,
    styles: [`
                .img-responsive {
                    height: auto;
                    width: 100%;
                }
                .filterCount{
                    color:grey;
                    float:right;
                }            
            `]
})  
export class TreeDetailsComponent {
    @Input() treeData: TreeData;
    @Input() index;
    @Input() count;
 
}