import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { ArrowsPointingInIcon } from '@heroicons/react/24/solid';
import { DocumentCheckIcon } from '@heroicons/react/24/solid';

//import AddIssueModal from './AddIssueModal';

const sidebarIcons = [
  {
    name: 'Notifications',
    url: '/notifications',
    icon: <ArrowTopRightOnSquareIcon className="w-6 h-6 float-left" />,
  },
  {
    name: 'Calendar',
    url: '/calendar',
    icon: <CalendarDaysIcon className="w-6 h-6 float-left" />,
  },
  {
    name: 'Kanban',
    url: '/kanban',
    icon: <ArrowsPointingInIcon className="w-6 h-6 float-left" />,
  },
  {
    name: 'All Docs',
    url: '/docs',
    icon: <DocumentCheckIcon className="w-6 h-6 float-left" />,
  },
];

export default function Sidebar() {
  //const [isShown, setIsShown] = React.useState(false);

  // const handleTaskModalOpen = () => {
  //   setIsShown((current) => !current);
  // };

  return (
    <aside className="absolute inset-y-0 border-gray-900 shadow mt-12  px-5 bg-white dark:bg-gray-900 md:block">
      <ul className="flex flex-col  py-2">
        <button className="w-auto h-7 hover:opacity-70 rounded bg-blue-700 text-white px-2">
          New task
        </button>
        {sidebarIcons.map((icon) => (
          <li className="py-3">
            <button className="hover:opacity-40">
              <a
                className="px-1"
                href="{icon.url}"
              >
                {icon.icon}
              </a>{' '}
              {icon.name}
            </button>
          </li>
        ))}
      </ul>
      <hr className="mt-2" />

      <div className="flex flex-col"></div>
    </aside>
  );
}
