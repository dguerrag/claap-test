import React, { useEffect, useRef, useState } from 'react';
import styles from './InputPicker.module.scss';
import { Button } from '@chakra-ui/react';
import { InputPopOver } from './Popover';
import { Tag } from './components/Tag';


export type PickerElement = {
	value: string;
	valid?: boolean;
}

export const validateEmailFormat = (value: any) => {
	const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	return expression.test(value);
};

export const InputPicker = () => {
	const [focus, setFocus] = useState(false);
	const [error, setError] = useState(false);
	const [value, setValue] = useState('');

	const [elements, setElements]: [PickerElement[], Function] = useState([]);
	const inputRef: any = useRef(null);


	const focusInput = () => {
		inputRef.current.focus();
	};

	const resetInput = (elements: any) => {
		if (!elements.length && !inputRef.current.value.length) {
			inputRef.current.style.width = '175px';
		} else {
			inputRef.current.style.width =
				(inputRef.current.value.length + 1) * 10 + 'px';
		}
	};

	const removeElement = (val: string) => {
		const newElements = [...elements.filter((e: any) => e.value !== val)];
		setElements(newElements);
		resetInput(newElements);
	};

	const onEmailChange = (e: any, blur = false) => {
		if (
			e.target.value.trim().length &&
			(e.keyCode === 32 || e.keyCode === 13 || blur)
		) {
			setElements([...elements, {value: e.target.value.trim()}]);
			setValue('');
			inputRef.current.style.width = '8px';
			return;
		}
		resetInput(elements);
	};

	const cleanEmail = (e: any) => {
		if (e.keyCode === 8 && e.target.value === '') {
			setElements([...elements.slice(0, -1)]);
		}
		resetInput(elements);
	};

	const setElement = (e: PickerElement) => {
		setElements([...elements, e]);
		setValue('');
	};


	useEffect(() => {
		const emailsWithErrors = elements.some((e: any) => !validateEmailFormat(e.value) && !e.valid);
		setError(emailsWithErrors);
	}, [elements]);

	return (
		<>
			<form className={styles.container}>
				<div className={styles.inputWrapper}>
					<div
						className={`${styles.emails} ${focus && styles.focus} ${
							error && styles.error
						}`}
						onClick={focusInput}>
						{elements.map((e: PickerElement, i: number) => (
							<Tag
								key={i}
								element={e}
								remove={removeElement}
							/>
						))}
						<input
							type={'text'}
							id={'create-team-invite-members'}
							name={'emails'}
							placeholder={
								!elements.length ? 'Search names or emails...' : ''
							}
							onFocus={() => setFocus(true)}
							value={value}
							onChange={(e) => setValue(e.target.value)}
							onKeyUp={onEmailChange}
							onKeyDown={cleanEmail}
							autoComplete={'off'}
							ref={inputRef}
							data-emails={!!elements.length}
						/>
					</div>
					<InputPopOver search={value} select={setElement} elements={elements}/>
				</div>
				<Button
					type={'submit'}
					disabled={!elements.length || error}>
					Invite
				</Button>
			</form>
		</>
	);
};
