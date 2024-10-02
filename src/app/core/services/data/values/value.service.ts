import {Injectable} from '@angular/core';
import {Value} from "@app/core/models/value";
import * as values from "@assets/data/values.json";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  get values(): Value[] {
    return values.data as Value[];
  }
}
