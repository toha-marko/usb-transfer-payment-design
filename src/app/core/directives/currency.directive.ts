import { Directive, HostListener, ElementRef, AfterContentInit } from '@angular/core';

@Directive({ selector: '[appCurrency]' })
export class CurrencyDirective implements AfterContentInit {
  @HostListener('focus')
  removeCurrencty() {
    (this.elementHost.nativeElement as HTMLInputElement).value = (this.elementHost.nativeElement as HTMLInputElement).value.split(',')[0];
  }
  @HostListener('blur')
  setCurrencty() {
    const value = (this.elementHost.nativeElement as HTMLInputElement).value.trim().replace(/ /g, '');
    const out = value && value.match(/^\d+$/) ? value + ', ₽' : '';
    (this.elementHost.nativeElement as HTMLInputElement).value = out;
  }
  constructor(private elementHost: ElementRef) { }

  ngAfterContentInit(): void {
    if ((this.elementHost.nativeElement as HTMLInputElement).value) {
      this.removeCurrencty();
      this.setCurrencty();
    }
  }
}
