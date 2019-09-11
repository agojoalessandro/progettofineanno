export class Objects{
  object: string;
  description: string;
  price: number;
  link: string;
}
export class Object{
  nome: string;
  cognome: string;
  object: string;
  description : string;
  price: number;
  link: string;
  constructor(n: string, c: string,o: string,d: string, p: number, l: string ){
    this.nome = n;
    this.cognome = c;
    this.object = o;
    this.description = d;
    this.price = p;
    this.link = l; 
  }

}