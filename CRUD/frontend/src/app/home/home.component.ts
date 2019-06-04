import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { on } from 'cluster';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public add = '';
  public temp: any = {};
  public view = false;
  // public del: any = [];
  // public id: any;

  constructor(private http: Http, public _apiService: ApiService) {}
  ngOnInit() {
    this.temp.name = '';
    this.temp.address = '';
    this.temp.phone = '';
    this.temp.email = '';
    this.temp.id = '';
  }
  showmethe() {
    console.log('Show Working');
    this._apiService.getcallsetup().subscribe(data => {
      console.log(data.data);
      this.data = data.data;
    });
  }
  updateData() {
    console.log(this.temp);
    this._apiService.updateData(this.temp).subscribe(data => {
      console.log(data.data);
      this.data = data.data;
      this.showmethe();
    });
  }
  modalData() {
    this.temp.name = '';
    this.temp.address = '';
    this.temp.phone = '';
    this.temp.email = '';
    this.temp.id = '';
    console.log(this.temp);
  }
  addData() {
    this._apiService.addData(this.temp).subscribe(data => {
      console.log(data.data);
      this.showmethe();
    });
  }

  editData(item) {
    this.temp = item;
    console.log(this.temp);
    this.showmethe();
  }

  deleteRow(id) {
    this._apiService.deleteData(id).subscribe(() => {
      this.showmethe();
    });
  }
  nextPage() {
    console.log('hit');
    this.view = true;
  }
}
