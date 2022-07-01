import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200/?4';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;
  

  //além de expressoes matematicas, expressoes booleanas
  //nesse caso a função abaixo nao precisa ser iniciada com function e nem terminada com ; 
  getValor() {
    return 1
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }

  getCurtirCurso() {
    return true
  }
  botaoClicado() {
    window.alert('Botão clicado!');
  }
  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
