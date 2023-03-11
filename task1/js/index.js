

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
document.querySelector('#add').addEventListener('click', function () {


const inputName = document.querySelector('#inputTask').value


})

  





