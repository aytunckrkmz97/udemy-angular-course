import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user:any={
    name:"Aytunç",
    surname:"Korkmaz",
    job:"Software Developer",
    favoritePlace:"Istanbul",
    favoritePlaceImage:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    isEdittable : false,
  };

  type = "text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    alert("Clicked");    
  }

  inputSubmit(value: any){
    alert(value.target.value+"geldi");
    
  }
  
}
