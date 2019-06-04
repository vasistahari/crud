import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './home/api.service';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EmpComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
