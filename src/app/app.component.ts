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

  onFlowerColorFilter($event)
  {
      this.flowerColorSelected = $event;
           
  }
  onFlowerSizeFilter($event)
  {
      this.flowerSizeSelected = $event;
      
  }
  onFlowerGroupFilter($event)
  {
      this.flowerGroupSelected = $event;
  }
  
}
