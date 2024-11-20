import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  private apiUrl = 'http://localhost/class2-4/api/insert.php'; // เปลี่ยน URL ให้ตรงกับ API ของคุณ

  constructor(private http: HttpClient) {}

  // ฟังก์ชันเพิ่มข้อมูล
  addData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addMember`, data);
  }
}
