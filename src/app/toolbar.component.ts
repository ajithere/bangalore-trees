import {Component,Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'toolbar-default',
    template: `
        <mat-toolbar color="primary">
            
                Trees of Bangalore
<!--            <button class="app-icon-button2" (click)="OnClear()">
            <i class="material-icons app-toolbar-menu">clear_all</i>
            </button> -->
            <span class="app-toolbar-filler"></span>
            <button class="app-icon-button1" (click)="OnSearch()">
            <i class="material-icons app-toolbar-menu">search</i>
            </button>
        </mat-toolbar>
        `,
    styles: [`
                .app-toolbar-filler {
                    flex: 1 1 auto;
                }   
                .app-toolbar-menu {
                    padding: 0 10px 0 1px;
                    color: white;
                }
                .app-icon-button2, .app-icon-button1{
                    box-shadow: none;
                    user-select: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    filter: none;
                    font-weight: normal;
                    height: auto;
                    line-height: inherit;
                    margin: 0;
                    min-width: 0;
                    padding: 0;
                    text-align: left;
                    text-decoration: none;
                }
                .material-icons{
                    margin-top:15px;
                    margin-right:-15px;
                    margin-bottom:auto;
                }


           `]
})
export class ToolbarComponent {
    @Output() btnClick = new EventEmitter();

	OnSearch(){
	}
    OnClear(){
        this.btnClick.emit({color: "Reset",flwsize: "Reset",ClusterOrSingle:"Reset",flwsmell:"Reset"});
	}
}
