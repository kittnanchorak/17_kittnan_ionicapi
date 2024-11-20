import { Component } from '@angular/core';
import { DataapiService } from '../services/dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  txtstu: string = '';
  txtname: string = '';
  txtnname: string = '';
  txtage: number | null = null;
  txtaddress: string = '';
  txtphone: string = '';
  txtstatus: string = '';

  constructor(private dataapi: DataapiService,
  private router: Router) {}


  addmember() {
    const data = {
      id_stu: this.txtstu,
      name: this.txtname,
      nname: this.txtnname,
      age: this.txtage,
      address: this.txtaddress,
      phone: this.txtphone,
      status: this.txtstatus
    };

    this.dataapi.addData(data).subscribe({
      next: (res: any) => {
        console.log("ข้อมูลถูกเพิ่ม", res);
        this.clearform(); // เรียก clearform เมื่อสำเร็จ
      },
      error: (error: any) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม", error);
      }
    });
  }

  clearform() {
    this.txtstu = '';
    this.txtname = '';
    this.txtnname = '';
    this.txtage = null;
    this.txtaddress = '';
    this.txtphone = '';
    this.txtstatus = '';
  }

  show() {
    this.router.navigate(['/show']);
  }
}
