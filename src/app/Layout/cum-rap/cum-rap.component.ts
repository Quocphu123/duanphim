import { Component, OnInit } from '@angular/core';
import { QuanLyRapService } from 'src/app/shared/service/quan-ly-rap.service';

@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
  danhSachRap: []
  constructor(private quanLyRapService: QuanLyRapService) { }

  ngOnInit() {
    this.getListCinema()
  }

  getListCinema() {
    this.quanLyRapService.layDanhSachRap().subscribe((data: any) => {
      this.danhSachRap = data;

    })
  }
}
