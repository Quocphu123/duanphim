import { Component, OnInit } from '@angular/core';
import { QuanLyRapService } from 'src/app/shared/service/quan-ly-rap.service';
import { QuanLyPhimService } from 'src/app/shared/service/quan-ly-phim.service';

@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
  danhSachRap: []
  maHeThong: any
  cumRap: []
  phimCumRap: any[] = []
  danhSachPhim: [] = []
  phim: any;
 



  constructor(private quanLyRapService: QuanLyRapService, private quanLyPhimService: QuanLyPhimService) { }
  ngOnInit() {
    this.getListCinema();
  
  }

  // Lấy danh sách cụm rạp
  getListCinema() {
    this.quanLyRapService.layDanhSachRap().subscribe((data: any) => {
      this.danhSachRap = data;
    })
  }

  // Lấy chi tiết rạp
  layChiTietRap(maHeThongRap) {
    this.maHeThong = maHeThongRap.maHeThongRap
    this.quanLyRapService.layThongTinCumRap(this.maHeThong).subscribe((data: any) => {
      this.cumRap = data;
      // console.log(this.cumRap);
    })
    this.quanLyRapService.layThongTinHeThongLichChieuRap(this.maHeThong).subscribe((data: any) => {
      this.phimCumRap = data
      console.log(data)

    })


  }

  // Lấy thông tin phim
  layThongTinPhim(maPhim) {
    this.quanLyPhimService.layThongTinPhim(maPhim).subscribe((data: any) => {

    })
  }

 



  layPhimCuaRap(value) {
    const chiTietRap = this.phimCumRap[0].lstCumRap.filter(item => item.maCumRap === value.maCumRap)
    this.danhSachPhim = chiTietRap[0].danhSachPhim
    this.quanLyPhimService.layDanhSachphim().subscribe((data: any) => {
      this.danhSachPhim = data
    })


  }


}
