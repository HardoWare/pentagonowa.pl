import type { Config } from 'tailwindcss'
export default <Partial<Config>> {
  override: true,
  content: [
    `~/components/**/*.{vue,js,ts}`,
    `~/content/**/*.{md,yaml}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/app.vue`,
    `~/error.vue`,
  ],
  darkMode: 'class',
  variants: {},
  plugins: [],
  theme: {
    fontFamily: {
      // 'body': 'Roboto, sans-serif',
    },
    extend: {
      colors: {
        'primary': {},
        'penta-red': {
          '50': '#ffefef',
          '100': '#ffdcdc',
          '200': '#ffbfbf',
          '300': '#ff9292',
          '400': '#ff5454',
          '500': '#ff1f1f',
          '600': '#ff0000',
          '700': '#db0000',
          '800': '#ad0000',
          '900': '#940808',
          '950': '#520000',
        },
        'penta-blue': {
          '50': '#ffefef',
          '100': '#ffdcdc',
          '200': '#ffbfbf',
          '300': '#ff9292',
          '400': '#ff5454',
          '500': '#ff1f1f',
          '600': '#ff0000',
          '700': '#db0000',
          '800': '#ad0000',
          '900': '#940808',
          '950': '#520000',
        },
        'penta-green': {
          '50': '#ffefef',
          '100': '#ffdcdc',
          '200': '#ffbfbf',
          '300': '#ff9292',
          '400': '#ff5454',
          '500': '#ff1f1f',
          '600': '#ff0000',
          '700': '#db0000',
          '800': '#ad0000',
          '900': '#940808',
          '950': '#520000',
        },
      }
    }
  }
}