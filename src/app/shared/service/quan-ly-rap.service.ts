import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class QuanLyRapService {

  constructor(private http: HttpClient) { }

  layDanhSachRap(): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    return this.http.get(url).pipe(
      tap(
        (data: any) => {
          // Thành công
        },

        catchError(err => {
          return this.handleErr(err)
          // Thất bại
        })
      )
    )
  }

  // Lấy thông tin của các cụm rạp
  layThongTinCumRap(maHeThongRap: any): Observable<any> {
    const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    return this.http.get(url).pipe(
      tap(
        (data: any) => {
          // Thành công
        },

        catchError(err => {
          return this.handleErr(err)
          // Thất bại
        })
      )
    )
  }

  // Lấy thông tin hệ thống lịch chiếu rạp
  layThongTinHeThongLichChieuRap(maHeThongRap:any): Observable<any> {
    const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    return this.http.get(url).pipe(
      tap(
        (data: any) => {
          // Thành công
        },

        catchError(err => {
          return this.handleErr(err)
          // Thất bại
        })
      )
    )
  }

  handleErr(err) {
    return err;
  }
}
