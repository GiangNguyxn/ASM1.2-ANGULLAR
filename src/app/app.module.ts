import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminProductsAddComponent } from './pages/admin/admin-products-add/admin-products-add.component';
import { AdminProductsUpdateComponent } from './pages/admin/admin-products-update/admin-products-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminProductsComponent,
    AdminProductsAddComponent,
    AdminProductsUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
