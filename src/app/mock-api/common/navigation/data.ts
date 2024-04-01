/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example22',
        title: 'My_committee',
        type: 'basic',
        icon: 'mat_outline:cloud',
        link: '/example'
    },

    {
        id: 'my_profile',
        title: 'my_profile',
        type: 'basic',
        icon: 'mat_outline:cloud',
        link: '/Nationalities'
    },
    {
        id: 'my_tasks',
        title: 'my_tasks',
        // subtitle: 'Unique dashboard designs',
        type: 'collapsable',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'tasks',
                title: 'tasks',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },



        ],
    },
    {
        id: 'My_meetings',
        title: 'My_meetings',
        // subtitle: 'Unique dashboard designs',
        type: 'collapsable',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'Archived_meetings',
                title: 'Archived_meetings',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'The_existing_meeting',
                title: 'The_existing_meeting',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Meeting_data',
                title: 'Meeting_data',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytic1s',
            },
            {
                id: 'schedule_of_work',
                title: 'schedule_of_work',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Guest_suggestion',
                title: 'Guest_suggestion',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Apologies_for_not_attending',
                title: 'Apologies_for_not_attending',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Participation_in_meeting',
                title: 'Participation_in_meeting',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Determine_the_method_of_attendance',
                title: 'Guest_suggestion',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
        ],
    },

    {
        id: 'Managing_the_ongoing_meeting',
        title: 'Managing_the_ongoing_meeting',
       
        type: 'collapsable',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'Meeting_data',
                title: 'Meeting_data',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'Attendance_data',
                title: 'Attendance_data',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Building_the_agenda',
                title: 'Building_the_agenda',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytic1s',
            },
            {
                id: 'Schedule_a_meeting',
                title: 'Schedule_a_meeting',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Managing_the_meeting_participants',
                title: 'Managing_the_meeting_participants',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            
        ],
    },
    {
        id: 'Chaired_the_current_meeting',
        title: 'Chaired_the_current_meeting',
       
        type: 'collapsable',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'Decisions',
                title: 'Decisions',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'Absence_request',
                title: 'Absence_request',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            
        ],
    },

    {
        id: 'System_administration',
        title: 'System_administration',
       
        type: 'collapsable',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'Planned_tasks',
                title: 'Planned_tasks',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'Individuals',
                title: 'Individuals',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Committees',
                title: 'Committees',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Unarchive_meeting',
                title: 'Unarchive_meeting',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'Users_permissions',
                title: 'Users_permissions',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'System_indexes',
                title: 'System_indexes',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            
        ],
    },




];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'aside',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
