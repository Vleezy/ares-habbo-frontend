import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {map} from "rxjs/operators";
import {FriendPagination} from "../models/friend/friend";
import {User} from "../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  friends(page: number = 1, results: number = 9): Observable<FriendPagination> {
    return this.apiService.get(`friends/list/${page}/${results}`).pipe(
      map(resp => {
        if (resp.data.friends.length < 9) {
          for (let i = resp.data.friends.length; i < 9; i++) {
            resp.data.friends.push(this.mannequin());
          }
        }

        return resp.data;
      })
    );
  }

  mannequin(): User {
    const mannequin = new User();

    mannequin.id = 0;
    mannequin.username = 'No Friend';
    mannequin.motto = `No friend found`;
    mannequin.look = 'habbo';
    mannequin.online = 3;

    return mannequin;
  }
}