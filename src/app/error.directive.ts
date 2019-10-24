import { Directive, Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  @Input() appError : Boolean = false ;

  constructor(private _element: ElementRef  ) {}
    
    ngOnChanges()  {
        if (!this.appError){ 
          this._element.nativeElement.style.color = 'rgb(255, 123, 123)';
          }
        else {
          this._element.nativeElement.style.color = '#495057';

        }
    }


}