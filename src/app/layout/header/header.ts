import { Component, EventEmitter, Output } from '@angular/core';

@Component({
 selector: 'app-header',
 imports: [],
 templateUrl: './header.html',
})
export class Header {
 @Output() toggleSideBar = new EventEmitter<string>();


}
