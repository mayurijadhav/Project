import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
	
	users : any =[{fname : "Mayuri", lname : "Jadhav", add : "Chinchwad", em : "mayuri.jadhav@gmail.com", mob : "9922334455", _id : 1},{fname : "Madhuri", lname : "Jadhav", add : "Chinchwad", em : "madhuri.lg@gmail.com", mob : "9090203090", _id : 2}]

  constructor() { }

  ngOnInit() {
  }

}
