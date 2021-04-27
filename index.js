// Write your code here
class Breakfast{
constructor(food,drink){
this.food= food;
this.drink=drink;

}
getfood(){
  return this.food + " " +this.drink;
}
}
const breakfast = new Breakfast("cheese","tea");
console.log(breakfast.getfood());

class Lunch{
  constructor(salad,soup,drink){
    this.salad= salad;
    this.soup=soup;
    this.drink = drink;


  }
  getfood(){
    return this.salad+ " " +this.soup+ " " +this.drink;
  }
}
const lunch =  new Lunch("tapula","chicken soup","cola");
console.log(lunch.getfood());
class Dinner{
  constructor(salad, soup, entree,_dessert){
    this.salad = salad;
    this.soup = soup;
    this.entree=entree;
    this._dessert = _dessert;
  }
  getfood(){
    return this.salad + " " + this.soup + " " + this.entree +" " + this._dessert;
  }
}
const dinner = new Dinner("salad","soup","entree","dessert");
console.log(dinner.getfood());
