import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatChipsModule, MatRadioModule, 
        MatRadioGroup, MatRadioButton, MatIconModule, MatProgressBarModule, MatSnackBarModule, MatButtonToggleModule} from '@angular/material';
       
import {FlowerPropertyComponent} from './flower-property.component';
import {ToastComponent} from './flower-property.component'
import {ToolbarComponent} from './toolbar.component';
import {TreeDetailsComponent} from './treedetails.component';
import {ITreeListService} from './fetch-treelist.service';
import {FilterFlowerColorPipe} from './flowercolor.filter';
import {FilterFlowerSizePipe} from './flowersize.filter';
import {FilterFlowerGroupPipe} from './flowergroup.filter';
import {FilterFlowerSmellPipe} from './flowersmell.filter';
import { ServiceWorkerModule } from '@angular/service-worker';  
import {environment} from '../environments/environment';
import 'hammerjs';
import 'hammer-timejs';


@NgModule({
  declarations: [
    AppComponent,ToolbarComponent,FlowerPropertyComponent,TreeDetailsComponent,ToastComponent,
    FilterFlowerColorPipe, FilterFlowerSizePipe, FilterFlowerGroupPipe, FilterFlowerSmellPipe
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, 
    MatSnackBarModule,MatButtonToggleModule, MatRadioModule,  
    HttpModule, JsonpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [{
      provide: 'ITreeListService',
      useClass: environment.treeService
    }],
  entryComponents: [ToastComponent],
  bootstrap: [AppComponent] 
})
export class AppModule { }
