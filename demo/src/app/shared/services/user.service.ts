import { Flight } from '../model/flight';
import { FlightFilter } from '../model/flight-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { convertSnaps } from './db-utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  userList: User[] = [];

  constructor(private http: HttpClient, private db: AngularFirestore) {
  }

  findById(id: string): Observable<User> {
    return this.db.collection(`users/${id}`).snapshotChanges()
      .pipe(map(snaps => {
        console.log(snaps);

        const users = convertSnaps<User>(snaps)
        return users.length == 1 ? users[0] : undefined

      })

        , first())
  }



  findAllUsers(): Observable<User[]> {
    return this.db.collection('users')
      .snapshotChanges()
      .pipe(map(snaps => convertSnaps<User>(snaps))

        , first())
  }


  saveUser(user) {
    return this.db.collection('users').add(user).then(res => {
    }).catch(e => {
      console.log(e);


    })
  }

  delete(id) {
    return this.db.doc('users/' + id).delete().then(res => {
    }).catch(e => {
      console.log(e);
    })
  }
}

