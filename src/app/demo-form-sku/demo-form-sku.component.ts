import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: []
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
