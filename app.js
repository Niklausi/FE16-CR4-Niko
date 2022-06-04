const dutiesList = JSON.parse(duties);


const listContainer = document.querySelector(".container-duties");



const printCards = () => {
        dutiesList.forEach((duties) => {
            listContainer.innerHTML += `
            <div class="card col-12 col-md-6 col-xl-4" style="width:250px">
            <img class="card-img-top" src="${duties.image}" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">${duties.name}</h4>
              <p class="card-text">because its smells</p>
              <hr>
              
              <a href="#" class="btn btn-danger">Done</a>
            </div>
          </div>`;
        });
        
        
};
const increaseLikes = () => {
    const likeBtn =document.querySelector(".btn");
    btn.forEach((btn,i) => {
        btn.addEventListener("Click",()=>{
            dutiesList[i].likes++;

          
     });
});
};
printCards ();
printCards ();
printCards ();
increaseLikes();


