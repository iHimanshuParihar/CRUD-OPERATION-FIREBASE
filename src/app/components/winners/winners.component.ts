import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {
  constructor(private store : AngularFirestore) {}

  ngOnInit(): void {
    this.getData()
  }
  dataSource:any
  columName:string[] = [
    "id",
    "name",
    "age",
    "score",
    
  ];
  getData(){
    this.store.collection("users").snapshotChanges().subscribe((response) => {
      this.dataSource = response.map((item) => {
        return Object.assign(
          {
            id: item.payload.doc.id
          },
          item.payload.doc.data()
        );
      });
    });
  }
}