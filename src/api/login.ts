export const getAuthMenuListApi = () => {
  return {
    data: [
      {
        path: '/home/index',
        name: 'home',
        componentPath: '/home/index',
        meta: {
          icon: 'HomeFilled',
          title: '首页',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: true,
          isKeepAlive: true
        }
      },
      {
        path: '/directives',
        name: 'directives',
        redirect: '/directives/copy',
        meta: {
          icon: 'Briefcase',
          title: '自定义指令',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        },
        children: [
          {
            path: '/assembly/guide',
            name: 'guide',
            componentPath: '/assembly/guide/index',
            meta: {
              title: '复制指令',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          {
            path: '/assembly/guide',
            name: 'guide',
            componentPath: '/assembly/guide/index',
            meta: {
              title: '拖拽指令',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          {
            path: '/assembly/guide',
            name: 'guide',
            componentPath: '/assembly/guide/index',
            meta: {
              title: '防抖指令',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          {
            path: '/assembly/guide',
            name: 'guide',
            componentPath: '/assembly/guide/index',
            meta: {
              title: '节流指令',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          }
        ]
      },
      {
        path: '/assembly',
        name: 'assembly',
        redirect: '/assembly/guide',
        meta: {
          icon: 'Briefcase',
          title: '常用组件',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        },
        children: [
          {
            path: '/assembly/guide',
            name: 'guide',
            componentPath: '/assembly/guide/index',
            meta: {
              title: '引导页',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          {
            path: '/assembly/drag',
            name: 'drag',
            componentPath: '/assembly/drag/index',
            meta: {
              title: '拖拽组件',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          {
            path: '/assembly/tabs',
            name: 'tabs',
            componentPath: '/assembly/tabs/index',
            meta: {
              title: '标签页选择器',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            },
            children: [
              {
                path: '/assembly/tabs/detail/:id',
                name: 'tabsDetail',
                componentPath: '/assembly/tabs/detail',
                meta: {
                  title: 'tab详情',
                  activeMenu: '/assembly/tabs',
                  isLink: '',
                  icon: '',
                  isHide: true,
                  isFull: false,
                  isAffix: false,
                  isKeepAlive: true
                }
              }
            ]
          },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '文件上传',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          {
            path: '/assembly/filter',
            name: 'filterGroups',
            componentPath: '/assembly/filter/index',
            meta: {
              title: '分类选择器',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '树形筛选器',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '图片预览组件',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '图表组件',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          {
            path: '/assembly/countTo',
            name: 'countTo',
            componentPath: '/assembly/countTo/index',
            meta: {
              title: '数字动画组件',
              isLink: '',
              icon: '',
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          }
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '批量导入excel组件',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '高亮组件',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '粘性组件',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // },
          // {
          //   path: '/assembly/upload',
          //   name: 'drag',
          //   componentPath: '/assembly/drag/index',
          //   meta: {
          //     title: '富文本组件',
          //     isLink: '',
          //     icon: '',
          //     isHide: false,
          //     isFull: false,
          //     isAffix: false,
          //     isKeepAlive: true
          //   }
          // }
        ]
      }
    ]
  }
}
