import {FC, useState} from 'react';
import { AddCard } from '../organisms/addCard';
import { TaskCard } from '../organisms/taskCard';

type Task = {
    id : number;
    name : string;
    doneTask : boolean;
}

export const TaskArea: FC = () => {
    const [tasks, setTasks]  = useState<Task[]>([]);

    const addTask = (taskName: string) => {
        setTasks((prevTasks: Task[]) => [
            ...prevTasks,
            { id: Date.now(), name: taskName, doneTask: false},
        ]);
    };

    const toggledoneTask = (taskId: number) => {
        setTasks((prevTasks: Task[]) =>
            prevTasks.map((task : Task) =>
                task.id === taskId ? {...task, doneTask: !task.doneTask} : task
            )
        );
    };

    const updateTask = (taskId: number, newTaskTitle: string) => {
        setTasks((prevTasks: Task[]) =>
            prevTasks.map((task: Task) =>
                task.id === taskId ? {...task, name: newTaskTitle} :task
            )
        );
    };

    const delTask = (taskId: number) => {
        setTasks((prevTasks: Task[]) => prevTasks.filter((task: Task) => task.id !== taskId));
    };

    return(
        <>
        <AddCard add={addTask} />
        {tasks.map((task) => (
            <TaskCard
            key={task.id}
            taskTitle={task.name}
            doneTask={task.doneTask}
            onToggleDoneTask={() => toggledoneTask(task.id)}
            updateTask={(newTaskTitle) => updateTask(task.id, newTaskTitle)}
            delTask={() => delTask(task.id)}
            />
        ))}
        </>
    );
}