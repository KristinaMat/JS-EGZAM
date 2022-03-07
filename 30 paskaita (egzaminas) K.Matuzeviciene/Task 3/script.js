/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

async function getUsers(){
    let url='https://api.github.com/users';
    try{
        let res = await fetch(url);
        return await res.json();
    } catch (error){
        console.log(error);
    }
    
}
async function renderUsers(){
    let users=await getUsers();
    let html='';
    users.forEach(user => {
        let htmlSegment=`<div class="user">
        <h4>${user.login}</h4>
        <img class="avatar" src="${user.avatar_url}">
        </div>`;
        html += htmlSegment;
    });
    let output=document.querySelector("#output");
    output.innerHTML=html;
    document.getElementById("message").style.visibility="hidden";
}