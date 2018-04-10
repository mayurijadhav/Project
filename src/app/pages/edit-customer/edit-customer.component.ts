import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

	user : any = {}

  constructor() { }

  ngOnInit() {
  }
  
  getModel(yname){
	  console.log(yname);
  }

  
  onSubmit(userModel, userForm){
	  console.log(userModel, userForm);
  }
}
