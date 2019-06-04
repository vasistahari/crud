import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'project';
  public data: any = [];
  public add: any = [];
  public temp: any = [];
  public del: any = [];
  public id: any;
  public a1: any;
  public show = false;
  // public id1: any;
  // constructor() {}
  // showmethe() {
  //   console.log('fjghdklsfdhgkdfgsdfgsdgdfgsdfgsfdgsd');
  //   this._apiService.getcallsetup().subscribe(data => {
  //     console.log(data.data);
  //     this.data = data.data;
  //   });
  // }
  // updateData(temp) {
  //   console.log(this.temp);

  //   this._apiService.updateData(this.temp).subscribe(data => {
  //     console.log(data.data);
  //     this.data = data.data;
  //   });
  // }
  // addData(add) {
  //   console.log(this.add);

  //   this._apiService.addData(this.add).subscribe(data => {
  //     console.log(data.data);
  //     this.data = data.data;
  //   });
  // }
  // addArray(a, b, c, d, e) {
  //   this.add = [];
  //   this.add.push(a, b, c, d, e);
  //   console.log(this.add);
  //   this.showmethe();
  // }

  // edit(id) {
  //   this.temp = [];
  //   this.temp.push(id);
  //   console.log(this.temp);
  //   this.showmethe();
  // }

  // deleteData(a1) {
  //   this._apiService.deleteData(a1).subscribe(() => {
  //     this.showmethe();
  //   });
  // }
  showTabs() {
    this.show = true;
  }
}
