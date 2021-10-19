export interface IUser {

	cell: string;

	dob: {
		date: Date;
		age: number;
	}

	email: string;

	gender: string;

	 name: {
			title: string;
			first: string;
			last: string;
	};

	phone: string;

	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	}

}

