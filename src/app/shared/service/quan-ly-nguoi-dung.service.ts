import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


// Phương thức post , put là phải có application/json , HttpHeaders
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuanLyNguoiDungService {

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung"
    // Giao thức post phải truyền vào 3 tham số
    return this.http.post(url, user, httpOptions).pipe(
      tap(
        () => {
          // Thành công
        },
        catchError(err => {
          // Thất bại
          return this.handleErr(err)
        })
      )
    )
  }


  handleErr(err) {
    return err;
  }
}
