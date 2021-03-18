import { ThemeModes } from './ui';

export const Modal = {
	baseStyle: ({colorMode}: any) => ({
		dialog: {
			bg: colorMode === ThemeModes.DARK ? '#272D45' : 'white'
		}
	})
};