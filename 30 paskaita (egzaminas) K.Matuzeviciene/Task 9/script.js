/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
    wasExpensive() {
  
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  
  }
  }
  let myMovie1=new Movie("Wild","Gregor Fox", 1000000000);
  let myMovie2 = new Movie("Sun","Kate Spade", 5000000);
  
  console.log(myMovie1.wasExpensive());
  console.log(myMovie2.wasExpensive());
  