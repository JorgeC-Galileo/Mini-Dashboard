import { useState } from "react";

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

//TaskListComponent 


};