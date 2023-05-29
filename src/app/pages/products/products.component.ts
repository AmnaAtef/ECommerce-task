import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProductsList } from 'src/app/core/models/products';
import { FakeApiService } from 'src/app/core/services/fake-api.service';
import { ProductsList } from 'src/app/_fake/Dummy-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products_list!: IProductsList[];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;

  constructor(
    private fakeApiService:FakeApiService,
    private route: Router
  ){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.products_list= this.fakeApiService.getProducts();
    console.log(this.products_list)
  }
  ChangeRate(id:number,rate:number){
    this.fakeApiService.ChangeRate(id,rate);
  }
  countStar(star:number) {
      this.selectedValue = star;
      console.log('Value of star', star);
  }

  getProductDetails(id: number){
    this.route.navigate(['/product-details/'+id])
  }
  ngDoCheck() {
    this.products_list = ProductsList.products
  }
}
