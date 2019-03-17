import { Track } from './../model/track';
import { SkiService } from './../service/ski.service';
import { SkiResort } from './../model/ski-resort';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../model/weather';
import { SkiPassPrice } from '../model/ski-pass-price';

@Component({
  selector: 'ski-ski-resort',
  templateUrl: './ski-resort.component.html',
  styleUrls: ['./ski-resort.component.css']
})
export class SkiResortComponent implements OnInit {
  id;
  currentMountain: SkiResort;
  currentTrack: Track[];
  currentWeather: Weather[];
  currentSkiPrice: SkiPassPrice[];
  params = {
    "sort" : "",
    "sortDirection" : "desc"
  }
  constructor(protected active: ActivatedRoute,  protected skiService: SkiService) { }

  ngOnInit() {
    this.active.params.subscribe(res => { /* prvo uzimam id iz urla */
      this.id = res.id;
      this.getMountain(); /* na osnovu kojeg posle dobavljam konkretnu planinu  */
      this.getWeather();  /* i sve vezano za nju */
      this.getSkiiPassPrice();
    })
  }


  changeSort(value) {
    this.params.sort = value; /* sprtiranje preko ngmodel-a */
    this.getMountain();
  }

  getMountain() {
    this.skiService.getMountain(this.id).subscribe(res => {
      this.currentMountain = res;
      this.getTracks();
    });
  }

  getWeather() {
    this.skiService.getWeather(this.id).subscribe(res => this.currentWeather = res);
  }

  getTracks() {
    this.skiService.getTracks(this.id, this.params).subscribe(res => this.currentTrack = res);
  }

  getSkiiPassPrice() {
    this.skiService.getSkiPassPrice(this.id).subscribe(res => this.currentSkiPrice = res);
  }

  update(reservation) {
    reservation.mountain_id = this.id;
    this.skiService.reserve(reservation).subscribe(res => {
      if(res) {
        alert("success")
      } else {
        alert("error")
      }
    });
    
  }
  
}

    
  


