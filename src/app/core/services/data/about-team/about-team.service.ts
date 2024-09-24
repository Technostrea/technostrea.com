import {Injectable} from '@angular/core';
import * as teams from "@assets/data/about-team.json";
import {User} from "@app/core/models/user";

@Injectable({
  providedIn: 'root'
})
export class AboutTeamService {

  get teams(): User[] {
    return teams.data as User[];
  }
}
