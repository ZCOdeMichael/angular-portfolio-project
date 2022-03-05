import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private elemRef: ElementRef){
    
  }

  title = 'angular-portfolio-project';
  
  navbarFixed: boolean = false;
  atTopPage: boolean = true;
  currPos = window.pageYOffset;
  
  @HostListener('window:scroll', ['$event']) onScroll() {
    
    if(document.documentElement.scrollTop > this.currPos){
      this.navbarFixed = false;
    }else{
      this.navbarFixed = true;
    }
    this.currPos = document.documentElement.scrollTop;
    
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max){
      this.atTopPage = true;  
    }else{
      this.atTopPage = false;
    }
    console.log(this.atTopPage);
    
  }
}
