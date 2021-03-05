import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInfo } from 'src/app/models/app.productinfo.model';

@Component({
  selector: 'app-datatable-component',
  templateUrl: './app.datatable.component.view.html'
})
export class DataTableComponent implements OnInit {
  private _DataSource:Array<any>;
  private _CanDelete:boolean;
  columnHeaders:Array<string>;
  reverse:boolean;
  color:string;

  // EventEmitter<any>, used to emit an event from component
  // <T> is a generic parameter that represent 'event arguments'
  // @Output decorator on EventEmitter, will be used to subscribe
  // the event by parent using event binding
  // (selectRow) and the event data emitted will be
  // listened by parent using $event object
  @Output()
  selectRow:EventEmitter<any>;
  @Output()
  deleteRow:EventEmitter<any>;
  @Output()
  reorder:EventEmitter<boolean>;
  constructor() {
    this._DataSource = new Array<any>();
    this._CanDelete = false;
    this.reverse = false;
    this.columnHeaders = new Array<string>();
    this.selectRow = new EventEmitter<any>();
    this.deleteRow = new EventEmitter<any>();
    this.reorder = new EventEmitter<boolean>();
    this.color='';
  }

  ngOnInit(): void {
      this.columnHeaders = Object.keys(this._DataSource[0]);
  }
  // the @Input decorated property will be used by the patent for property binding
  // e.g.[DataSource]
  @Input()
  set DataSource(value:Array<any>) {
    this._DataSource = value;
  }
  get DataSource():Array<any> {
    return this._DataSource;
  }

  @Input()
  set CanDelete(value:boolean) {
    this._CanDelete = value;
  }
  get CanDelete():boolean {
    return this._CanDelete;
  }
  // a method that will emit event
  onSelectRow(row:any):void {
    this.selectRow.emit(row);
  }

  ondelete(row:ProductInfo):void{
    this.deleteRow.emit(row.ProductRowId);
  }
  onreorder():void{
    console.log("directive");
    console.log(this.reverse);
    this.reorder.emit(this.reverse);
  }
}
