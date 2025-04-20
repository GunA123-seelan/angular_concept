import { AfterViewChecked, AfterViewInit, Component, DoCheck, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges,DoCheck, AfterViewInit, AfterViewChecked,OnDestroy {
  @Input('name') obj:any = undefined;
  @Input('name1') obj1:any = undefined;

  res:any;

  ngOnChanges({obj1}: SimpleChanges): void {
    console.log("onchanges call....");
    // console.log(obj1);
    this.res=this.obj;
  }

  ngOnInit(): void {
    // this.res=this.name;
    console.log("oninit called..");
  }

  ngDoCheck(): void {
    console.log("DO check Call...");
  }

  ngAfterViewInit(): void {
    console.log("after view init called...");
  }

  ngAfterViewChecked(): void {
    console.log("after view checked ...called...");
  }

  ngAfterContentInit(){
    console.log("content init called");
  }

  ngAfterContentChecked(){
    console.log("content checked called");
  }

  ngOnDestroy(): void {
    console.log("destroy called");
  }
}
