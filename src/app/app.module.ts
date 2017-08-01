import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdChipsModule, 
        MdRadioGroup, MdRadioButton, MdIconModule} from '@angular/material';
import {FlowerColorComponent} from './flowercolor.component';
import {ToolbarComponent} from './toolbar.component';
import {TreeDetailsComponent} from './treedetails.component';
import {ITreeListService} from './fetch-treelist.service';
import {FilterFlowerColorPipe} from './flowercolor.filter';
import {FilterFlowerSizePipe} from './flowersize.filter';
import {FilterFlowerGroupPipe} from './flowergroup.filter';
import {environment} from '../environments/environment';
import 'hammerjs';
import 'hammer-timejs';


@NgModule({
  declarations: [
    AppComponent,ToolbarComponent,FlowerColorComponent,TreeDetailsComponent,
    FilterFlowerColorPipe, FilterFlowerSizePipe, FilterFlowerGroupPipe
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,MdButtonModule,MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdChipsModule, MdIconModule, HttpModule, JsonpModule
  ],
  providers: [{
      provide: 'ITreeListService',
      useClass: environment.treeService
    }],
  bootstrap: [AppComponent] 
})
export class AppModule { }
