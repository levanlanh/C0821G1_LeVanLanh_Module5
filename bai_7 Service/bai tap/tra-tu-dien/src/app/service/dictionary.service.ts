import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [{
    word: 'name',
    mean: 'tên'
  }, {
    word: 'hello',
    mean: 'xin chào'
  }, {
    word: 'hi',
    mean: 'chào'
  }, {
    word: 'phone',
    mean: 'điện thoại'
  }];

  constructor() {
  }

  getAll() {
    return this.dictionaries;
  }
}
