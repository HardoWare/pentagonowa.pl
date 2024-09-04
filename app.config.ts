export default defineAppConfig({
  ui: {
    primary: 'penta-white',
    gray: 'cool',
    strategy: 'merge',
    button: {
      variant: {
        ghost: 'dark:text-{color}-200',
        soft: 'dark:text-{color}-200',
      },
    },
    horizontalNavigation: {
      active: 'dark:after:bg-primary-200',
      icon: {
        active: 'dark:text-primary-200',
        base: 'text-black'
      }
    },
    notifications: {
      position: 'bottom-0',
    },
  },
})