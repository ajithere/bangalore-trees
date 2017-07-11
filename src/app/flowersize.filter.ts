import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filterFlowerSize'})
export class FilterFlowerSizePipe implements PipeTransform   {
    transform(values:any[], filterString: Object){
        if(!values || !filterString)
            return values;
        var str = JSON.parse(JSON.stringify(filterString));
        
        if(str.flwsize == "Reset")
            return values;
        var actStr = JSON.parse(JSON.stringify(values[0]));    
        
        return values.filter(value => value.FlowerSize.toLowerCase().lastIndexOf(str.flwsize.toLowerCase()) >= 0  );
    }
}