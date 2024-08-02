import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl:'./child.component.html',
  styleUrls: ['./child.component.css' ]
  
})
export class ChildComponent implements OnInit {

  @Input() 
  uname:string='';

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  notify:EventEmitter<string>=new EventEmitter<string>();

  
  ch="I am Iron man"
  sendData(){
    this.notify.emit(this.ch)
  }

}
