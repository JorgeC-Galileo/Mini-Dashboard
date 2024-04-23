import { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

//TaskInputForm component
const TaskInputForm=({onAddTask}) => {
  const [taskDescription,setTaskDescription]=useState('');

  const handleSubmit = (e) => {
       e.preventDefault();
       if(taskDescription.trim!==''){
         onAddTask(taskDescription);
         setTaskDescription('');
  }
};
return(
  <Form onSubmit={handleSubmit} className="mb-4">
    <Form.Group>
      <div className="d-flex align-items-center">
        <Form.Control
        type="text"
        placeholder="Ingresa una tarea"
        value={taskDescription}
       onChange={(e)=> setTaskDescription(e.target.value) }
       className="mr-2"
        />
  <Button variant="success" type="submit" className="d-flex align-items-center" >     
  Agregar Tarea 
    </Button>
  </div>
   </Form.Group>
    </Form>
);
};
//TaskListComponent 
const TaskList=({tasks,onDeleteTask})=>{
return (
  <>
<h2>{tasks.length} Tareas Pendientes</h2>
<Row xs={1} sm={2} md={2} lg={3} className="g-4">
    {tasks.map((task,index)=>(
      <Col key={index }>
    <div style={{backgroundColor:'black', borderColor:'#8B4513',marginBottom:'20px',padding:'10px' }}>
      <div style={{color:'white'}}>
        {task.description}</div>
        <Button variant="danger" size="sm" onClick={()=>onDeleteTask(index)}> Eliminar </Button>
        </div>
        </Col>
))}  
    
  </Row>

<Button variant="danger"  onClick={()=>onDeleteTask('all')} className="mt-4">
  Borrar Todos
  </Button> 
</>
);
    };

//App Component
const App=()=>{
  const[tasks,setTasks]=useState([]);
const addTask=(description)=>{
  setTasks([...tasks,{description}])
};

const deleteTask=(index)=>{
  if(index==='all'){
setTasks([]);
  }else{
const newTasks=[...tasks];
newTasks.splice(index,1);
setTasks(newTasks);
  }
};
return (
<Container className="my-5">
  <Row className="justify-conent-center">
    <Col xs={12} md={8}>
      <h1 className="text-center-mb-4" style={{color:'#8B4513'}}>Mini Dashboard de Tareaas</h1>
      <TaskInputForm onAddTask={addTask} />
          {tasks.length > 0 ? (
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      ):(
        <div className="text-center" style={{color :'#8B4513'}}>
        <p>!No hay tareas pendientes!</p>
        </div>
      )}
      </Col>
      </Row>
      </Container>

);

};

export default App;
