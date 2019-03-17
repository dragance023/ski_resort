import { SkiResortName } from 'src/app/ski-resorts/model/ski-resort-name';
import { Component, OnInit } from '@angular/core';
import { SkiService } from 'src/app/ski-resorts/service/ski.service';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mountains: SkiResortName[];
  constructor(protected skiService: SkiService) { }

  ngOnInit() {
    this.getMountains();
  }

  getMountains() {
    this.skiService.getMountains().subscribe(res => this.mountains = res);
  }


}


