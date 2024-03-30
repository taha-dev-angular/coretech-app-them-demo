/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example22',
        title: 'example',
        type : 'basic',
        icon : 'mat_outline:cloud',
        link : '/example'
    },
    
    {
        id   : 'Nationalities',
        title: 'Nationalities',
        type : 'basic',
        icon : 'mat_outline:cloud',
        link : '/Nationalities'
    },
    {
        id   : 'Students',
        title: 'Students',
        type : 'basic',
        icon : 'mat_outline:cloud',
        link : '/Students'
    },
    // Nationalities
    {
        id      : 'dashboards',
        title   : 'Meettings',
        // subtitle: 'Unique dashboard designs',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'New_Meetings',
                title: 'New Meetings',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-check',
                link : '/dashboards/project',
            },
            {
                id   : 'Memebers',
                title: 'Memebers',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
            {
                id   : 'Memebers5',
                title: 'Memebers',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
            {
                id   : 'Memebers4',
                title: 'Memebers',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
           
           
        ],
    },
    {
        id      : 'dashboards',
        title   : 'Meettings',
        // subtitle: 'Unique dashboard designs',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'New_Meetings',
                title: 'New Meetings',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-check',
                link : '/dashboards/project',
            },
            {
                id   : 'Memebers',
                title: 'Memebers',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
            {
                id   : 'Memebers5',
                title: 'Memebers',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
            {
                id   : 'Memebers4',
                title: 'Memebers',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
           
           
        ],
    },
    {
        id   : 'example',
        title: 'Tasks',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example444'
    },
   
   
   
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'aside',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group',
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
