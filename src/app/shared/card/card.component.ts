import { Component, OnInit, ChangeDetectionStrategy, HostListener, ElementRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, AfterContentChecked {

  @HostListener('keyup')
  onKeyUp() {
    this.onChange();
  }

  constructor(private elementHost: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.onChange();
  }

  onChange() {
    let value = this.elementHost.nativeElement.children[0].value.trim().replace(/([^0-9]*)/g, '');
    const spaces = value.length / 4;
    for (let i = 0; i < spaces; i++) {
      value = value.slice(0, i * 4 + i) + ' ' + value.slice(i * 4 + i);
    }
    this.elementHost.nativeElement.children[0].value = value;
  }
}
