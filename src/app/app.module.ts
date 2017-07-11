import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCard, MdRadioGroup, MdRadioButton} from '@angular/material';
import {FlowerColorComponent} from './flowercolor.component';
import {ToolbarComponent} from './toolbar.component';
import {TreeDetailsComponent} from './treedetails.component';
import {TreeListService} from './fetch-treelist.service';
import {FilterFlowerColorPipe} from './flowercolor.filter'
import {FilterFlowerSizePipe} from './flowersize.filter'
import {FilterFlowerGroupPipe} from './flowergroup.filter'

@NgModule({
  declarations: [
    AppComponent,MdCard,ToolbarComponent,FlowerColorComponent,TreeDetailsComponent,
    FilterFlowerColorPipe, FilterFlowerSizePipe, FilterFlowerGroupPipe
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,MdButtonModule,MdCheckboxModule,
    MdToolbarModule, HttpModule, JsonpModule
  ],
  providers: [TreeListService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
