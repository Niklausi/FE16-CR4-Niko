const dutiesList = JSON.parse(duties);
console.log(dutiesList);
const listContainer = document.querySelector(".container-duties");

const printCards = () => {
  dutiesList.forEach((duties) => {
    listContainer.innerHTML += `
            <div class="card col-12 col-md-6 col-lg-4 h-5 w-5">
            <img class="card-img-top" src="${duties.image}" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">${duties.name}</h4>
              <p class="card-text">because its smells</p>
              <hr>
              <div class="d-flex"><i class="fa-solid fa-triangle-exclamation"></i><p>Priority Level: </p><a href="#" class="btn btn-success">${duties.importance}</a></div>
            </div>
            <div class="d-flex"><i class="fa-solid fa-calendar-days"></i><p>Deadline: 01.07.2022</p></div>
            <hr>
            <div class="d-flex justify-content-end"><button type="button" class="delbtn btn-danger mr-4 btn-rounded">Delete</button><button type="button" class="donebtn btn-success btn-rounded">Done</button>
            </div>
          </div>`;
  });
};
const increaseimportances = () => {
  const prioriBtn = document.getElementsByClassName("btn");

 for (let i = 0; i < prioriBtn.length; i++) {
   console.log(prioriBtn)
    
    prioriBtn[i].addEventListener("click", function onClick() {


        dutiesList[i].importance++;
        prioriBtn[i].innerHTML = dutiesList[i].importance;
        if (btn.innerHTML < 2) {
          btn.setAttribute(
            "class",
            "btn btn-success btn-sm mb-2 btn-rounded rounded-0 count-btn"
          );
        } else if (prioriBtn[i].innerHTML <= 2 && btn.innerHTML < 4) {
          prioriBtn[i].setAttribute(
            "class",
            "btn btn-warning btn-sm mb-2 btn-rounded rounded-0 count-btn"
          );
        } else if (prioriBtn[i].innerHTML <= 4) {
          prioriBtn[i].setAttribute(
            "class",
            "btn btn-danger btn-sm mb-2 btn-rounded rounded-0 count-btn "
          );
        }
      });
 }
};

printCards();
increaseimportances();
