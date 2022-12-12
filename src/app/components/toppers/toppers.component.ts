import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.scss']
})
export class ToppersComponent implements OnInit {

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
    this.store.collection("users",ref=>ref.where('score','>=','90')).snapshotChanges().subscribe((response) => {
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
