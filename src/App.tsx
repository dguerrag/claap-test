import * as React from 'react';
import { Box, ChakraProvider, Grid, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { TeammatesDashboard } from './modules/teammates/Teammates-dashboard';
import { theme } from './styles/ui';


export const App = () => (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh">
					<ColorModeSwitcher justifySelf="flex-end"/>
					<VStack spacing={8}>
						<TeammatesDashboard/>
					</VStack>
				</Grid>
			</Box>
		</ChakraProvider>
	);
