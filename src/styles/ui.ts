import { extendTheme } from '@chakra-ui/react';
import { Button } from './button.ui';
import { Text } from './text.ui';
import { Modal } from './modal.ui';

export enum ThemeModes {
	DARK = 'dark',
	LIGHT = 'light'
}

export const theme = extendTheme({
	styles: {
		global: {
			'*': {
				// fontFamily: 'Rubik'
			},
			'html, body': {
				fontSize: 'sm',
				lineHeight: 'base'
			}
		}
	},
	colors: {
		brand: {
			100: '#E7ECF0',
			500: '#47475E',
			600: 'rgba(71, 71, 94, 0.8)'
		},
		brandDark: {
			500: '#2C54EA',
			600: 'rgba(44, 84, 234, 0.8)'
		}
	},
	components: {
		Button,
		Text,
		Modal
	}
});