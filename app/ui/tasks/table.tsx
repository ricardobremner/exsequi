'use client';

import { UpdateTask, DeleteTask } from '@/app/ui/tasks/buttons';
import TaskStatus from '@/app/ui/tasks/status';
import { formatDateToLocal } from '@/app/lib/utils';
import { TaskTableProps } from '@/app/lib/definitions';

export default function TaskTable({ tasks, deleteTask, updateTask }: TaskTableProps) {

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tasks?.map((task =>
              <div
                key={task.id}
                className="mb-2 w-full rounded-md bg-white p-4">
                <p className="mb-6">{task.task}</p>
                <div className="flex items-center justify-between border-b pb-4">
                  <p className="text-[10px]">{formatDateToLocal(task.date)}</p>
                  <TaskStatus status={task.status} />
                </div>
                <div className="flex w-full items-center justify-around pt-4">
                  <UpdateTask id={task.id} updateTask={updateTask} />
                  <DeleteTask id={task.id} deleteTask={deleteTask} />
                </div>
              </div>
            ))}
          </div>

          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Task
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks?.map((task) => (
                <tr
                  key={task.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{task.task}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{formatDateToLocal(task.date)}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TaskStatus status={task.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTask id={task.id} updateTask={updateTask} />
                      <DeleteTask id={task.id} deleteTask={deleteTask} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >
      </div >
    </div >
  );
}
