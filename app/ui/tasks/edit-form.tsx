'use client';

import {
  CheckIcon,
  ClockIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Task } from '@/app/lib/definitions';

export default function EditTaskForm() {

  const router = useRouter();
  const params = useParams();
  const taskId = params.id;

  const [input, setInput] = useState<string>('');
  const [status, setStatus] = useState<string>('pending');
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (taskId) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const taskToEdit = storedTasks.find((task: Task) => task.id === taskId);
      if (taskToEdit) {
        setTask(taskToEdit);
        setInput(taskToEdit.task);
        setStatus(taskToEdit.status);
      } else {
        console.error('Task not found.');
      }
    }
  }, [taskId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value)
  }

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task) {
      console.error('Task not found. handle');
      return;
    }

    const updatedTask = {
      ...task,
      task: input,
      date: new Date().toISOString(),
      status: status
    };

    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.map((t: Task) => t.id === task.id ? updatedTask : t);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setInput('');
    setStatus('pending');
  };

  return (
    <form onSubmit={handleSend}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Task */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Edit Task
          </label>
          <div className="relative">
            <input
              id="task"
              name="task"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              value={input}
              onChange={handleChange}
              required
            />
            <DocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Task Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the task status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[5px] py-3">
            <div className="flex justify-end gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  checked={status === 'pending'}
                  onChange={handleStatusChange}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="done"
                  name="status"
                  type="radio"
                  value="done"
                  checked={status === 'done'}
                  onChange={handleStatusChange}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="done"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Done <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/tasks"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button onClick={() => router.push('/dashboard/tasks')} type="submit">Edit Task</Button>
      </div>
    </form>
  );
};
