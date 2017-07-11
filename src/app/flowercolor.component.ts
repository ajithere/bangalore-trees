import {Component,Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'flower-color',
    template: `
        <md-card>
            <div  style="position: absolute;">
                <i class="material-icons" (click)="OnLeftClick()">keyboard_arrow_left</i>
            </div>
            <div  style="position: absolute; margin-left:450px;">
                <i class="material-icons" (click)="OnRightClick()">keyboard_arrow_right</i>
            </div>
            <div  *ngIf="filterCount == 0" style="margin-left:80px;" >                
                <md-card-header>
                    <md-card-title><h2 style="color:grey">Select the color of the flower you saw</h2></md-card-title>
                </md-card-header><br>
                            
                <button style="background-color: red; color: white" md-raised-button (click)="OnRedClick()">Red</button>
                <button style="background-color: blue; color: white" md-raised-button (click)="OnBlueClick()">Blue</button>
                <button style="background-color: green; color: white" md-raised-button (click)="OnGreenClick()">Green</button>
                <button style="background-color: grey; color: white" md-raised-button (click)="OnResetClick()">Reset</button>
            </div>
            <div  style="margin-left:80px;" *ngIf="filterCount == 1">                
                <md-card-header>
                    <md-card-title><h2 style="color:grey">What is the approx size of the flower?</h2></md-card-title>
                </md-card-header><br>
                            
                <button style="background-color: red; color: white" md-raised-button (click)="OnSmallClick()">Smalls</button>
                <button style="background-color: blue; color: white" md-raised-button (click)="OnMediumClick()">Medium</button>
                <button style="background-color: green; color: white" md-raised-button (click)="OnLargeClick()">Large</button>
                <button style="background-color: grey; color: white" md-raised-button (click)="OnResetSizeClick()">Reset</button>
            </div>
            <div  style="margin-left:80px;" *ngIf="filterCount == 2">                
                <md-card-header>
                    <md-card-title><h2 style="color:grey">Are they Single or in Cluster?</h2></md-card-title>
                </md-card-header><br>
                <button style="background-color: red; color: white" md-raised-button (click)="OnSingleClick()">Single</button>
                <button style="background-color: blue; color: white" md-raised-button (click)="OnClusterClick()">Cluster</button>
                <button style="background-color: blue; color: white" md-raised-button (click)="OnResetGroupClick()">Reset</button>
            </div>
        </md-card>
        `,
    styles: [`
                .material-icons {
  font-weight: normal;
  font-style: normal;
  font-size: 72px;  /* Preferred icon size */
            `]
})
export class FlowerColorComponent {
    
    filterCount = 0;

    @Output() btnClick = new EventEmitter(); //this.em;
    @Output() btnClick1 = new EventEmitter(); //this.em;
    @Output() btnClick2 = new EventEmitter(); //this.em;
    
    //Flower color filter
    OnRedClick()
    {
        this.btnClick.emit({color: "Red"});
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