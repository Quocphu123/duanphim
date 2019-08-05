import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/shared/service/quan-ly-phim.service';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {

  // Tạo 1 mảng mới để hứng giá trị lấy từ api 
  danhSachPhim = []
 

  constructor(private quanLyPhimservice: QuanLyPhimService) { }

  ngOnInit() {
    this.getListMovie();
  }

  // Slick
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
  slideConfig1 = { "slidesToShow": 4, "slidesToScroll": 4 };


  // Phương thức lấy danh sach phim
  getListMovie() {
    this.quanLyPhimservice.layDanhSachphim().subscribe((data: any) => {
      this.danhSachPhim = data
    
    })
  }

}
