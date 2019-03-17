import { SkiPassPrice } from './../model/ski-pass-price';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkiResortName } from 'src/app/ski-resorts/model/ski-resort-name';
import { SkiResort } from '../model/ski-resort';
import { Track } from '../model/track';
import { Weather } from '../model/weather';

const baseURl = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class SkiService {

  constructor(protected http: HttpClient) { }

  getMountains(): Observable<SkiResortName[]> {
    return this.http.get<Array<SkiResortName>>(baseURl).pipe(map( res => {
      let retVal = new Array<SkiResortName>();
      res.forEach(elem => retVal.push(new SkiResortName(elem))); /* kada sa servera dobijamo niz kao odgovor */ 
      return retVal;                                             /* koristi se forEach kako bi modelovali svaki element */
    }));
  }

  getMountain(id) {
    return this.http.get(baseURl + "/" + id).pipe(map( res => {
      return new SkiResort(res);
    }))
  }

  getWeather(id): Observable<Weather[]> {
    return this.http.get<Array<Weather>>(baseURl + "/" + id + "/weather").pipe(map( res => {
      let retVal = new Array<Weather>();
      res.forEach(elem => retVal.push(new Weather(elem)));       /* kada sa servera dobijamo niz kao odgovor */    
      return retVal;                                             /* koristi se forEach kako bi modelovali svaki element */
    }));
  }


  getTracks(id, newParams) {
    let queryParams = {};
    if(newParams) {
      queryParams = { params: new HttpParams()
        .set('sort', newParams.sort || "")
        .set('sortDirection', newParams.sortDirection || "")
      }
    }
    return this.http.get<Array<Track>>(baseURl + "/" + id + "/tracks", queryParams).pipe(map( res => {
      let retVal = new Array<Track>();
      res.forEach(elem => retVal.push(new Track(elem)));         /* kada sa servera dobijamo niz kao odgovor */ 
      return retVal;                                             /* koristi se forEach kako bi modelovali svaki element */   
    }));
  }





  getSkiPassPrice(id) {
    return this.http.get<Array<SkiPassPrice>>(baseURl + "/" + id + "/skipass").pipe(map( res => {
      let retVal = new Array<SkiPassPrice>();
      res.forEach(elem => retVal.push(new SkiPassPrice(elem)));   /* kada sa servera dobijamo niz kao odgovor */ 
      return retVal;                                              /* koristi se forEach kako bi modelovali svaki element */
    }));
  }

  reserve(reservation) {
    return this.http.post(baseURl + "/" + reservation.mountain_id + "/skipass", reservation).pipe(map(res => {
      return res;
    }))
    
  }

}


