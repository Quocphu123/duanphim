import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { QuanLyNguoiDungService } from 'src/app/shared/service/quan-ly-nguoi-dung.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {
  @ViewChild("registerForm", { static: false }) registerForm;

  constructor(private quanLyNguoiDungService: QuanLyNguoiDungService) { }



  ngOnInit() {
  }


  dangKy(value) {
    console.log(value);

    const user = {
      taiKhoan: value.userName,
      matKhau: value.matKhau,
      email: value.email,
      soDt: value.soDT,
      maLoaiNguoiDung: "KhachHang",
      hoTen: ""
    }

    this.quanLyNguoiDungService.registerUser(user).subscribe((data: any) => {
      console.log(data);
      if (data === "Tài khoản đã tồn tại") {
        alert(data)
      } else {
        alert("Đăng ký thành công")
      }
    })
  }


}
