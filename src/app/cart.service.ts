import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private httpClient: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = []
    return this.items;
  }

  getItems () {
    return this.items;
  }

  getShippingPrices () {
    return this.httpClient.get('/assets/shipping.json');
  }

}