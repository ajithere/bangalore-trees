import {Component, Input} from '@angular/core'
import {TreeData} from './treeData'

@Component({
    selector: 'tree-details',
    template: `
            <br><md-card class="example-card">
                <md-card-header>
                    <div md-card-avatar class="example-header-image"></div>
                    <md-card-title><h1>{{treeData.CommonName + " " + treeData.FlowerColor + "-" + treeData.FlowerSize}}</h1></md-card-title>
                    <md-card-subtitle><h2 style="color:grey"    >{{treeData.ScientificName}}</h2></md-card-subtitle>
                </md-card-header><br>

            <!--<img md-card-image src="https://material.angular.io/assets/img/examples/shiba1.jpg">-->
            <!--    <img md-card-image src="http://lorempixel.com/100/100/people?">-->
                <img md-card-image src={{treeData.Image}}>
                
                <md-card-content>
                    <p>
                        {{treeData.Description}}
                    </p>
                </md-card-content>
                
                <md-card-actions>
                    <button md-raised-button >View Details</button>
                </md-card-actions>
            </md-card>
            
        `,
    styles: [`
                .example-header-image {
                    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
                    background-size: cover;
                }            
            `]
})
export class TreeDetailsComponent {
    @Input() treeData: TreeData;
 
}