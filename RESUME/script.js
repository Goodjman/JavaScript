/* Когда у тебя слабый компьютер как у меня и тебе нужно сохранять полезные ссылки на виду
можно воспользоваться моим гениальным сайтом 
Две колонки активные и прочитанные, между ними можно переключаться кнопками завершить/активировать 
а так же с помощью драг и дропа
сами элементы представляют собой блок с названием и ссылкой в кнопке 
по нажатию кнопки мор инфо переходит по сохраненной ссылке
*/
  const addModal = document.getElementById('add-modal');
  const startAddButton = document.querySelector('.addbtn');
  const cancelAddButton = addModal.querySelector('.btn-passive');
  const confirmAddButton = cancelAddButton.nextElementSibling;
  const userInputs = addModal.querySelectorAll('input');
  const entryTextSection = document.getElementById('entry-text');
  
  const projects=[];
  
 

const renderNewElement = ( title, Url) => {
  const newElement = document.createElement('li');
 /* newElement.className = 'card';*/
 /* newElement.draggable = 'true';*/
  newElement.innerHTML = `
  <li class="card "  >
    <h2>${title}</h2>
    <form action="${Url}">
<button class="alt">More Info</button>
</form>
</li>`;
//appendHandler(".done",newElement);
const listRoot = document.getElementById('move-list');
listRoot.append(newElement);
};
/*
const appendHandler=(type,newElement)=>{
  const listRoot = document.getElementsByClassName(`${this.type}`);
  listRoot.append(this.newElement);
};

const removeHandler=(type,newElement)=>{
  const listRoot = document.getElementsByClassName(`${type}`);
  listRoot.remove(newElement);
};
*/
const closeModal = () => {
  addModal.classList.remove('visible');
};

const showModal = () => {
  addModal.classList.add('visible');
};
const clearInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddHandler = () => {
  closeModal();
  clearInput();
};


const addHandler = () => {
  const titleValue = userInputs[0].value;
  const UrlValue = userInputs[1].value;

  if (titleValue.trim() === '' || UrlValue.trim() === '' ) {
    alert('HEY! Enter something ~_~');
    return;
  }

  const newProject = {title: titleValue,url: UrlValue};

  projects.push(newProject);
  closeModal();
  clearInput();
  renderNewElement( newProject.title, newProject.url );
};




startAddButton.addEventListener('click', showModal);
cancelAddButton.addEventListener('click', cancelAddHandler);
confirmAddButton.addEventListener('click', addHandler);

const linkbutton = document.querySelector('.alt');
linkbutton.addEventListener('click',()=>{
  var parents = document.querySelectorAll('li');
  var klass;
for (var i = 0;i<parents.length; i++){
    var parent = parents[i];
      parent.onclick = function(e) {
                if (e.target.className == 'alt')  {
                      klass=`.${this.className}`;
                      return parent;
                }
                parent.remove();
            };
          }
})


















/*


var dragged;


  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      //dragged = event.target;
     //removeHandler(type,dragged);
      event.target.style.opacity = .5;
  });

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  });

  /* events fired on the drop targets *//*
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  });

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "green";
      }

  });

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  });

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      //const papik=dragged.parentNode;
      //addHandler(papik,dragged);
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          console.log(dragged.parentNode);
          event.target.appendChild( dragged );
      }
    
  });

*/
/*
connectDrag() {
  const item = document.getElementById(this.id);
  item.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', this.id);
    event.dataTransfer.effectAllowed = 'move';
  });

  connectDroppable() {
    const list = document.querySelector(`#${this.type} ul`);

    list.addEventListener('dragenter', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        list.parentElement.classList.add('droppable');
        event.preventDefault();
      }
    });

    list.addEventListener('dragover', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });

    list.addEventListener('dragleave', event => {
      if (event.relatedTarget.closest(`#${this.type} ul`) !== list) {
        list.parentElement.classList.remove('droppable');
      }
    });

    list.addEventListener('drop', event => {
      const prjId = event.dataTransfer.getData('text/plain');
      if (this.projects.find(p => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector('button:last-of-type')
        .click();
      list.parentElement.classList.remove('droppable');

    });
  }





  
    connectDrag() {
      const item = document.getElementById(this.id);
      item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', this.id);
        event.dataTransfer.effectAllowed = 'move';
      });
  
      item.addEventListener('dragend', event => {
        console.log(event);
      });
    }
  
    connectMoreInfoButton() {
      const projectItemElement = document.getElementById(this.id);
      const moreInfoBtn = projectItemElement.querySelector(
     */