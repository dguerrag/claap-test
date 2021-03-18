import * as React from 'react';
import { IconButton, IconButtonProps, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeModes } from './styles/ui';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const {toggleColorMode} = useColorMode();
	const text = useColorModeValue(ThemeModes.DARK, ThemeModes.LIGHT);
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			size="md"
			fontSize="lg"
			variant="ghost"
			color="current"
			marginLeft="2"
			onClick={toggleColorMode}
			icon={<SwitchIcon/>}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	);
};
