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
        placeholder=""
        />
      </Form.Group>
    </Form>
);




};