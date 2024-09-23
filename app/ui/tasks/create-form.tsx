'use client';

import {
  CheckIcon,
  ClockIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { v4 as uuid } from 'uuid';
import React, { useState, useEffect } from 'react';
import { FormProps } from '@/app/lib/definitions';

export default function Form({ addTask, editTask, updateTask }: FormProps) {

  const [input, setInput] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (editTask) {
      setInput(editTask.task);
      setStatus(editTask.status);
    }
  }, [editTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  }

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: editTask ? editTask.id : uuid(),
      task: input,
      date: new Date().toISOString(),
      status: status
    };

    if (editTask) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    setInput('');
    setStatus('pending');
  }

  return (
    <form onSubmit={handleSend}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Add Task */}
        <div className="mb-4">
          <label htmlFor="task" className="mb-2 block text-sm font-medium">
            Write a task
          </label>
          <div className="relative">
            <input
              type="text"
              id="task"
              name="task"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
              value={input}
              onChange={handleChange}
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
              <div className="flex  items-center ">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  checked={status === 'pending'}
                  onChange={handleStatusChange}
                  required
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
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  checked={status === 'done'}
                  onChange={handleStatusChange}
                  required
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
        <Button type="submit">Create task</Button>
      </div>
    </form>
  );
}
