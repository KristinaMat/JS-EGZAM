/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';
async function getCars() {
    let url='cars.json';
    try{
        let res = await fetch(url);
        return await res.json();

    } catch(error){
        console.log(error);
    }
}
async function renderCars() {
    let cars = await getCars();
    let html = '';
    cars.forEach(car => {
       let htmlSegment=`<div class="car">
       <h2>${car.brand}</h2>
     <div class="models"><p>${car.models}</p></div>
       </div>`;
       
       html += htmlSegment;        
    });

    let output = document.querySelector("#output");
     output.innerHTML=html;
}
renderCars();