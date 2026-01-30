import ContenedorTarjeta from './ContenedorTarjeta.jsx';
import Encabezado from './Encabezado.jsx';
function App(){

  return (
    <div>
      <Encabezado/>
      <ContenedorTarjeta/>
      <h1>5A EVND</h1>
      <h2>Profesor:</h2>
      <h3>Ricardo Luna Santos</h3>
      <UserComponent/>
      <ProfileComponent/>
      <FeedComponent/>
    </div>
  )
}

function UserComponent(){
  const nombre = 'Roberto';
  const apellidos = 'Hernandez Cruz';
  const nombreCompleto = <h2>El nombre es:{nombre} y sus apellidos son: {apellidos}</h2>;

  return <h1>User Component {nombreCompleto}</h1>
}

function ProfileComponent(){
  const users =[
    {id:1, name:'Roberto', role:'Web Designer'},
    {id:2, name:'Juan', role:'Web Developer'},
    {id:3, name:'Ana', role:'Team Leader'},
  ]
  return (
    <>
    <p>Lista de Alumnos del Sistema</p>
    <ul>{
      users.map(function(user,index){
        return(
          <li key={index}>{user.name} es un {user.role}</li>
        )
      })
      }
    </ul>
    </>
  )
}

function FeedComponent(){
  const materiales =[
    {id:1, title:'Martillo', description:'Martillo de doble punta'},
    {id:2, title:'Pala', description:'Pala para cavar'},
    {id:3, title:'Cemento', description:'Material para construcción'},
    {id:4, title:'Ladrillos', description:'Ladrillos rojos para construcción'},
  ]
  return (
    <>
    <p>Lista de Materiales de Contruccion</p>
    <ul>{
      materiales.map(function(material,index){
        return(
          <li key={index}>{material.title} es un {material.description}</li>
        )
      })
      }
    </ul>
    </>
  )
}
export default App;