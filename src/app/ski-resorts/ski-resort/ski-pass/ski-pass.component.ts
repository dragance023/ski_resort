import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkiPassPrice } from '../../model/ski-pass-price';
import { Reservation } from '../../model/reservation';

@Component({
  selector: 'ski-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {

  @Input() skiPrice: SkiPassPrice[];
  @Output() reserveEmitter: EventEmitter<Reservation> = new EventEmitter();
  reservation: Reservation = new Reservation;

  constructor() { }

  ngOnInit() {
  }

  calculatePrice() {
    let days = this.reservation.calculateDateDifference();
    if(days < 1 || days > 7) {
      alert("Out of range");
      return false;
    } else {
      for(let i in this.skiPrice) {
        if(this.skiPrice[i].duration == days) {
          this.reservation.price = this.skiPrice[i].price
        }
      }
    }

  }

  reserve() {
    this.calculatePrice();
    this.reserveEmitter.emit(this.reservation);
    console.log("asd")
  }

}
 