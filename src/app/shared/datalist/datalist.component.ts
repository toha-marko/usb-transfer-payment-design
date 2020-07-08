import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatalistComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatalistComponent implements OnInit, ControlValueAccessor {
  @Input() type: string;
  list: number[] = [];
  _value: string;

  get value(): string {
    return this._value;
  }
  set value(value: string) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(value);
    }
    this.onTouched();
  }

  constructor(private cdref: ChangeDetectorRef) {
  }

  onChange: (_: any) => void;
  onTouched: () => void;

  ngOnInit(): void {
    const start = this.type === 'month' ? 1 : 2019;
    for (let i = 0; i < 12; i++) {
      this.list.push(i + start);
    }
  }

  writeValue(obj: string): void {
    this._value = obj;
    this.cdref.detectChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
