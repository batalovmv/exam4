
document.addEventListener("DOMContentLoaded", function (event) {
  const showModal = function () {
    const modal = document.querySelector('[class="modal"]');
    const modalTitle = document.createElement('h2')
    modalTitle.innerText = titleText
    const modalText = document.createElement('div')
    modalText.innerHTML = modalBody
    modal.insertBefore(modalTitle, okay);
    modal.insertBefore(modalText, okay);
    document.getElementById('okay').style = 'display : block'
    modal.style = 'position : fixed';
    document.querySelector('[class="overlay"]').style = 'position : fixed';
    document.querySelector('[class="overlay"]').style = 'opacity :0.5';
    function btnHandler(callback) {
      console.log('calback');
      return callback();
    }

    btnHandler = () => {
      modal.style = 'opacity : 1';

      document.querySelector('[class="overlay"]').style = 'opacity :0';

      document.getElementById('okay').style = 'display : none'
      modalText.remove()
      modalTitle.remove()
      function cb(print) {
        console.log(print);
      }
      function message(callback) {
        const print = 'callback'
        callback(print);
      }
      message(cb)
    }

    const btn = document.getElementById('okay')
    btn.addEventListener('click', btnHandler)
    const overlayExit = document.querySelector('[class="overlay"]')
    overlayExit.addEventListener('click', btnHandler)

  }


  ////
  // document.querySelector('#add').addEventListener('click', function () {



  //   const inputName = document.querySelector('#inputTask').value
  //   function btnSave() {

  //     text = localStorage.getItem(localStorage.key(userData))

  //     alert("Вы сохранили ваш текст");
  //     textArea = document.getElementById('text').value

  //     localStorage.setItem(userData, textArea)
  //     localStorage.getItem(userData)
  //   }
  //   function btnClear() {
  //     alert("Вы удалили данные");
  //     document.getElementById('text').value = ''
  //     localStorage.removeItem(userData)
  //     btnExit()


  //   }


  // })
  const refresh = function () {
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      let taskStatus = document.getElementById('inProgress').textContent
      if (localStorage.getItem(key) === taskStatus) {
        let newDiv = document.createElement('div')
        document.querySelector(".todo-inner").appendChild(document.querySelector(".task-box").cloneNode(true));

        document.querySelector(".box-text").innerHTML = key
        document.querySelector("#next").innerHTML = taskStatus
        document.querySelector(".task-box").style.display = "block";

      }

    }
  }




  refresh()
});

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
function btnNext(params) {
  div = document.querySelectorAll('.task-box');
  div.forEach((e) => {
    e.onclick = function () {
      let delKey = this.querySelector('.box-text').innerHTML
      localStorage.removeItem(delKey)
      this.remove();
    }
  });
}









