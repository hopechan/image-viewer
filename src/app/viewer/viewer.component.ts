import { Component, OnInit } from '@angular/core';
import { Earth, EarthService } from '../services/earth.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  earth!: Earth;

  constructor(private earthService: EarthService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.earthService.getData({lon:"-95.33", lat: "29.78", date: "2018-01-01", dim: "0.10"}).subscribe((data: Earth) => {
      this.earth = data;
    });
  }

}
