import {
  RectangleStackIcon,
  ClockIcon,
  UserGroupIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  tasks: RectangleStackIcon,
  pending: ClockIcon,
  done: CheckIcon,
};

export default async function CardWrapper() {

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Tasks" value="totalTasks" type="tasks" />
      <Card title="Pending" value="totalPendingTasks" type="pending" />
      <Card title="Done" value="numberOfTasks" type="done" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'done' |  'pending' | 'tasks';
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
