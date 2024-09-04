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
      'body': 'Roboto, sans-serif',
    },
    extend: {
      colors: {
        'penta-white': {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
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
          '50': '#eef7ff',
          '100': '#daecff',
          '200': '#bddeff',
          '300': '#90caff',
          '400': '#6ab3ff',
          '500': '#3589fc',
          '600': '#1f6af1',
          '700': '#1753de',
          '800': '#1944b4',
          '900': '#1a3d8e',
          '950': '#152756',
        },
        'penta-green': {
          '50': '#f1fcf4',
          '100': '#defae9',
          '200': '#bff3d2',
          '300': '#8ce9b0',
          '400': '#3bcf74',
          '500': '#2cbb64',
          '600': '#1f9a4e',
          '700': '#1c7941',
          '800': '#1b6036',
          '900': '#184f2f',
          '950': '#082b17',
        },
      }
    }
  }
}