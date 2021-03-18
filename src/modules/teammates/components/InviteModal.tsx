import { Modal, ModalBody, ModalContent, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { InputPicker } from './InputPicker/InputPicker';

type Props = {
	open: boolean;
	onClose: Function;
}
export const InviteModal = ({open, onClose}: Props) => {
	return (
		<Modal
			isOpen={open}
			onClose={() => onClose()}
			isCentered
			size={'xl'}>
			<ModalOverlay/>
			<ModalContent padding={'64px'}>
				<ModalBody>
					<Text variant={'heading'} marginBottom={'32px'}>
						Invite Members
					</Text>
					<VStack spacing={3}
							align={'stretch'}
							justify={'stretch'}>
						<Text variant={'subHeading'}>
							Email Invite
						</Text>
						<Text variant={'description'}>
							Send members an email invitation to join this workspace.
						</Text>
						<InputPicker/>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};