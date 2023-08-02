import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css'],
})
export class MercadoriasComponent implements OnInit {
  title = 'Lista de Compras';
  mercadorias = [
    {
      descricao: 'Arroz',
      quantidade: 1
    },
    {
      descricao: 'Feijão',
      quantidade: 6
    },
    {
      descricao: 'Óleo',
      quantidade: 3
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
