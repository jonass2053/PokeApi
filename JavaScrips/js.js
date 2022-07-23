let url ="https://pokeapi.co/api/v2/pokemon/";

const pokeapi =(nombre)=>
{
   
    fetch(`${url}${nombre}`).then(Response=>Response.json()).then((Datos)=>
    {
        console.log(Datos);

      CrearCard(Datos);
      /* let direccionimegane=Datos.sprites.front_female;
      
        
     // console.log(Datos.sprites.front_female);


     let divcard = document.createElement("div");
     divcard.className="card";
     divcard.style.width="250px";
     let imgcard=document.createElement("img");
     imgcard.className="img-card-top";
     
     imgcard.setAttribute("src", direccionimegane);
     let cardbody =document.createElement("card-body");
     cardbody.className="card-body";
     let NombrePoke = document.createElement("h1");
     NombrePoke.innerText=Datos.name.toUpperCase();

     let p =document.createElement("p");
     let pstast =document.createElement("p");
     let phabilidades =document.createElement("p");

     let contadorhabilidades;
     const arrhabilidades=Datos.abilities;
     console.log(arrhabilidades);
     let listahabilidades = document.createElement("ol");
     
        let cont=0;
     arrhabilidades.forEach(element => {
        let li = document.createElement("li");
        li.innerText=Datos.abilities[cont].ability.name;
        cont++;
        listahabilidades.appendChild(li);
        
        });

     
        cardbody.appendChild(listahabilidades);

   
     


     phabilidades.innerHTML=Datos.abilities[0].ability.name;

    console.log(Datos.abilities[0].ability.name);


     pstast.innerHTML=`<b> Stast= ${Datos.stats[0].base_stat} </b>`;
     console.log(Datos.stats[0].base_stat);

     let habilidades = document.createElement("h5");
     habilidades.innerText="Habilidades";
     habilidades.className="text-title"
     let movimietnos = document.createElement("h5");
     movimietnos.innerText="Movimientos";
     habilidades.className="text-title"
     p.innerHTML=`<hr>Hola soy un pokemon de tipo: <b> ${Datos.types[0].type.name} </b> <hr>`;




     cardbody.appendChild(NombrePoke);
     cardbody.appendChild(p);
     cardbody.appendChild(pstast);

     cardbody.appendChild(habilidades);
     cardbody.appendChild(phabilidades);


     divcard.appendChild(imgcard);
     divcard.appendChild(cardbody);
    
     document.querySelector(".col").appendChild(divcard);
 */

    })
}

const consultar=()=>
{
    let name = document.getElementById("name");
    pokeapi(name.value.toLowerCase());
}

const CrearCard=(d)=>
{
   let colcard = document.createElement("div");
   colcard.className="col card col-3";

    let divcard = document.createElement("div");
    divcard.className="";
    let imgcard=document.createElement("img");
    imgcard.className="img-card-top imgpokemon";
 
  /*   let direccionimegane=d.sprites.front_female; */
  
    let direccionimegane=d.sprites.front_default;
    imgcard.setAttribute("src", direccionimegane);
    let cardbody =document.createElement("div");
    cardbody.className="card-body";
    let NombrePoke = document.createElement("h2");
    NombrePoke.innerText=d.name.toUpperCase();

    let p =document.createElement("p");
    let pstast =document.createElement("p");
   

    let contadorhabilidades;
    const arrhabilidades=d.abilities;
    console.log(arrhabilidades);
    let listahabilidades = document.createElement("ol");
    
       let cont=0;
    arrhabilidades.forEach(element => {
       let li = document.createElement("li");
       li.innerText=d.abilities[cont].ability.name;
       cont++;
       listahabilidades.appendChild(li);
       
       });

    
      

  
    



   console.log(d.abilities[0].ability.name);


    pstast.innerHTML=`<b> Stast= ${d.stats[0].base_stat} </b>`;
    console.log(d.stats[0].base_stat);

    let habilidades = document.createElement("h5");
    habilidades.innerText="Habilidades";
    habilidades.className="text-title"
    let movimietnos = document.createElement("h5");
    movimietnos.innerText="Movimientos";
    habilidades.className="text-title"
    p.innerHTML=`<hr>Hola soy un pokemon de tipo: <b> ${d.types[0].type.name} </b> <hr>`;




    cardbody.appendChild(NombrePoke);
    cardbody.appendChild(p);
    cardbody.appendChild(pstast);

    cardbody.appendChild(habilidades);
   


    divcard.appendChild(imgcard);
    divcard.appendChild(cardbody);
    cardbody.appendChild(listahabilidades);
    colcard.appendChild(divcard);
   
    document.querySelector(".rowcard").appendChild(colcard);

}
