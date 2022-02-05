import { Component, OnInit } from '@angular/core';
import Shop from 'src/app/models/shop.model';
import { ShopsService } from 'src/app/services/shops.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit {
  
  public name: string = "Labulas";
  public shop: Shop = {};

  constructor(private shopService : ShopsService, private router: Router) {}

  ngOnInit(): void {
  }

  submitShop(name:string){
    this.shop.name = name;
    this.shopService.addNewShop(this.shop).subscribe();
    this.router.navigate(['/shops']);
  }
}