import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.show') isShown = false;

    @HostListener('click') toggleShow(){
        this.isShown = !this.isShown;
    }
}