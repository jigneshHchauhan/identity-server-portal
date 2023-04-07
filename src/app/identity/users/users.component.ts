import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users = [
    { id: 1, imgSrc: '../../../assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg', name: 'Alexander hipp' },
    { id: 2, imgSrc: '../../../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg', name: 'Michael Dam' },
    { id: 3, imgSrc: '../../../assets/images/brooke-cagle-NoRsyXmHGpI-unsplash.jpg', name: 'Brooke Cagle' },
    { id: 4, imgSrc: '../../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg', name: 'Christopher Campbell' },
    { id: 5, imgSrc: '../../../assets/images/dahiana-waszaj-XQWfro4LrVs-unsplash.jpg', name: 'Dahiana Waszaj' },
    { id: 6, imgSrc: '../../../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg', name: 'Alex Suprun' },
    { id: 7, imgSrc: '../../../assets/images/edward-cisneros-_H6wpor9mjs-unsplash.jpg', name: 'Edward Cisneros' },
    { id: 8, imgSrc: '../../../assets/images/christian-buehner-DItYlc26zVI-unsplash.jpg', name: 'Christian Buehner' },
  ]

}
