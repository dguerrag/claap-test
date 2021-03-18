import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { InviteModal } from './components/InviteModal';

export const TeammatesDashboard = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Invite Teammates</Button>
			<InviteModal onClose={() => setOpen(false)}
						 open={open}/>
		</>
	);
};