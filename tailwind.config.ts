import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'3xl': '-5px 6px 0 black',
			'pic-shadow':'-6px 4px 3px #3f703f',
			'button':'-4px 4px 0 #3f703f'
  		},
  		screens: {
  			sm: '480px',
  			md: '680px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			pulse1: 'pulse 1.5s infinite ease-in-out -0.3s',
			pulse2: 'pulse 1.5s infinite ease-in-out -0.1s',
			pulse3: 'pulse 1.5s infinite ease-in-out 0.1s',
			pulse4: 'pulse 1.5s infinite ease-in-out 0.3s',
			pulse5: 'pulse 1.5s infinite ease-in-out 0.5s',
		  },
		  keyframes: {
			pulse: {
			  '0%, 100%': {
				transform: 'scale(0.8)',
				backgroundColor: '#b3d4fc',
				boxShadow: '0 0 0 0 rgba(178, 212, 252, 0.7)',
			  },
			  '50%': {
				transform: 'scale(1.2)',
				backgroundColor: '#6793fb',
				boxShadow: '0 0 0 10px rgba(178, 212, 252, 0)',
			  },
			},
		},
  	}
  },
  
  plugins: [require("tailwindcss-animate"),plugin(function ({ addUtilities }) {
	addUtilities({
	  '.animation-delay--0.3s': { animationDelay: '-0.3s' },
	  '.animation-delay--0.1s': { animationDelay: '-0.1s' },
	  '.animation-delay-0.1s': { animationDelay: '0.1s' },
	  '.animation-delay-0.3s': { animationDelay: '0.3s' },
	  '.animation-delay-0.5s': { animationDelay: '0.5s' },
	});
  }),],
} satisfies Config;
