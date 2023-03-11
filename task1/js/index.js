
let secondColumn
let thirdColumn
document.addEventListener("DOMContentLoaded", function () {
  let keys = Object.keys(localStorage);
  todoInner = document.getElementsByClassName('todo-inner')[0]
  progressInner = document.getElementsByClassName('progress-inner')[0]
  doneInner = document.getElementsByClassName('done-inner')[0]

  for (let key of keys) {
    secondColumn = document.getElementById('inProgress').innerHTML
    thirdColumn = document.getElementsByClassName('done-title')[0].innerHTML
    if (localStorage.getItem(key) === secondColumn) {
      document.querySelector(".todo-inner").append(document.querySelector(".main-box").cloneNode(true));
      document.getElementsByClassName('main-box')[0].classList.remove('.main-box')
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = secondColumn
      document.querySelector(".task-box").style.display = "block";
      document.querySelector(".task-box").classList.add('1') //введено для проверки, было выявлено что обьекту может одновременно присвоиться два класса, из-за этого просиходит некорректное перемещение

    } else if (localStorage.getItem(key) === thirdColumn) {

      document.querySelector(".progress-inner").append(document.querySelector(".main-box").cloneNode(true));
      document.getElementsByClassName('main-box')[0].classList.remove('.main-box')
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = thirdColumn
      document.querySelector(".task-box").style.display = "block";
      document.querySelector(".task-box").classList.add('2') //введено для проверки

    } else if (localStorage.getItem(key) === deleteTitle) {

      document.querySelector(".done-inner").append(document.querySelector(".main-box").cloneNode(true));
      document.querySelector(".box-text").innerHTML = key
      document.querySelector("#next").innerHTML = deleteTitle
      document.querySelector(".task-box").style.display = "block";
      document.querySelector(".task-box").classList.add('3') //введено для проверки
    } else {

      document.querySelector(".done-inner").append(document.querySelector("main-box").cloneNode(true));
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
        let nextColumn = document.getElementsByClassName('done-title')[0].textContent
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









