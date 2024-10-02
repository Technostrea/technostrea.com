import {Injectable} from '@angular/core';
import * as expertises from "@assets/data/services.json";
import {Expertise} from "@app/core/models/expertise";

@Injectable({
  providedIn: 'root'
})
export class ExpertisesService {
  get expertises(): Expertise[] {
    return expertises.data as Expertise[];
  }
}
