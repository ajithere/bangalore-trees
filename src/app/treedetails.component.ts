import {Component, Input, EventEmitter} from '@angular/core'
import {TreeData} from './treeData'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'tree-details',
    template: `
            
            <p><mat-card class="example-card" >
                <div><h6 class="filterCount" [@filterAnim]="toggleFlag"> {{index}} of {{count}} </h6></div>
                <mat-card-header>
                    
                    <mat-card-title class="title">
                        <h2>{{treeData.CommonName}}</h2>
                    </mat-card-title>
                    
                    <mat-card-subtitle class="subtitle">
                        <h3 style="color:grey">{{treeData.ScientificName}}</h3>
                    </mat-card-subtitle>
                    
                </mat-card-header>
              
                <img mat-card-image border="0" class="img-responsive" src={{treeData?.Image[imageIndex]}}>
                <mat-card-content class="content">
                    <p>
                        {{treeData.Description}}
                    </p>
                </mat-card-content>
                <div><h6 class="imageCopyright"> Img Credit: {{treeData?.ImageCredit[imageIndex]}}<br> <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a></h6></div>
                <mat-card-actions>
                    <button mat-raised-button class="moreImages" (click)="OnMoreImagesClick()">More Images</button>
                </mat-card-actions>
            </mat-card></p>
            
        `,
    styles: [`
                p{
                    margin-top:8px;
                    margin-bottom:10px;
                }
                .title {
                    color: #3E50B4;
                    margin-left:-8px;
                }
                .content{
                    color: #3E50B4;
                    margin-left:auto;
                }
                .subtitle{
                    color: grey;
                    margin-left:-8px;
                }
                .img-responsive {
                    height: auto;
                    width: 100%;
                    margin-left:auto;
                    margin-right:auto;
                }
                .filterCount{
                    color:grey;
                    float:right;
                    margin-top:auto;
                }
                .moreImages{
                    background-color:#3E50B4;
                    color: white;
                    margin-left:auto;
                }
                .imageCopyright{
                    color:grey;
                    float:right;
                    font-size:8px;
                    margin-right:auto
                }
             `],
    animations: [
    trigger('filterAnim', [
        state('inactive', style({
            color: 'grey',
            transform: 'scale(1)'
        })),
        state('active',   style({
            color: '#3E50B4',
            transform: 'scale(2)'
        })),
        transition('inactive => active', animate('200ms ease-in')),
        transition('active => inactive', animate('200ms ease-out'))
    ])
    ]             
})  
export class TreeDetailsComponent {
    @Input() treeData: TreeData;
    @Input() index;
    @Input() count;
    @Input() toggleFlag;

    imageIndex = 0;
    imageCount = 0;
    
    OnMoreImagesClick(){
        this.imageCount = this.treeData.Image.length;
        if(this.imageIndex < this.imageCount -1 ){
            this.imageIndex++;
        }
        else{
            this.imageIndex = 0;
        }
     }
}