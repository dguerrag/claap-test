import { ThemeModes } from './ui';

export const Text = {
	baseStyle: ({colorMode}: any) => ({
		color: colorMode === ThemeModes.DARK ? '#DBE1E6' : '#47475E'
	}),
	variants: {
		heading: {
			fontSize: '24px',
			fontWeight: 'bold',
			textAlign: 'center'
		},
		subHeading: {
			fontSize: '16px'
		},
		description: (prop: any) => ({
			fontSize: '12px',
			color: prop.colorMode === 'dark' ? '#8C9DB5' : '#B6C1D0'
		})
	}
};