import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200/?4'

  //além de expressoes matematicas, expressoes booleanas
  //nesse caso a função abaixo nao precisa ser iniciada com function e nem terminada com ; 
  getValor(){
    return 1
  }

    getCurtirCurso(){
      return true
    }

  constructor() { }

  ngOnInit(): void {
  }

}
