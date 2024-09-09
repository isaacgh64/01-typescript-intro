
export class Person{
    constructor(
        public name:string,
        private address:string = 'No Addres'){
    }
}

/*export class Hero extends Person{

    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string){
        super(realName,"New York");
    }
}*/

export class Hero{
    
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
      
    }
}

const person = new Person('Tony Stark','New York');
const ironMan = new Hero('IronMan',45,'Tony Stark',person);

console.log(ironMan);