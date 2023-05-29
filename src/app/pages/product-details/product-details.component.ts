import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  count:number = 1;
  cartItemCount: number = 0;
  description_list:string[] =[
    "Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting.",
    "Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat.",
    "Mengandung serat untuk memperlancar pencernaan dan meningkatkan kesehatan usus.",
    "Diperkaya dengan kalsium, fosfor dan vitamin D untuk tulang yang sehat."
  ];
  ingrendient_list:string[] = [
    "Nutrisi",
    "Vitamin E",
    "Protein"
  ]
  sizes_list:string[]= [
    "1.5 kg", "1 kg", "500 gr", "250 gr"
  ]

  constructor(
    private snackBar: MatSnackBar,
  ){}

  ngOnInit() {
    const storedCount = localStorage.getItem('cartItemCount');
    if (storedCount) {
      this.cartItemCount = parseInt(storedCount, 10);
    }
  }

  increment(){
    this.count +=1;
  }

  decrement(){
    if(this.count ==1){
      this.count = 1
    }else
    this.count -=1
  }
  addToCart() {
    this.cartItemCount++;
    localStorage.setItem("cartItemCount",this.cartItemCount.toString())
    this.snackBar.open('Successfully added to your cart.', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }

}
