import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  constructor(private http: Http, public _empService: EmpService) {}
  public data: any = {};
  public temp: any = {};

  ngOnInit() {
    this.temp.name = '';
    this.temp.designation = '';
    this.temp.department = '';
    this.temp.location = '';
    this.temp.reporting_manager = '';
  }
  showData() {
    console.log('Show Data Function Called');
    this._empService.showData().subscribe(data => {
      console.log(data.data);
      this.data = data.data;
    });
  }
  modalData() {
    this.temp.name = '';
    this.temp.designation = '';
    this.temp.department = '';
    this.temp.location = '';
    this.temp.reporting_manager = '';
  }
  addData() {
    this._empService.addData(this.temp).subscribe(data => {
      console.log(data.data);
      this.showData();
    });
  }

  editData(item) {
    this.temp = item;
    console.log(this.temp);
    this.showData();
  }

  updateData() {
    console.log(this.temp);
    this._empService.updateData(this.temp).subscribe(data => {
      console.log(data.data);
      this.data = data.data;
      this.showData();
    });
  }

  deleteRow(id) {
    this._empService.deleteData(id).subscribe(() => {
      this.showData();
    });
  }
}
