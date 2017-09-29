import { Component, Inject } from '@angular/core';
import {TreeData} from './treeData';
import {ITreeListService} from './fetch-treelist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeDataList: TreeData[];
  
  constructor(@Inject('ITreeListService') private treeListService: ITreeListService){
       treeListService.getTreeData()
                    .subscribe(treeDataList => this.treeDataList = treeDataList,
                                            err => console.log(err)); 
  }

  flowerColorSelected;
  flowerSizeSelected;
  flowerGroupSelected;
  flowerSmellSelected;
  toggleFlag;
  
  toggleState(){
        this.toggleFlag = (this.toggleFlag === 'active' ? 'inactive' : 'active');
  }

  onFlowerColorFilter($event)
  {
        this.flowerColorSelected = $event;
        this.toggleState();
        setTimeout(() => this.toggleState(), 200);
           
  }
  onFlowerSizeFilter($event)
  {
        this.flowerSizeSelected = $event;
        this.toggleState();
        setTimeout(() => this.toggleState(), 200);      
      
  }
  onFlowerGroupFilter($event)
  {
        this.flowerGroupSelected = $event;
        this.toggleState();
        setTimeout(() => this.toggleState(), 200);        
  }
  onFlowerSmellFilter($event)
  {
        this.flowerSmellSelected = $event;
        this.toggleState();
        setTimeout(() => this.toggleState(), 200);      
  }
}
