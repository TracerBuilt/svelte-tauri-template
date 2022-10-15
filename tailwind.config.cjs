const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontSize: {
			xs: 'var(--step--2)',
			sm: 'var(--step--1)',
			base: 'var(--step-0)',
			lg: 'var(--step-1)',
			xl: 'var(--step-2)',
			'2xl': 'var(--step-3)',
			'3xl': 'var(--step-4)',
			'4xl': 'var(--step-5)',
			'5xl': 'var(--step-6)',
			'6xl': 'var(--step-7)',
			'7xl': 'var(--step-8)',
			'8xl': 'var(--step-9)',
			'9xl': 'var(--step-10)'
		},

		colors: {
			white: '#f8fafb',
			black: '#121210',
			grey: {
				0: 'oklch(98.39% 0.003 228.78 / <alpha-value>)',
				1: 'oklch(96.62% 0.003 247.86 / <alpha-value>)',
				2: 'oklch(94.51% 0.003 247.86 / <alpha-value>)',
				3: 'oklch(91.61% 0.005 214.33 / <alpha-value>)',
				4: 'oklch(87.28% 0.006 223.46 / <alpha-value>)',
				5: 'oklch(77.32% 0.007 233.67 / <alpha-value>)',
				6: 'oklch(68.68% 0.005 228.86 / <alpha-value>)',
				7: 'oklch(60.32% 0.005 197.03 / <alpha-value>)',
				8: 'oklch(51.78% 0.004 174.36 / <alpha-value>)',
				9: 'oklch(43.33% 0.003 128.55 / <alpha-value>)',
				10: 'oklch(34.74% 0.005 106.66 / <alpha-value>)',
				11: 'oklch(26.3% 0.007 106.89 / <alpha-value>)',
				12: 'oklch(18.14% 0.004 106.79 / <alpha-value>)'
			},

			red: {
				0: 'oklch(97.79% 0.0108 17.340 / <alpha-value>)',
				1: 'oklch(93.87% 0.031 17.715 / <alpha-value>)',
				2: 'oklch(88.34% 0.062 18.387 / <alpha-value>)',
				3: 'oklch(81.69% 0.103 19.53 / <alpha-value>)',
				4: 'oklch(75.63% 0.146 21.105 / <alpha-value>)',
				5: 'oklch(71.16% 0.181 22.84 / <alpha-value>)',
				6: 'oklch(67.06% 0.204 24.52 / <alpha-value>)',
				7: 'oklch(63.24% 0.214 25.84 / <alpha-value>)',
				8: 'oklch(59.28% 0.211 26.53 / <alpha-value>)',
				9: 'oklch(54.57% 0.195 26.61 / <alpha-value>)',
				10: 'oklch(49.57% 0.175 26.46 / <alpha-value>)',
				11: 'oklch(44.25% 0.154 26.22 / <alpha-value>)',
				12: 'oklch(38.87% 0.134 26.07 / <alpha-value>)'
			},

			pink: {
				0: 'oklch(96.86% 0.018 351.142 / <alpha-value>)',
				1: 'oklch(93.15% 0.04 352.16 / <alpha-value>)',
				2: 'oklch(87.18% 0.071 355.09 / <alpha-value>)',
				3: 'oklch(80.8% 0.11 357.15 / <alpha-value>)',
				4: 'oklch(74.96% 0.147 358.8 / <alpha-value>)',
				5: 'oklch(69.24% 0.177 1.25 / <alpha-value>)',
				6: 'oklch(63.96% 0.197 3.19 / <alpha-value>)',
				7: 'oklch(58.81% 0.201 5.25 / <alpha-value>)',
				8: 'oklch(53.89% 0.193 6.48 / <alpha-value>)',
				9: 'oklch(47.97% 0.172 6.83 / <alpha-value>)',
				10: 'oklch(42.48% 0.151 6.38 / <alpha-value>)',
				11: 'oklch(37.11% 0.129 5.58 / <alpha-value>)',
				12: 'oklch(31.24% 0.106 4.62 / <alpha-value>)'
			},

			purple: {
				0: ' / <alpha-value>oklch(96.48% 0.018 314.74)',
				1: 'oklch(91.65% 0 / <alpha-value>.052 319.03)',
				2: 'oklch(86.3% 0.096 319.46 / <alpha-value>)',
				3: 'oklch(79.04% 0.152 319.77 / <alpha-value>)',
				4: 'oklch(72.52% 0.196 319.53 / <alpha-value>)',
				5: 'oklch(66.95% 0.219 319.07 / <alpha-value>)',
				6: 'oklch(62.39% 0.225 318.91 / <alpha-value>)',
				7: 'oklch(57.83% 0.219 319.15 / <alpha-value>)',
				8: 'oklch(53.33% 0.203 319 / <alpha-value>)',
				9: 'oklch(47.83% 0.181 318.86 / <alpha-value>)',
				10: 'oklch(42.1% 0.157 319.11 / <alpha-value>)',
				11: 'oklch(36.25% 0.133 318.93 / <alpha-value>)',
				12: 'oklch(30.21% 0.106 319.2 / <alpha-value>)'
			},
			violet: {
				0: 'oklch(96.18% 0.02 295.19 / <alpha-value>)',
				1: 'oklch(91.05% 0.049 298.110 / <alpha-value>)',
				2: 'oklch(84.05% 0.089 296.604 / <alpha-value>)',
				3: 'oklch(73.98% 0.144 294.45 / <alpha-value>)',
				4: 'oklch(65.77% 0.191 292.12 / <alpha-value>)',
				5: 'oklch(60.29% 0.218 289.69 / <alpha-value>)',
				6: 'oklch(56.92% 0.229 288.56 / <alpha-value>)',
				7: 'oklch(54.21% 0.227 287.8 / <alpha-value>)',
				8: 'oklch(51.2% 0.218 287.54 / <alpha-value>)',
				9: 'oklch(48.12% 0.198 288.16 / <alpha-value>)',
				10: 'oklch(43.61% 0.178 287.97 / <alpha-value>)',
				11: 'oklch(39% 0.156 288.51 / <alpha-value>)',
				12: 'oklch(34.34% 0.134 288.98 / <alpha-value>)'
			},
			indigo: {
				0: 'oklch(96.12% 0.018 269.09 / <alpha-value>)',
				1: 'oklch(92.04% 0.038 270.98 / <alpha-value>)',
				2: 'oklch(84.11% 0.078 273.497 / <alpha-value>)',
				3: 'oklch(74.73% 0.129 272.266 / <alpha-value>)',
				4: 'oklch(67.99% 0.163 271.04 / <alpha-value>)',
				5: 'oklch(62.8% 0.191 269.5 / <alpha-value>)',
				6: 'oklch(58.96% 0.205 268.62 / <alpha-value>)',
				7: 'oklch(55.66% 0.208 268.35 / <alpha-value>)',
				8: 'oklch(52.56% 0.199 268.04 / <alpha-value>)',
				9: 'oklch(48.41% 0.188 269.07 / <alpha-value>)',
				10: 'oklch(43.76% 0.169 269.4 / <alpha-value>)',
				11: 'oklch(39.27% 0.149 269.56 / <alpha-value>)',
				12: 'oklch(34.55% 0.127 269.77 / <alpha-value>)'
			},
			blue: {
				0: 'oklch(96.27% 0.02 238.66 / <alpha-value>)',
				1: 'oklch(92.66% 0.039 240.01 / <alpha-value>)',
				2: 'oklch(86.02% 0.076 241.665 / <alpha-value>)',
				3: 'oklch(78.2% 0.115 243.83 / <alpha-value>)',
				4: 'oklch(71.8% 0.142 246.06 / <alpha-value>)',
				5: 'oklch(66.89% 0.157 248.32 / <alpha-value>)',
				6: 'oklch(62.59% 0.164 250.29 / <alpha-value>)',
				7: 'oklch(58.56% 0.159 251.26 / <alpha-value>)',
				8: 'oklch(54.26% 0.149 251.67 / <alpha-value>)',
				9: 'oklch(49.72% 0.133 251.59 / <alpha-value>)',
				10: 'oklch(44.32% 0.117 251.19 / <alpha-value>)',
				11: 'oklch(38.85% 0.1 251.3 / <alpha-value>)',
				12: 'oklch(33.09% 0.082 250.66 / <alpha-value>)'
			},
			cyan: {
				0: 'oklch(96.89% 0.024 203.08 / <alpha-value>)',
				1: 'oklch(94.05% 0.05 202.5 / <alpha-value>)',
				2: 'oklch(88.56% 0.079 204.84 / <alpha-value>)',
				3: 'oklch(82.43% 0.106 206.82 / <alpha-value>)',
				4: 'oklch(77% 0.119 207.56 / <alpha-value>)',
				5: 'oklch(72% 0.119 211.22 / <alpha-value>)',
				6: 'oklch(67.77% 0.114 210.62 / <alpha-value>)',
				7: 'oklch(62.49% 0.106 212.19 / <alpha-value>)',
				8: 'oklch(56.75% 0.097 213.4 / <alpha-value>)',
				9: 'oklch(50.9% 0.087 215.07 / <alpha-value>)',
				10: 'oklch(43.77% 0.074 214.34 / <alpha-value>)',
				11: 'oklch(36.38% 0.061 214.76 / <alpha-value>)',
				12: 'oklch(28.54% 0.046 213.38 / <alpha-value>)'
			},
			teal: {
				0: '#e6fcf5',
				1: '#c3fae8',
				2: '#96f2d7',
				3: '#63e6be',
				4: '#38d9a9',
				5: '#20c997',
				6: '#12b886',
				7: '#0ca678',
				8: '#099268',
				9: '#087f5b',
				10: '#066649',
				11: '#054d37',
				12: '#033325'
			},
			green: {
				0: '#ebfbee',
				1: '#d3f9d8',
				2: '#b2f2bb',
				3: '#8ce99a',
				4: '#69db7c',
				5: '#51cf66',
				6: '#40c057',
				7: '#37b24d',
				8: '#2f9e44',
				9: '#2b8a3e',
				10: '#237032',
				11: '#1b5727',
				12: '#133d1b'
			},

			lime: {
				0: '#f4fce3',
				1: '#e9fac8',
				2: '#d8f5a2',
				3: '#c0eb75',
				4: '#a9e34b',
				5: '#94d82d',
				6: '#82c91e',
				7: '#74b816',
				8: '#66a80f',
				9: '#5c940d',
				10: '#4c7a0b',
				11: '#3c6109',
				12: '#2c4706'
			},

			yellow: {
				0: '#fff9db',
				1: '#fff3bf',
				2: '#ffec99',
				3: '#ffe066',
				4: '#ffd43b',
				5: '#fcc419',
				6: '#fab005',
				7: '#f59f00',
				8: '#f08c00',
				9: '#e67700',
				10: '#b35c00',
				11: '#804200',
				12: '#663500'
			},

			orange: {
				0: '#fff4e6',
				1: '#ffe8cc',
				2: '#ffd8a8',
				3: '#ffc078',
				4: '#ffa94d',
				5: '#ff922b',
				6: '#fd7e14',
				7: '#f76707',
				8: '#e8590c',
				9: '#d9480f',
				10: '#bf400d',
				11: '#99330b',
				12: '#802b09'
			},

			choco: {
				0: '#fff8dc',
				1: '#fce1bc',
				2: '#f7ca9e',
				3: '#f1b280',
				4: '#e99b62',
				5: '#df8545',
				6: '#d46e25',
				7: '#bd5f1b',
				8: '#a45117',
				9: '#8a4513',
				10: '#703a13',
				11: '#572f12',
				12: '#3d210d'
			},

			brown: {
				0: '#faf4eb',
				1: '#ede0d1',
				2: '#e0cab7',
				3: '#d3b79e',
				4: '#c5a285',
				5: '#b78f6d',
				6: '#a87c56',
				7: '#956b47',
				8: '#825b3a',
				9: '#6f4b2d',
				10: '#5e3a21',
				11: '#4e2b15',
				12: '#422412'
			},

			sand: {
				0: '#f8fafb',
				1: '#e6e4dc',
				2: '#d5cfbd',
				3: '#c2b9a0',
				4: '#aea58c',
				5: '#9a9178',
				6: '#867c65',
				7: '#736a53',
				8: '#5f5746',
				9: '#4b4639',
				10: '#38352d',
				11: '#252521',
				12: '#121210'
			}
		},

		extend: {
			fontFamily: {
				serif: ['adobe-caslon-pro', ...defaultTheme.fontFamily.serif],
				sans: ['p22-underground', ...defaultTheme.fontFamily.sans],
				'sans-sc': ['p22-underground-sc', 'p22-underground', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('tailwindcss-opentype')]
}
