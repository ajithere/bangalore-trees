import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filterFlowerSmell'})
export class FilterFlowerSmellPipe implements PipeTransform   {
    transform(values:any[], filterString: Object){
        if(!values || !filterString)
            return values;
        var str = JSON.parse(JSON.stringify(filterString));
        
        if(str.flwsmell == "Reset")
            return values;
        var actStr = JSON.parse(JSON.stringify(values[0]));    
        
        return values.filter(value => value.FlowerSmell.toLowerCase().lastIndexOf(str.flwsmell.toLowerCase()) >= 0  );
    }
}