import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Task {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const UserTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, [id]);


  return (
    <div>
      <h1>User Tasks</h1>
      <ul>
    
        {tasks.map((task ,index)=> (
          <li key={index}>
            {task.title}
            <p>{!task.completed && 'you mast to complete the task'}</p>
          </li>
        
          
        ))}
      </ul>
    </div>
  );
};

export default UserTasks;
