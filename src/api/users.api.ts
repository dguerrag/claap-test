export enum FilterTypes {
	email = 'email',
	firstName = 'firstName',
	lastName = 'lastName'
}

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	id: string;
	filterBy?: FilterTypes;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ErrorRegex = /error/gi;

const Users: User[] = [
	{
		firstName: 'Tara',
		lastName: 'Halvik',
		id: (Math.random() * 1000).toString(),
		email: 'tom@claap.io'
	},
	{
		firstName: 'Tristan',
		lastName: 'Agosta',
		id: (Math.random() * 1000).toString(),
		email: 'lu.agosta@gmail.com'
	}
];

const normalize = (input: string): string => {
	return input.trim().toLowerCase();
};

export const searchUser = async (input: string): Promise<User[]> => {
	const normalized = normalize(input);

	await delay(100 + Math.random() * 100);

	if (normalized.match(ErrorRegex)) {
		throw new Error('Backend failed for some reasons.');
	}

	if (!normalized) {
		return [];
	}

	const test = Users
		.map((e) => {
			e.filterBy = normalize(e.firstName).startsWith(normalized) ? FilterTypes.firstName :
				normalize(e.lastName).startsWith(normalized) ? FilterTypes.lastName :
					normalize(e.email).startsWith(normalized) ? FilterTypes.email : undefined;
			return e;
		})
		.filter((e) => !!e.filterBy);

	return [...test, ...test, ...test]
};