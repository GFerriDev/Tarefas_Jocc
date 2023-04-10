const axx = axios.create({
    baseURL: "http://localhost:3333"
})

const desc = document.querySelector('.desc')
const att = document.querySelector('.att')
const add = document.querySelector('.add')

function get() {
    axx.get('/tarefas')
      .then(response => {
        const data = (response.data)[0]
        const dataTypes = data.filter(valores => console.log(valores.tarefa))
      })
      .catch(error => console.log(error))
  }

function addNew() {
  const newUser ={
    "tarefas": `${att.value}`,
    "description": `${desc.value}`
}

    if((att.value).length > 30 || (desc.value).length > 50){
      window.alert('Você ultrapassou o número de caractéres permitidos')
    } else if((att.value).length <1){
      window.alert('Você deve nomear a atividade')
    }
    
    else{
      add.innerHTML = ` `
      axx.post('/', newUser)
      .then(() => {
        add.innerHTML += `<p>Tarefa adicionada!</p>`
        add.innerHTML += `<small>Clique <a class = "aqui" href="../page2/page2.html" class="link"> aqui</a> para conferir</small>`
      })
      .catch(error => console.error(error));

      att.value = ''
      desc.value = ''
    }

      
  }

function deleteT() {
    axx.delete(`/`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.error(error));
  }