import {Component} from '@angular/core'

@Component({
    selector: 'toolbar-default',
    template: `
        <md-toolbar color="primary">
            <i class="material-icons app-toolbar-menu">face</i>
                Trees of Bangalore
            <span class="app-toolbar-filler"></span>
            <button class="app-icon-button1" (click)="OnSearch()">
            <i class="material-icons app-toolbar-menu">search</i>
            </button>
        </md-toolbar>
        `,
    styles: [`
                .app-toolbar-filler {
                    flex: 1 1 auto;
                }   
                .app-toolbar-menu {
                    padding: 0 10px 0 1px;
                    color: white;
                }
                .app-icon-button, .app-icon-button1{
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


           `]
})
export class ToolbarComponent {
	OnSearch(){
	}
    
}
