import {
  RectangleStackIcon,
  ClockIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { TaskstatProps } from '@/app/lib/definitions';

const iconMap = {
  tasks: RectangleStackIcon,
  pending: ClockIcon,
  done: CheckIcon
};

export default function CardWrapper({ tasks }: TaskstatProps) {
  const totalTask = tasks.length;
  const totalPending = tasks.filter(task => task.status === 'pending').length;
  const totalDone = tasks.filter(task => task.status === 'done').length;
  return (
    <>
      <Card title="Tasks" value={totalTask} type="tasks" />
      <Card title="Pending" value={totalPending} type="pending" />
      <Card title="Done" value={totalDone} type="done" />
    </>
  );
}

export function Card({
  title,
  value,
  type
}: {
  title: string;
  value: number | string;
  type: 'done' | 'pending' | 'tasks';
}) {

  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
        {value}
      </p>
    </div>
  );
}
