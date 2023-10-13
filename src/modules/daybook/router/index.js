export default {

    path:'/daybook',
    name: 'daybook',
    component: () => import(/*webpackChunkName: "daybook "*/ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/*webpackChunkName: "no-entryselected "*/ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/*webpackChunkName: "no-entryselected "*/ '@/modules/daybook/views/EntryView'),
        }
    ]

}