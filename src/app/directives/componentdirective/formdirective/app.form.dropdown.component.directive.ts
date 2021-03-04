import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './app.form.dropdown.component.view.html'
})
export class DropDownComponent{
  values:Array<string>;
  form : any;
  property:string;
  constructor() {
    this.values = new Array<string>();
    this.property = "";
  }
  @Input()
  set formGroup(value:FormGroup) {
    this.form = value;
  }
  get formGroup():FormGroup {
    return this.form;
  }
  @Input()
  set propertyName(value:string) {
    this.property = value;
  }
  get propertyName():string {
    return this.property;
  }

  // the @Input decorated property will be used by the patent for property binding
  // e.g.[DataSource]
  @Input()
  set DataSource(value:Array<any>) {
    this.values = value;
  }
  get DataSource():Array<any> {
    return this.values;
  }
}
