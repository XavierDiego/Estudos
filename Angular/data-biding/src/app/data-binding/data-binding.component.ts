import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url: string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo;
  isMouserOver: boolean = false;
  nome: string = 'abc';
  pessoa = {
    nome: 'def',
    idade: 20
  }
  nomeDoCurso: string = 'Angular';

  getValor(){
    return 1.5;
  }

  cursoAngular: boolean = true;

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouserOver = !this.isMouserOver;
  }

}
