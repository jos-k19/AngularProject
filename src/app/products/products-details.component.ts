import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  pageTitle: string="Product details";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router
    // private productService: ProductService
    ) {
}


ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  // if (id) {
  //   this.getProduct(id);
  // }

  this.pageTitle += `:${id}`;

}

onBack(): void {
  this.router.navigate(['/products']);
}

}
