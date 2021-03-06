import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import Shop from 'src/app/models/shop.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShopsService } from 'src/app/services/shops.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayStyle = "none";

  public products : Product[] = [];
  public shops : Shop[] = [];

  public selectedShop : Shop = {};
  public newProductName : string = "";
  public newProductPrice : number = 0;

  public oldProductName : string = "";
  public selectedProduct : Product = {
    name: "n/a",
    shopId: 0,
    price: 0
  };

  constructor(
    private _productsServics : ProductsService, 
    private _shopsService : ShopsService
    ) { }

  ngOnInit(): void {
    this.getAllShops();
    this.getAllProducts();
  }

  private getAllProducts() : void {
    this._productsServics.getAllProducts().subscribe((products) =>{
      this.products = products;
    });
  }

  private getAllShops() : void {
    this._shopsService.getAllShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

  public clearInputs() : void {
    this.newProductName = "";
    this.newProductPrice = 0;
    this.selectedShop = {};
  }

  public submitNewProduct() : void {
    let newProduct : Product = {
      name: this.newProductName,
      price: this.newProductPrice,
      shopId: this.selectedShop.id!
    };
    
    this._productsServics.addNew(newProduct).subscribe((product) => {
      this.products.push(product);
      this.clearInputs();
    });
  }

  public submitUpdate() : void {
    this.selectedProduct.shopId = this.selectedShop.id!;
    this.closePopup();
    this._productsServics.update(this.selectedProduct).subscribe(() => {
      window.location.reload();
    });
  }

  public delete(id : number) : void {
    this._productsServics.delete(id).subscribe();
    this.products = this.products.filter(product => product.id != id);
  }

  openPopup(product : Product) {
    this.selectedProduct = product;
    this.oldProductName = this.selectedProduct.name;
    this.selectedShop = this.shops.filter(shop => shop.id === product.shopId)[0];
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
    this.clearInputs();
  }
}
