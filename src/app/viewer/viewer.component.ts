import { Component, OnInit } from '@angular/core';
import { Earth, EarthService } from '../services/earth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  earth!: Earth;
  routeState: any;
  data: any = {};

  constructor(private earthService: EarthService,  private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.data = this.routeState.data ? this.routeState.data : '';
      }
    }
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.earthService.getData(this.data).subscribe((data: Earth) => {
      this.earth = data;
    });
  }

}
