import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ski-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  @Input() track;
  @Output() newSortingInc: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sortChanged(value) {
    this.newSortingInc.emit(value)
  }
}
