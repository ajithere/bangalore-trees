import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filterFlowerColor'})
export class FilterFlowerColorPipe implements PipeTransform   {
    transform(values:any[], filterString: Object){
        if(!values || !filterString)
            return values;
        var str = JSON.parse(JSON.stringify(filterString));
        
        if(str.color == "Reset")
            return values;
        var actStr = JSON.parse(JSON.stringify(values[0]));    

        return values.filter(value => value.FlowerColor.toLowerCase().lastIndexOf(str.color.toLowerCase()) >= 0  );
    }
}