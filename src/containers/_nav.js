
export default {
  items: [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Trang chủ',
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
          name: 'Bác Sĩ',
          meta: 'forAdmin',
          to: '/doctors',
          icon: 'cil-pencil'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Bệnh nhân',
          meta: 'forAdmin',
          to: '/patients',
          icon: 'cil-pencil'
        },
        {
          _name: 'CSidebarNavTitle',
          _children: ['Chăm sóc sức khỏe'],
          meta: 'forUser',
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Lịch khám',
          route: '/meetings',
          icon: 'cil-calendar',
          meta: 'forUser',
          items: [
            {
              name: 'Đặt lịch khám',
              to: '/meetings/create'
            },
            {
              name: 'Lịch khám của bạn',
              to: '/meetings/yours',
              badge: {
                color: 'primary',
                text: 'NEW'
              }
            }
          ],
          
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Trạng thái sức khỏe',
          route: '/health',
          icon: 'cil-drop',
          meta: 'forUser',
          items: [
            {
              name: 'Trạng thái sức khỏe',
              to: '/health/yours'
            },
            {
              name: 'Trợ lý của bạn',
              to: 'health/chatbot',
              badge: {
                color: 'primary',
                text: 'NEW'
              }
            },
            
          ],
          
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Ví điện tử',
          to: '/wallet',
          icon: 'cil-drop',
          meta: 'forUser',
          badge: {
            color: 'primary',
            text: 'NEW'
          }
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
        }
      ]
    }
  ]
}