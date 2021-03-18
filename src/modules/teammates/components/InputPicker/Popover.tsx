import React, { useEffect, useState } from 'react';
import styles from './Popover.module.scss';
import { useDebounce } from '../../../../common/debounce';
import { FilterTypes, searchUser, User } from '../../../../api/users.api';
import { EmailIcon } from '@chakra-ui/icons';
import { PickerElement } from './InputPicker';
import { CircleLetter } from './components/CircleLetter';


type Props = {
	search: string;
	select: Function;
	elements: PickerElement[];
}
export const InputPopOver = ({search, select, elements}: Props) => {
	const debouncedSearch: string = useDebounce(search, 500);
	const [users, setUsers]: [User[], Function] = useState([]);

	useEffect(() => {
		(async () => {
			const usersSearch: User[] = await searchUser(debouncedSearch);
			setUsers(usersSearch
					.filter(e => !elements.some(({value}) => e.filterBy && value === e[e.filterBy])));
			}
		)();
	}, [debouncedSearch, elements]);

	return (
		search.length ?
			<div className={styles.container}>
				{users.map((e, i) =>
					<div key={i}
						 className={styles.user}
						 onClick={() => select({
							 value: e.filterBy && e[e.filterBy],
							 valid: true
						 })}>
						{e.filterBy === FilterTypes.email && <EmailIcon color={'#47475E'}/>}
						{e.filterBy && e.filterBy !== FilterTypes.email && <CircleLetter letter={e[e.filterBy][0]}/>}
						{e.filterBy && e[e.filterBy]}
					</div>)}
			</div>
			: <></>
	);
};
