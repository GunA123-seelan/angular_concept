import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angv1';
  name:any='gunaseelan';
  show:boolean=true;
  
  ngOnInit(): void {
    setTimeout(() => {
      // this.obj.name='sweety.....';
      this.obj={...this.obj,name:'sweety........'}
    }, 2000);

    setTimeout(()=>{
      this.show=false;
    },5000)
  }

  obj={
    name:'guna',
    age:'30',
  };

}
