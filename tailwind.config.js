/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        maxHeight: {
            'screen-minus-64': 'calc(100dvh - 64px)',
            'screen-minus-72': 'calc(100dvh - 72px)',
        },
        fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'f-8': '8px',
  			'f-10': '10px',
  			'f-11': '11px',
  			'f-12': '12px',
  			'f-13': '13px',
  			'f-14': '14px',
  			'f-15': '15px',
  			'f-16': '16px',
  			'f-17': '17px',
  			'f-18': '18px',
  			'f-19': '19px',
  			'f-20': '20px',
  			'f-24': '24px',
  			'f-28': '28px',
  			'f-32': '32px',
  			'f-40': '40px',
  			'f-56': '56px',
  			'f-72': '72px'
  		},
        animation: {
            spin: 'spin 0.8s linear infinite',
        },
    },
  },
  plugins: [],
};