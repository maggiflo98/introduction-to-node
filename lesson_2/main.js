class Human{

    constructor(name,country,career){
      this.name=name;
      this.country=country;
      this.career=career;
    }
    // getter method
    getDetails(){
        return "i am " + this.name + " i come from" + this.country  +  " i am a "+this.career
    }
    // setter method
    changeCountry(country){
        this.country=country;
        return "My new country is" + this.country
    }
}
class Employee extends Human{
    // child class inherits:name,country,career from parent
    constructor(name,country,career,gender) {
        super(name,country,career,gender);
        this.gender=gender;
        }
    show(){
        var parentTrait=this.name + " " + this.country + " " + this.career ;
        var childTrait=this.gender;
        return " Child traits: " + childTrait +  " Parent traits: " + parentTrait;
    }

}

p1=new Human(  "John doe", "Kenya", "software Engineer");
e1=new Employee(  "John doe mark", "Kenya", "software Engineer","Male");
document.getElementById( "test1").innerHTML=p1.getDetails();
document.getElementById( "test2").innerHTML=e1.show();