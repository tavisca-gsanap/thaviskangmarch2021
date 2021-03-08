import { Directive, Input, HostListener, ElementRef, Renderer2 } from "@angular/core";
import { Logic } from "src/app/models/app.productinfo.logic";

// since the custo attribute ditrective is used as
// proeprty binding, the selector uses the PropertyBInding syntax
// e.g. [setColor]

@Directive({
  selector: '[validate]'
})
export class InputValidatorDirective {
  // constructor injected object
  // these references will be bresolved using
  // BrowserModule
  constructor(private element:ElementRef, private renderer: Renderer2){
    this.value = "";
  }

  // the input decorated property is mapped with selector
  // when value for this property is acepted the directive
  // will use the value for execution
  @Input('validate')value:string;

  // the business logic for the  directive
  private applyColor(color:string):void {
    // rendering the element by changing the style by using the
    // backgroundColor style property
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

  // host events using JavaScript Standard events
  // these events when raised by HTML element then the directive
  // will start executing the logic@HostListener('mouseenter')
  @HostListener('blur')
  onchange():void{
    console.log("In directive Validate ");
    console.log(this.value);
      let products = new Logic().getProducts();
      console.log(products);
      if(products.find(prd => prd.ProductId == this.value)){
        this.applyColor('magenta');
      }
      else{
        this.applyColor('grey');
      }
    }

  }
