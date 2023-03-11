
let secondColumn
let thirdColumn
document.addEventListener("DOMContentLoaded", function () {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    secondColumn = document.getElementById('inProgress').innerHTML
    thirdColumn = document.getElementsByClassName('done-title')[0].innerHTML
    if (localStorage.getItem(key) === secondColumn) {
      document.querySelector(".todo-inner").append(document.querySelector(".task-box").cloneNode(true));
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = secondColumn
      document.querySelector(".task-box").style.display = "block";
      alert('случай 1')
    } else if (localStorage.getItem(key) === thirdColumn) {
      document.querySelector(".progress-inner").append(document.querySelector(".task-box").cloneNode(true));
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = thirdColumn
      document.querySelector(".task-box").style.display = "block";
      alert('случай 2')
    } else if (localStorage.getItem(key) === deleteTitle) {
      alert('случай 3');
      document.querySelector(".done-inner").append(document.querySelector(".task-box").cloneNode(true));
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = deleteTitle
      document.querySelector(".task-box").style.display = "block";
    } else {
      alert('случай 4');
      document.querySelector(".done-inner").append(document.querySelector(".task-box").cloneNode(true));
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = deleteTitle
      document.querySelector(".task-box").style.display = "block";
    }

  }





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
  div.forEach((e) => {


    e.onclick = function () {
      let delKey = this.querySelector('.box-text').innerHTML
      if (this.querySelector('#next').innerHTML === document.getElementsByClassName('progress-title')[0].textContent) {
        console.log('бинго');
        let nextColumn = document.getElementsByClassName('done-title')[0].textContent
        alert(document.getElementsByClassName('done-title')[0].textContent)
        alert(this.querySelector('#next').innerHTML)
        console.log(nextColumn);

        localStorage.setItem(delKey, nextColumn)
      } else if (localStorage.getItem(delKey) === document.getElementsByClassName('done-title')[0].textContent) {

        localStorage.setItem(delKey, deleteTitle)
      } else {
        alert('ПОздравляю вы завершили задание')
        let delKey = this.querySelector('.box-text').innerHTML
        localStorage.removeItem(delKey)

      }


    }
    location.reload()
  });

}









