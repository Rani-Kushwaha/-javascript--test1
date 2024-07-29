/**********************************Classes and object*********************************/

const student = {   //  here , student is an object.
    Name : "Rani",
    Rollno : 2201003099,
    printRollno : function () {
        console.log("Rollno" , this.Rollno);
    },
};

const employee = {
    name : "abc",
    caltax() {
        console.log("Tax rate is 10%");
    },
};

const muskan = {
    salary : 500000,
    caltax() {
        console.log("Tax rate is 20%");
    },
}
 /*******************************Prototype*************************************/
//  A javascript object having state and behaviors (Properties & Methods)
// JS object have special property called prototype.

muskan.__proto__ = employee;

// if object and prototype have same method , then object's method ll be used.

/***************************************Classes**************************************/

class toyotaCar {
    constructor(brand){
        console.log("constructor invoked");
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brand = brand;
    // }
}

let fortuner = new toyotaCar("fortuner"); // new object created named as fortuner & can access props nd methods of class toyota.
let lexus = new toyotaCar("Lexus");

// fortuner.setBrand("fortuner");
// lexus.setBrand("Lexus");


/***********************************Inheritance***********************************/

class parent {
    hello(){
        console.log("hello");
    }
}

class child extends parent {}

let obj = new child // now we can access method of parent by using obj of child.

class person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    talk(){
        console.log("talk");
    }
}
class engineer extends person{
    constructor(branch){
        super();  // super keyword used to invoked parent class construtor.
        this.branch = this.branch;
    }
    work(){
        console.log("solve problems, built software");
    }
}
let object = new engineer;


class job{

    constructor(name){
        console.log(name);
    }
}
class employees extends job{
    constructor(name){
        super(name);
    }
    work(){
        console.log("work");
    }
    salary(){
        console.log("15 lakh annually");
    }
}
let obj2 = new employees("Rani");


let data = "screte informations"
class user{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    viewDetails(){
        console.log(data);
    }
}
let obj3 = new user("rani" , "001rani@gmail.com"); 
