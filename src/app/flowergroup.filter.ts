import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filterFlowerGroup'})
export class FilterFlowerGroupPipe implements PipeTransform   {
    transform(values:any[], filterString: Object){
        if(!values || !filterString)
            return values;
        var str = JSON.parse(JSON.stringify(filterString));
        
        if(str.ClusterOrSingle == "Reset")
            return values;
        var actStr = JSON.parse(JSON.stringify(values[0]));    

        return values.filter(value => value.ClusterOrSingle.toLowerCase() == str.ClusterOrSingle.toLowerCase() );
    }
}