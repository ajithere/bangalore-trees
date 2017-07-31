import {Component,Output, EventEmitter} from '@angular/core'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'flower-color',
    template: `
        <md-card (swipeleft)="swipe(0, $event.type)" (swiperight)="swipe(0, $event.type)" >
            <div><h5 style="color:grey;float:right">  {{filterCount + 1}} of 3</h5></div>
            <md-card-header>
                <md-card-title>
                    <h1 style="float:left">Filter Wizard</h1>
                </md-card-title>
            </md-card-header>
            <div  *ngIf="filterCount == 0"> 
                <div class="filterContainer"> 
                    <div class="question">                            
                        <md-card-header>
                            <md-card-title><h2 style="color:grey">Select the color of the flower you saw</h2></md-card-title>
                        </md-card-header>
                    </div>
                </div>
                <div class="buttons">
                    <button style="background-color: red; color: white" md-raised-button (click)="OnRedClick()" [@flowerColorAnim]="state" >Red</button>
                    <button style="background-color: blue; color: white" md-raised-button (click)="OnBlueClick()">Blue</button>
                    <button style="background-color: green; color: white" md-raised-button (click)="OnGreenClick()">Green</button>
                    <button style="background-color: grey; color: white" md-raised-button (click)="OnResetClick()">Reset</button>
                </div>
            </div>

            <div  *ngIf="filterCount == 1" [@fadeInFromRight]="swipeLeftSizeIn">
                <div class="filterContainer">             
                    <div class="question">                                                                        
                        <md-card-header>
                            <md-card-title><h2 style="color:grey">What is the approx size of the flower?</h2></md-card-title>
                        </md-card-header>
                    </div>
                </div>
                <div class="buttons">
                    <button style="background-color: red; color: white" md-raised-button (click)="OnSmallClick()">Small</button>
                    <button style="background-color: blue; color: white" md-raised-button (click)="OnMediumClick()">Medium</button>
                    <button style="background-color: green; color: white" md-raised-button (click)="OnLargeClick()">Large</button>
                    <button style="background-color: grey; color: white" md-raised-button (click)="OnResetSizeClick()">Reset</button>
                </div>
            </div>
            
            <div *ngIf="filterCount == 2" [@fadeInFromRight]="swipeLeftGroupIn">                
                <div class="filterContainer">             
                    <div class="question">                                                                        
                        <md-card-header>
                            <md-card-title><h2 style="color:grey">Are they Single or in Cluster?</h2></md-card-title>
                        </md-card-header>
                    </div>                
                </div>
                <div class="buttons">
                    <button style="background-color: red; color: white" md-raised-button (click)="OnSingleClick()">Single</button>
                    <button style="background-color: blue; color: white" md-raised-button (click)="OnClusterClick()">Cluster</button>
                    <button style="background-color: blue; color: white" md-raised-button (click)="OnResetGroupClick()">Reset</button>
                </div>
            </div>
                       
        </md-card>
        `,
    styles: [`
                .filterContainer {
                    display: flex;
                }
                .buttons{
                    display: fl ex;
                    flex-wrap: wrap;
                }           
                        
            `],
    animations: [
    trigger('flowerColorAnim', [
        state('inactive', style({
        backgroundColor: 'red',        transform: 'scale(1)'
        })),
        state('active',   style({
        backgroundColor: 'green',
        transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('fadeInFromRight', [
        state('Junk', style({transform: 'translateX(0)'})),
        transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate(200)
        ])
/*        state('out', style({transform: 'translateX(0)'})),
        transition('* => void', [
            style({transform: 'translateX(-100%)'}),
            animate(200)
        ])*/
    ])
    ]
})
export class FlowerColorComponent {
    
    filterCount = 0;
    state = 'inactive';
    
    swipeLeftSizeIn:string = 'out';
    swipeLeftGroupIn:string = 'out';
    swipeRightGroupOut = 'false';
    swipeRightSizeOut = 'false';

    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    @Output() btnClick = new EventEmitter(); //this.em;
    @Output() btnClick1 = new EventEmitter(); //this.em;
    @Output() btnClick2 = new EventEmitter(); //this.em;
   
    toggleState(){
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
    //Flower color filter
    OnRedClick()
    {
        this.btnClick.emit({color: "Red"});
        this.toggleState();
        setTimeout(() => this.toggleState(), 100);
    }
    OnBlueClick()
    {
        this.btnClick.emit({color: "Blue"});
    }
    OnGreenClick()
    {
        this.btnClick.emit({color: "Green"});
    }
    OnResetClick()
    {
        this.btnClick.emit({color: "Reset"});
    }
    //Flower size filters
    OnSmallClick()
    {
        this.btnClick1.emit({flwsize: "small"});
    }
    OnMediumClick()
    {
        this.btnClick1.emit({flwsize: "medium"});
    }
    OnLargeClick()
    {
        this.btnClick1.emit({flwsize: "large"});
    }
    OnResetSizeClick()
    {
        this.btnClick1.emit({flwsize: "Reset"});
    }
    //Group filters
    OnSingleClick()
    {
        this.btnClick2.emit({ClusterOrSingle: "S"});
    }
    OnClusterClick()
    {
        this.btnClick2.emit({ClusterOrSingle: "C"});
    }
    OnResetGroupClick()
    {
        this.btnClick2.emit({ClusterOrSingle: "Reset"});
    }

    swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT){
        if(action === this.SWIPE_ACTION.LEFT){
            console.log("Entering Left swiped");
            console.log("   " + "swipeLeftSizeIn = " + this.swipeLeftSizeIn);
            console.log("   " + "swipeLeftGroupIn = " + this.swipeLeftGroupIn);
            console.log("   " + "filter count = " + this.filterCount);            
            console.log("   " + "Calling RightClick")
            this.OnRightClick();
            if(this.filterCount === 1 ){
                this.swipeLeftSizeIn = 'in';
                this.swipeLeftGroupIn = 'out';
                console.log("   " + "filter count = 1");
            }
            else if(this.filterCount === 2){
                this.swipeLeftGroupIn = 'in';
                this.swipeLeftSizeIn = 'out'
                console.log("   " + "filter count = 2");
            }
            console.log("   " + "swipeLeftSizeIn = " + this.swipeLeftSizeIn);
            console.log("   " + "swipeLeftGroupIn = " + this.swipeLeftGroupIn);
            console.log("Leaving Left swiped");            
        }
        if(action === this.SWIPE_ACTION.RIGHT){
            console.log("Entering Right swiped");
            console.log("   " + "swipeLeftSizeIn = " + this.swipeLeftSizeIn);
            console.log("   " + "swipeLeftGroupIn = " + this.swipeLeftGroupIn);
            console.log("   " + "filter count = " + this.filterCount);            
            console.log("   " + "Calling LeftClick")
            this.swipeLeftGroupIn = 'out';
            this.swipeLeftSizeIn = 'out';
            this.OnLeftClick();
            
/*            if(this.filterCount === 1 ){
                this.swipeRightSizeOut = 'in';
            }
            else if(this.filterCount === 2){
                this.swipeRightSizeOut = 'in';
            }
  */      }
    }
    //Moving filters
    OnLeftClick(){
        if(this.filterCount > 0)
            this.filterCount--;
    }
    OnRightClick(){
        if(this.filterCount < 2)
            this.filterCount++;
    }
}
