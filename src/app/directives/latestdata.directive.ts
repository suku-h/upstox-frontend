import {
  Directive,
  ElementRef,
  Input,
  Renderer
  } from '@angular/core'

@Directive({
  selector: '[appLatestdata]'
})
export class LatestdataDirective {

  @Input()
  set appLatestdata(condition: boolean) {
    if (condition) {
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'skyblue')
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white')

    }
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) { }

}
