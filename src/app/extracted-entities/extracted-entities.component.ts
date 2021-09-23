import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extracted-entities',
  templateUrl: './extracted-entities.component.html',
  styleUrls: ['./extracted-entities.component.scss'],
})
export class ExtractedEntitiesComponent implements OnInit {
  usersData = {
    person: {
      title: 'Person',
      items: [
        { name: 'the khali the the', count: 22 },
        { name: 'Randy ootam', count: 23 },
        { name: 'UnderTaker', count: 25 },
        { name: 'Big show' },
        { name: 'Khali' },
        { name: 'jhon cena', count: 22 },
        { name: 'Randy ootam', count: 23 },
        { name: 'UnderTaker', count: 25 },
        { name: 'Big show' },
        { name: 'Khali' },
        { name: 'jhon cena', count: 22 },
        { name: 'Randy ootam', count: 23 },
        { name: 'UnderTaker', count: 25 },
        { name: 'Big show' },
        { name: 'Khali' },
        { name: 'jhon cena', count: 22 },
        { name: 'Randy ootam', count: 23 },
        { name: 'UnderTaker', count: 25 },
        { name: 'Big show' },
        { name: 'Khali' },
        { name: 'jhon cena', count: 22 },
        { name: 'Randy ootam', count: 23 },
        { name: 'UnderTaker', count: 25 },
        { name: 'Big show' },
        { name: 'Khali' },
        { name: 'jhon cena', count: 22 },
        { name: 'Randy ootam', count: 23 },
        { name: 'UnderTaker', count: 25 },
        { name: 'Big show' },
        { name: 'Khali' },
      ],
    },
    email: {
      title: 'Email',
      items: [
        { name: 'jhone@gmail.com', count: 20 },
        { name: 'Randyootam@gmail.com', count: 2 },
        { name: 'UnderTaker@gmail.com', count: 30 },
        { name: 'Bigshow@gmail.com', count: 50 },
        { name: 'Khali@gmail.com' },
        { name: 'jhone@gmail.com', count: 20 },
        { name: 'Randyootam@gmail.com', count: 2 },
        { name: 'UnderTaker@gmail.com', count: 30 },
        { name: 'Bigshow@gmail.com', count: 50 },
        { name: 'Khali@gmail.com' },
        { name: 'jhone@gmail.com', count: 20 },
        { name: 'Randyootam@gmail.com', count: 2 },
        { name: 'UnderTaker@gmail.com', count: 30 },
        { name: 'Bigshow@gmail.com', count: 50 },
        { name: 'Khali@gmail.com' },
        { name: 'jhone@gmail.com', count: 20 },
        { name: 'Randyootam@gmail.com', count: 2 },
        { name: 'UnderTaker@gmail.com', count: 30 },
        { name: 'Bigshow@gmail.com', count: 50 },
        { name: 'Khali@gmail.com' },
        { name: 'jhone@gmail.com', count: 20 },
        { name: 'Randyootam@gmail.com', count: 2 },
        { name: 'UnderTaker@gmail.com', count: 30 },
        { name: 'Bigshow@gmail.com', count: 50 },
        { name: 'Khali@gmail.com' },
      ],
    },
    location: {
      title: 'Location',
      items: [
        { name: 'pandeshra', count: 203 },
        { name: 'Varacha', count: 24 },
        { name: 'Azad nagar', count: 22 },
        { name: 'Pipload' },
        { name: 'veus' },
      ],
    },
  };
  userDataKeys = [];

  constructor() {}

  ngOnInit(): void {
    this.userDataKeys = Object.keys(this.usersData);
  }
}
