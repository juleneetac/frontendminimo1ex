
export class Modelstudent {
    _id:string;
    name: String;
    address: String;
    phones: [
      {
        home: String;
        work: String;
      }
    ]
    studies : [String];
    constructor(name = '', address = '', description = ''){
      this.name = name;
      this.address = address;
    }
}
