import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http: HttpClient) { }

  // Lấy danh sách phim
  layDanhSachphim(): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
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
