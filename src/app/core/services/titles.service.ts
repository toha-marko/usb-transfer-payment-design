import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  private titles = {
    transfer: 'УралСиб | Перевод средств с карты на карту',
    history: 'УралСиб | История переводов',
    default: 'Всем привет! Не нашлось заголовка!'
  };

  constructor() { }

  getTitle(page: string): string {
    return this.titles[page] ?? this.titles.default;
  }
}
