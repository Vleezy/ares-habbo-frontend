import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FriendPagination} from '../model/friend';
import {FriendService} from '../../_layout/service/friend.service';
import {catchError} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DashboardFriendResolver implements Resolve<FriendPagination> {
  constructor(private friendService: FriendService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FriendPagination> {
    return this.friendService.friends().pipe(
      catchError(err => [])
    );
  }
}