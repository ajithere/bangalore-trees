import {Component,Output, EventEmitter} from '@angular/core'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'flower-property',
    template: `
 
        <p><md-card class="filterCard" (swipeleft)="swipe(0, $event.type)" (swiperight)="swipe(0, $event.type)">
            <div class="filterCountNum" [@flowerColorAnim]="state"><h6>  {{filterCount + 1}} of 4</h6></div>
  
            <div  *ngIf="filterCount == 0" [@fadeInOut]> 
                <div class="filterContainer"> 
                         <md-card-header>
                            <md-card-title class="title"><h3>Select closest flower color shade</h3></md-card-title>
                        </md-card-header>
                </div>
                <div>
                    <button id="1" style="background-color: #e0e0e0; color: red" md-icon-button (click)="OnFlowerColorClick('1', 'Red')" [@flowerColorAnim]="state" >
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button>
                    <button id="2" style="background-color: #e0e0e0; color: MediumPurple" md-icon-button (click)="OnFlowerColorClick('2', 'Purple')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button>
                    <button id="3" style="background-color: #e0e0e0; color: #98FB98" md-icon-button (click)="OnFlowerColorClick('3', 'Green')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button><br>
                    <button id="4" style="background-color: #e0e0e0; color: #FF69B4" md-icon-button (click)="OnFlowerColorClick('4', 'Pink')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button>
                    <button id="5" style="background-color: #e0e0e0; color: #FFFF00" md-icon-button (click)="OnFlowerColorClick('5', 'Yellow')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button>
                    <button id="6" style="background-color: #e0e0e0; color: #F27B00" md-icon-button (click)="OnFlowerColorClick('6', 'Orange')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button><br>
                    <button id="7" style="background-color: #e0e0e0; color: #FFFAF0" md-icon-button (click)="OnFlowerColorClick('7', 'White')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button>
                    <button id="8" style="background-color: #e0e0e0; color: #8B4513" md-icon-button (click)="OnFlowerColorClick('8', 'Brown')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">lens</md-icon>
                    </button>
                    <button id="9" style="background-color: #e0e0e0; color: grey" md-icon-button (click)="OnFlowerColorClick('9', 'Reset')">
                        <md-icon class="md-24" aria-label="Example icon-button with a heart icon">restore_page</md-icon>
                    </button>
                </div>
            </div>

            <div  *ngIf="filterCount == 1" [@fadeInOut]>
                <div class="filterContainer">             
                    <div class="question">                                                                        
                        <md-card-header>
                            <md-card-title class="title"><h3>Select flower size?</h3></md-card-title>
                        </md-card-header>
                    </div>
                </div>
                <div class="buttons">
                        <mdl-radio name="group1" value="small"  [(ngModel)]="radioOptionSize" (click)="OnSizeClick()" mdl-ripple>Small</mdl-radio>
                        <mdl-radio name="group1" value="medium" [(ngModel)]="radioOptionSize" (click)="OnSizeClick()" mdl-ripple>Medium</mdl-radio><br>
                        <mdl-radio name="group1" value="large"  [(ngModel)]="radioOptionSize" (click)="OnSizeClick()" mdl-ripple>Large</mdl-radio>
                        <mdl-radio name="group1" value="Reset" [(ngModel)]="radioOptionSize" (click)="OnSizeClick()" mdl-ripple>Not Sure</mdl-radio>                        
                </div>
            </div>
            
            <div *ngIf="filterCount == 2" [@fadeInOut]>                
                <div class="filterContainer">             
                    <div class="question">                                                                        
                        <md-card-header>
                            <md-card-title class="title"><h3>Flowers in Cluster or Individual?</h3></md-card-title>
                        </md-card-header>
                    </div>                
                </div>
                <div class="buttons">
                    <mdl-radio name="group2" value="S"  [(ngModel)]="radioOptionCluster" (click)="OnClusterClick()" mdl-ripple>Single</mdl-radio>
                    <mdl-radio name="group2" value="C" [(ngModel)]="radioOptionCluster" (click)="OnClusterClick()" mdl-ripple>Cluster</mdl-radio>                        
                    <mdl-radio name="group2" value="Reset"  [(ngModel)]="radioOptionCluster" (click)="OnClusterClick()" mdl-ripple>Not Sure</mdl-radio>
                </div>
            </div>
            <div *ngIf="filterCount == 3" [@fadeInOut]>                
                <div class="filterContainer">             
                    <div>                                                                        
                        <md-card-header>
                            <md-card-title class="title"><h3>Are the flowers fragrant?</h3></md-card-title>
                        </md-card-header>
                    </div>                
                </div>
                <div class="buttons">
                    <mdl-radio name="group2" value="Highly"  [(ngModel)]="radioOptionSmell" (click)="OnSmellClick()" mdl-ripple>Fragrant</mdl-radio>
                    <mdl-radio name="group2" value="Mildly"  [(ngModel)]="radioOptionSmell" (click)="OnSmellClick()" mdl-ripple>Mildly Fragrant</mdl-radio><br>
                    <mdl-radio name="group2" value="Bad" [(ngModel)]="radioOptionSmell" (click)="OnSmellClick()" mdl-ripple>Bad Smell</mdl-radio>
                    <mdl-radio name="group2" value="None" [(ngModel)]="radioOptionSmell" (click)="OnSmellClick()" mdl-ripple>No Smell</mdl-radio>                        
                    <mdl-radio name="group2" value="Reset"  [(ngModel)]="radioOptionSmell" (click)="OnSmellClick()" mdl-ripple>Not Sure</mdl-radio>
                </div>
            </div>

        </md-card>
        <md-progress-bar color="primary"
          class="example-margin"
          [color]="color"
          [mode]="mode"
          [value]="value">
          
        </md-progress-bar></p>            
        `,
    styles: [`
                p{
                    margin-top:8px;
                    margin-bottom:5px;
                }
                .title, .buttons {
                    color:#3E50B4;
                }
                .filterCountNum {
                    color:grey;
                    float:right;
                    margin-top:auto;
                    margin-bottom:auto;
                }
                .filterContainer {
                    display: flex;
                }
                .filterCard{
                    background-color: mintcream;
                }
 
                                        
            `],
    animations: [
    trigger('flowerColorAnim', [
        state('inactive', style({
                transform: 'scale(1)'
        })),
        state('active',   style({
        
        transform: 'scale(1.5)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('fadeInOut', [
        transition('void => *', [
            style({transform: 'translateX(0) scale(0)'}),
            animate(200)
        ])            
    ])
    ]
})
export class FlowerPropertyComponent {

    constructor(public toast: MdSnackBar) {

    }   
    radioOptionSize: string;
    radioOptionCluster: string;
    radioOptionSmell: string;
    filterCount = 0;
    value = 25;
    state = 'inactive';
    color = 'primary';
    mode = 'determinate';
    toastFlag = true;
    
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };

    @Output() btnClick = new EventEmitter(); //this.em;
    @Output() btnClick1 = new EventEmitter(); //this.em;
    @Output() btnClick2 = new EventEmitter(); //this.em;
    @Output() btnClick3 = new EventEmitter(); //this.em;    
   
    toggleState(){
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }

    //Flower color filter
    OnFlowerColorClick(id, param)
    {
        this.resetButtonBackgroundColor();
        document.getElementById(id).style.backgroundColor = "#A9A9A9";                                
        this.btnClick.emit({color: param});
        this.toggleState();
        setTimeout(() => this.toggleState(), 100);
        if(this.toastFlag){
            this.toast.openFromComponent(ToastComponent, {
                duration: 2000,
            });
            this.toastFlag = false;
        }
    }
    resetButtonBackgroundColor()
    {
        document.getElementById("1").style.backgroundColor = "#e0e0e0";
        document.getElementById("2").style.backgroundColor = "#e0e0e0";
        document.getElementById("3").style.backgroundColor = "#e0e0e0";
        document.getElementById("4").style.backgroundColor = "#e0e0e0";                        
        document.getElementById("5").style.backgroundColor = "#e0e0e0";
        document.getElementById("6").style.backgroundColor = "#e0e0e0";
        document.getElementById("7").style.backgroundColor = "#e0e0e0";
        document.getElementById("8").style.backgroundColor = "#e0e0e0";                        
        document.getElementById("9").style.backgroundColor = "#e0e0e0";                        
    }
    //Flower size filters
    OnSizeClick()
    {
          this.btnClick1.emit({flwsize: this.radioOptionSize});
    }
    //Group filters
    OnClusterClick()
    {
        this.btnClick2.emit({ClusterOrSingle: this.radioOptionCluster});
    }
    OnSmellClick()
    {
        this.btnClick3.emit({flwsmell: this.radioOptionSmell});
    }

    swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT){
        if(action === this.SWIPE_ACTION.LEFT){
            this.OnRightClick();
        }
        if(action === this.SWIPE_ACTION.RIGHT){
            this.OnLeftClick();
      }
    }
    //Moving filters
    OnLeftClick(){
        if(this.filterCount > 0){
            this.filterCount--;
            this.value -= 25;
        }
    }
    OnRightClick(){
        if(this.filterCount < 3){
            this.filterCount++;
            this.value += 25;
        }
    }
}

@Component({
    selector: 'toast',
    template: `
        <md-chip style="background-color: #424242; color: white; font-size: 15px">Swipe Right or left for more filter options</md-chip>
   `
})
export class ToastComponent{}