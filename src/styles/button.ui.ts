import { ThemeModes } from './ui';


export const Button = {
	variants: {
		solid: ({colorMode}: any) => ({
			bg: colorMode === ThemeModes.DARK ? 'brandDark.500' : 'brand.500',
			color: colorMode === ThemeModes.DARK ? 'white' : 'brand.100',
			fontWeight: 'bold',
			lineHeight: 'base',
			_hover: {
				bg: colorMode === ThemeModes.DARK ? 'brandDark.600' : 'brand.600'
			},
			_focus: {
				bg: colorMode === ThemeModes.DARK ? 'brandDark.500' : 'brand.500'
			}
		})
	}
};