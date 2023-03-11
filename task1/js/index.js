
let secondColumn 
let thirdColumn
document.addEventListener("DOMContentLoaded", function (event) {




  
    let keys = Object.keys(localStorage);
    for (let key of keys) {
       secondColumn = document.getElementById('inProgress').innerHTML
       thirdColumn = document.getElementsByClassName('done-title')[0].innerHTML
      if (localStorage.getItem(key) === secondColumn) {
console.log('случай 1 '+key);
        document.querySelector(".todo-inner").appendChild(document.querySelector(".task-box").cloneNode(true));

        document.querySelector(".box-text").innerHTML = key
        document.querySelector("#next").innerHTML = secondColumn
        document.querySelector(".task-box").style.display = "block";

      } else if (localStorage.getItem(key) === thirdColumn) {
        console.log('случай 2 '+key);
        document.querySelector(".progress-inner").appendChild(document.querySelector(".task-box").cloneNode(true));
        document.querySelector(".box-text").innerHTML = key
        document.querySelector("#next").innerHTML = thirdColumn
        document.querySelector(".task-box").style.display = "block";
      } else if (localStorage.getItem(key) === deleteTitle) {
        console.log('случай 3');
        document.querySelector(".done-inner").appendChild(document.querySelector(".task-box").cloneNode(true));
        document.querySelector(".box-text").innerHTML = key
        document.querySelector("#next").innerHTML = deleteTitle
        document.querySelector(".task-box").style.display = "block";
      }

    }
  
  console.log(document.getElementById('progress-title'));
  console.log(document.querySelector([id = "progress-title"]));


  
});
let deleteTitle = 'Delete'
function btnInput() {
  let taskStatus = inProgress.innerHTML
  let userInputTask = document.getElementById('inputTask').value
  localStorage.setItem(userInputTask, taskStatus)
  location.reload()
}

function btnDelete() {
  div = document.querySelectorAll('.task-box');
  div.forEach((e) => {
    e.onclick = function () {
      let delKey = this.querySelector('.box-text').innerHTML
      localStorage.removeItem(delKey)
      this.remove();
    }

  });
}

function btnNext() {
  let div = document.querySelectorAll('.task-box');
  let i = 0
  div.forEach((e) => {
    e.onclick = function () {
      let delKey = this.querySelector('.box-text').innerHTML
      console.log(delKey);
      console.log(localStorage.getItem(delKey));

      if (localStorage.getItem(delKey) === document.getElementsByClassName('progress-title')[0].textContent) {
        console.log('бинго');
        let nextColumn = document.getElementsByClassName('done-title')[0].textContent
        console.log(nextColumn);
        localStorage.setItem(delKey, nextColumn)

      } else if (localStorage.getItem(delKey) === document.getElementsByClassName('done-title')[i].textContent) {
        console.log('бинго2');

        localStorage.setItem(delKey, deleteTitle)
      } else {
        alert('ПОздравляю вы завершили задание')
        let delKey = this.querySelector('.box-text').innerHTML
        localStorage.removeItem(delKey)
        this.remove()


      }


    }
    location.reload()
  });

}









