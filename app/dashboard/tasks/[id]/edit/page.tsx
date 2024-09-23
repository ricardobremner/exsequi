import EditTaskForm from '@/app/ui/tasks/edit-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';

export default function Page() {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tasks', href: '/dashboard/tasks' },
          { label: 'Edit Task', href: '/dashboard/tasks/id/edit', active: true }
        ]}
      />
      <EditTaskForm />
    </main>
  );
}
