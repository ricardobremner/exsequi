'use client';

import Form from '@/app/ui/tasks/create-form';
import Table from '@/app/ui/tasks/table';
import { lusitana } from '@/app/ui/fonts';
import { TasksTableSkeleton } from '@/app/ui/skeletons';
import { Suspense, useEffect, useState } from 'react';
import { Task } from '@/app/lib/definitions';

export default function Page() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTask);
  }, []);

  const addTask = (newTask: Task) => {
    const updatedTask = [...tasks, newTask];
    setTasks(updatedTask);
    localStorage.setItem('tasks', JSON.stringify(updatedTask));
  }

  const updateTask = (updatedTask: Task) => {
    const upTask = tasks.map((task) => task.id === updatedTask.id ? updatedTask : task);
    setTasks(upTask);
    localStorage.setItem('tasks', JSON.stringify(upTask));
    setEditTask(null);
  }

  const deleteTask = (id: string) => {
    const deleted = tasks.filter(task => task.id !== id);
    setTasks(deleted);
    localStorage.setItem('tasks', JSON.stringify(deleted));
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className={`${lusitana.className} text-2xl`}>Tasks</h2>
      </div>
      <div className="mt-4 gap-2 md:mt-8">
        <Form addTask={addTask} editTask={editTask} updateTask={updateTask} />
      </div>
      <Suspense fallback={<TasksTableSkeleton />}>
        <Table tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </Suspense>
    </div>
  );
}