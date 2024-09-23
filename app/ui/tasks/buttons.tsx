import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteProps, UpdateTaskProps } from '@/app/lib/definitions';

export function UpdateTask({ id }: UpdateTaskProps) {
  return (
    <Link
      href={`/dashboard/tasks/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTask({ id, deleteTask }: DeleteProps) {

  return (
    <button className="rounded-md border p-2 hover:bg-gray-100"
      onClick={() => deleteTask(id)}>
      <TrashIcon className="w-5" />
    </button>
  );
}
