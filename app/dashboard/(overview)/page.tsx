'use client';

import { lusitana } from '@/app/ui/fonts';
import CardWrapped from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { useEffect, useState } from 'react';
import { Task } from '@/app/lib/definitions';

export default function Page() {

const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTask = localStorage.getItem('tasks');
    if (storedTask) {
      setTasks(JSON.parse(storedTask));
    }
  }, []);

  return (
    <main>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapped tasks={tasks} />
        </Suspense>
      </div>
    </main>
  );
}