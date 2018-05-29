import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterStudentClass implements PipeTransform {
  transform(items: any[], searchClass: string): any[] {
    if(!items) return [];
    if(!searchClass) return items;

    searchClass = searchClass.toLowerCase();
        return items.filter( it => {
          return it.student_class.toLowerCase().includes(searchClass);
        });
   }
 }
