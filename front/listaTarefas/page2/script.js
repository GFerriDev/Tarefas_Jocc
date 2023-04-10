const axx = axios.create({
    baseURL: "http://localhost:3333"
})

const desc = document.querySelector('.desc')
const att = document.querySelector('.att')
const element = document.querySelector('.element')

function get() {
    axx.get('/tarefas')
      .then(response => {
        const data = (response.data)[0]
        for(let a = 0; a< data.length;a++){
            let divNova = document.createElement("div")
            divNova.classList.add("active");;
            divNova.innerHTML += `<p>${(data[a].tarefa)}</p>`
            divNova.innerHTML += `<small>${(data[a].description)}</small> <br><br>`
            divNova.innerHTML += `<hr>`
            element.appendChild(divNova)
            element.appendChild(divNova)
        }
        if(data.length == 0){
            element.innerHTML += ` <a href="../page1/page1.html" class="link2"> Registre uma nova tarefa</a>`
        } else{

            createButton()
        }   
      })
      .catch(error => console.log(error))
  }

get()

function deleteT() {
  const confirm = window.confirm('Você deseja mesmo apagar essa lista?')
  if (confirm){
    axx.delete(`/`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.error(error));
  }

  }

  function createButton()
  {
       let btn = document.createElement('BUTTON');
       let lbl = document.createTextNode("Apagar Lista");        
       btn.appendChild(lbl);   
       element.appendChild(btn);    
       btn.addEventListener('click', () => deleteT())
       btn.addEventListener('click', () => window.location.reload(true))
       btn.addEventListener('click', () => element.removeChild(btn)) 
       
  }