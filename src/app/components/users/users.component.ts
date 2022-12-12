import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
  add(name:any,age:any,score:any){
    if(confirm('Are you sure you want to add user to winner?')){
    this.store.collection('winners').add({
      name:name,
      age:age,
      score:score
    });
  }
  }

  getData(){
    this.store.collection("users",ref=>ref.where('age','<=','21')).snapshotChanges().subscribe((response) => {
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
