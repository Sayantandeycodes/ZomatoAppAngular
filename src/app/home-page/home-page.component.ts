import { Component, OnInit } from '@angular/core';
import {GridService} from '../services/grids.services'
import {GridDataType} from '../services/type'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gridData : GridDataType[] = [];
  loading: boolean = true;
  constructor(private gridService : GridService) { }

  ngOnInit(): void {
    this.gridService.getGridData()
      .subscribe((data : GridDataType[])=> {
        this.loading = false
        this.gridData = data
      });
  }

}
