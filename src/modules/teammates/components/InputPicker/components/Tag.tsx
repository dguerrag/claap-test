import React from 'react';
import { EmailIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { PickerElement, validateEmailFormat } from '../InputPicker';
import { CircleLetter } from './CircleLetter';
import styles from './Tag.module.scss';


export const Tag = ({element, remove}: { element: PickerElement, remove: Function }) => (
	<div
		className={`${styles.tag} ${
			(!validateEmailFormat(element.value) && !element.valid) && styles.tagError
		}`}>
		{element.valid
			? <CircleLetter letter={element.value[0]}/>
			: <EmailIcon color={'#47475E'}/>
		}
		<Text>{element.value}</Text>
		<SmallCloseIcon onClick={() => remove(element.value)}
						cursor={'pointer'}
		/>
	</div>
);