import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        GarnettRegular: ['GarnettRegular', 'sans-serif'],
        GarnettSemibold: ['GarnettSemibold', 'sans-serif']
      },
      colors: {
        amBrandBlue: {
          DEFAULT: '#0B2343'
        },
        heroBlue: {
          DEFAULT: '#004990'
        },
        heroText: {
          DEFAULT: '#71C3F1'
        },
        amBlueInnovationBar: {
          DEFAULT: '#689DFA'
        },
        amMediumBlue: {
          DEFAULT: ' #0256E6'
        },
        amBlueInnovation: {
          DEFAULT: '#035CF7'
        },
        amLightBlue: {
          DEFAULT: '#007CC2'
        },
        amBluePremium: {
          DEFAULT: '#020C41'
        },
        amTransparentInnovation: {
          DEFAULT: '#F3F7FF'
        },
        amBlueInnovationUltraLight: {
          DEFAULT: '#E6EFFE'
        },
        amLightBlue10: {
          DEFAULT: 'rgba(0, 124, 194, 0.1)'
        },
        amRed: {
          DEFAULT: '#E91B2F'
        },
        amRoseMexican: {
          DEFAULT: '#FA0073'
        },
        amWhite: {
          DEFAULT: '#FFFFFF'
        },
        amTeal: {
          DEFAULT: '#1B8198'
        },
        amLightGray: {
          DEFAULT: '#999999'
        },
        amTurquesa: {
          DEFAULT: '#07E7CC'
        },
        amNewLightGray: {
          DEFAULT: '#BFBFBD'
        },
        amLighterGray: {
          DEFAULT: '#E5E5E5'
        },
        amNewLighterGray: {
          DEFAULT: '#D9D9D7'
        },
        amLightGray80: {
          DEFAULT: 'rgba(255, 255, 255, 0.6)'
        },
        amUltraLightGray: {
          DEFAULT: '#D6D6D6'
        },
        amDarkGray: {
          DEFAULT: '#666666'
        },
        amGreen: {
          DEFAULT: '#48A83E'
        },
        amHelperGreen: {
          DEFAULT: '#58A633'
        },
        amHelperYellow: {
          DEFAULT: '#FFF7E9'
        },
        amGreen10: {
          DEFAULT: 'rgba(72, 168, 62, 0.1)'
        },
        searchBackground: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)'
        },
        searchBorder: {
          DEFAULT: 'rgba(255, 255, 255, 0.2)'
        },
        separator: {
          DEFAULT: 'rgba(255, 255, 255, 0.3)'
        },
        rowBorder: {
          DEFAULT: '#E5E5E5'
        },
        graySideBar: {
          DEFAULT: 'rgba(0, 73, 144, 0.07)'
        },
        grayBackground: {
          DEFAULT: '#F7F7F7'
        },
        amConsistenceBlue: {
          DEFAULT: '#030D75'
        },
        usersBlue: {
          DEFAULT: '#EBF5FA'
        },
        successBorder: {
          DEFAULT: 'rgba(255, 255, 255, 0.2)'
        },
        linkColor: {
          DEFAULT: '#007cc2'
        },
        amUltraLightBlue: {
          DEFAULT: '#007CC220'
        },
        amBluePolicies: {
          DEFAULT: '#0000E3'
        },
        amRedHelpers: {
          DEFAULT: '#F7391B'
        },
        amShadesGray: {
          DEFAULT: '#F3F3F5'
        },
        amYellow: {
          DEFAULT: '#FBAF28'
        }
      },
      animation: {
        show: 'show .2s',
        slide: 'slide .5s ease-out'
      },
      keyframes: {
        show: {
          from: { transform: 'scale(0); opacity:0; z-index: -1' },
          to: { transform: 'scale(1); opacity:1; z-index: 10' }
        },
        slide: {
          from: { transform: 'translateX(130%);' },
          to: { transform: 'translateX(0%);' }
        }
      },
      width: {
        500: '544px',
        sectionDesktop: '1120px',
        1120: '1120px'
      },
      maxWidth: {
        sectionDesktop: '1120px',
        1120: '1120px'
      },
      height: {
        450: '450px',

        screen65: '65vh'
      }
    }
  },

  plugins: [forms, typography]
}
