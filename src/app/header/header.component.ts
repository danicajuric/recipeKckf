import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){ //argument koji se prosljeđuje je string, tj 'recipe' i 'shopping-list'
        this.featureSelected.emit(feature);
    }
}