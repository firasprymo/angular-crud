




import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { convertSnaps } from './db-utils';
import { Process } from '../model/process';

@Injectable({
  providedIn: 'root'
})



export class ProcessService {

  processList: Process[] = [];

  constructor(private http: HttpClient, private db: AngularFirestore) {
  }

  findById(id): Observable<Process> {
    return this.db.collection('process', ref => ref.where("id", "==", id)).snapshotChanges()
      .pipe(map(snaps => {
        const process = convertSnaps<Process>(snaps)
        return process.length == 1 ? process[0] : undefined

      })

        , first())
  }



  findAllProcesss(): Observable<Process[]> {
    return this.db.collection('process')
      .snapshotChanges()
      .pipe(map(snaps => convertSnaps<Process>(snaps))

        , first())
  }


  saveProcess(process: Process): Promise<Process> {
    return new Promise((resolve) => {

      this.db.collection('process').add(process).then(res => {
        resolve(process)
      }).catch(e => {
        console.log(e);

      })
    })
  }
  assignProcess(processObj: Process): Promise<Process> {
    return new Promise((resolve) => {

      this.db.collection(`users/${processObj.user}/processUser`).add(processObj).then(res => {
        resolve(processObj)
      }).catch(e => {
        console.log(e);

      })
    })
  }
  // delete(entity: Process): Observable<Process> {

  //   if (entity.id) {
  //     return this.db.collection.
  //   }
  //   return null;
  // }
}

