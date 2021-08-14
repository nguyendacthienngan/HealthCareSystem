
export default {
  items: [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          meta: 'forUser',
          to: '/dashboard',
          icon: 'cil-speedometer',
          badge: {
            color: 'primary',
            text: 'NEW'
          }
        },
        {
          _name: 'CSidebarNavTitle',
          meta: 'forAdmin',
          _children: ['Quản lý thông tin']
        },
        {
          _name: 'CSidebarNavItem',
          name: 'A',
          meta: 'forAdmin',
          to: '/theme/typography',
          icon: 'cil-pencil'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'A',
          meta: 'forAdmin',
          to: '/theme/typography',
          icon: 'cil-pencil'
        },
        {
          _name: 'CSidebarNavTitle',
          _children: ['Theme'],
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Colors',
          to: '/theme/colors',
          icon: 'cil-drop',
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Typography',
          to: '/theme/typography',
          icon: 'cil-pencil',
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavTitle',
          _children: ['Components'],
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Base',
          route: '/base',
          icon: 'cil-puzzle',
          meta: 'forUser',
          items: [
            {
              name: 'Breadcrumbs',
              to: '/base/breadcrumbs'
            },
            {
              name: 'Cards',
              to: '/base/cards'
            },
            {
              name: 'Carousels',
              to: '/base/carousels'
            }, 
            {
              name: 'Collapses',
              to: '/base/collapses'
            },
            {
              name: 'Forms',
              to: '/base/forms'
            },
            {
              name: 'Jumbotrons',
              to: '/base/jumbotrons'
            },
            {
              name: 'List Groups',
              to: '/base/list-groups'
            },
            {
              name: 'Navs',
              to: '/base/navs'
            },
            {
              name: 'Navbars',
              to: '/base/navbars'
            },
            {
              name: 'Paginations',
              to: '/base/paginations'
            },
            {
              name: 'Popovers',
              to: '/base/popovers'
            },
            {
              name: 'Progress Bars',
              to: '/base/progress-bars'
            },
            {
              name: 'Switches',
              to: '/base/switches'
            },
            {
              name: 'Tables',
              to: '/base/tables'
            },
            {
              name: 'Tabs',
              to: '/base/tabs'
            },
            {
              name: 'Tooltips',
              to: '/base/tooltips'
            }
          ]
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Buttons',
          route: '/buttons',
          icon: 'cil-cursor',
          meta: 'forUser',
          items: [
            {
              name: 'Buttons',
              to: '/buttons/standard-buttons'
            },
            {
              name: 'Button Dropdowns',
              to: '/buttons/dropdowns'
            },
            {
              name: 'Button Groups',
              to: '/buttons/button-groups'
            },
            {
              name: 'Brand Buttons',
              to: '/buttons/brand-buttons'
            }
          ]
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Charts',
          to: '/charts',
          icon: 'cil-chart-pie',
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Icons',
          route: '/icons',
          icon: 'cil-star',
          meta: 'forUser',
          items: [
            {
              name: 'CoreUI Icons',
              to: '/icons/coreui-icons',
              badge: {
                color: 'info',
                text: 'NEW'
              }
            },
            {
              name: 'Brands',
              to: '/icons/brands'
            },
            {
              name: 'Flags',
              to: '/icons/flags'
            }
          ]
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Notifications',
          route: '/notifications',
          icon: 'cil-bell',
          meta: 'forUser',
          items: [
            {
              name: 'Alerts',
              to: '/notifications/alerts'
            },
            {
              name: 'Badges',
              to: '/notifications/badges'
            },
            {
              name: 'Modals',
              to: '/notifications/modals'
            }
          ]
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Widgets',
          to: '/widgets',
          icon: 'cil-calculator',
          meta: 'forUser',
          badge: {
            color: 'primary',
            text: 'NEW',
            shape: 'pill'
          }
        },
        {
          _name: 'CSidebarNavDivider',
          _class: 'm-2',
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavTitle',
          _children: ['Extras'],
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Pages',
          route: '/pages',
          icon: 'cil-star',
          meta: 'forUser',
          items: [
            {
              name: 'Login',
              to: '/pages/login'
            },
            {
              name: 'Register',
              to: '/pages/register'
            },
            {
              name: 'Error 404',
              to: '/pages/404'
            },
            {
              name: 'Error 500',
              to: '/pages/500'
            }
          ]
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Download CoreUI',
          href: 'http://coreui.io/vue/',
          icon: { name: 'cil-cloud-download', class: 'text-white' },
          _class: 'bg-success text-white',
          target: '_blank',
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Try CoreUI PRO',
          href: 'http://coreui.io/pro/vue/',
          icon: { name: 'cil-layers', class: 'text-white' },
          _class: 'bg-danger text-white',
          target: '_blank',
          meta: 'forUser',
        }
      ]
    }
  ]
}