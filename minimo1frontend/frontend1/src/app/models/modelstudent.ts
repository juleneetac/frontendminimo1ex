
export class Modelstudent {
    name: string;
    address: string;
    phones: [
      {
        home: string;
        work: string;
      }
    ]
    studies : [string];
    constructor(name = '', address = '', description = ''){
      this.name = name;
      this.address = address;
    }
}
