import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopsListComponent } from './components/ShopsList/shops-list/shops-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './components/Shop/shop/shop.component';
import { ProductsListComponent } from './components/products-components/products-list/products-list.component';
import { StaticModalComponent } from './modals/static-modal/static-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    NavbarComponent,
    ContentComponent,
    AddShopComponent,
    ShopComponent,
    ProductsListComponent,
    StaticModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
