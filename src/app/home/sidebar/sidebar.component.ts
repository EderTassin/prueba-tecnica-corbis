import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapse: boolean = true;
  


  clickCollapseSidebar(){
    this.collapse = !this.collapse;
  }
}
