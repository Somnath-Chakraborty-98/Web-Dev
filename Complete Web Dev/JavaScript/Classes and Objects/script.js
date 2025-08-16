// objects
const student = {
    full_name: "Somnath Chakraborty",
    marks: 94.5,
    print_marks: function () {
        console.log("marks = ", this.marks);
    }
};

student.print_marks();

const student2 = {
    full_name: "Somnath Chakraborty",
    marks: 98.99,
    print_marks: () => {
        console.log("marks =", student2.marks);
    }
};

student2.print_marks();

// prototype with objects
const employee = {
    calcTax(salary){
        console.log("Tax is a burden", (salary*10)/100);
    }
}

const somnath ={
    salary: 50000
};

const ayan ={
    salary: 60000
};

const arpan ={
    salary: 70000
};

somnath.__proto__ = employee;
ayan.__proto__ = employee;
arpan.__proto__ = employee;

somnath.calcTax(somnath.salary);
ayan.calcTax(ayan.salary);
arpan.calcTax(arpan.salary);

// class
class car{
    constructor(brand, model){
        console.log("New object created");
        this.brand = brand;
        this.model = model;
    }

    GetBrand(){
        console.log("Brand Name = ", this.brand);
    }

    GetModel(){
        console.log("Model Name = ", this.model);
    }

}

let fortuner = new car("Toyota", "fortuner");
let city = new car("Honda");
let jaguar = new car(null,"fType");

fortuner.GetBrand();
fortuner.GetModel();

city.GetModel();
city.GetBrand();

jaguar.GetModel();
jaguar.GetBrand();

console.log(fortuner);
console.log(city);
console.log(jaguar);

// inheritance
class Parent{
    hello(){
        console.log("Hello");
    }
}

class child extends Parent{

}

let obj = new child();
obj.hello();