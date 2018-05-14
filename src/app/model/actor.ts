export class Actor {
	
	Id: number;
	FirstName: string;
	LastName: string;
	Gender: string;
	BirthDate: Date;

	constructor(Id: number, FirstName: string, Gender: string, BirthDate: Date){
		this.Id = Id;
		this.FirstName = FirstName;
		this.Gender = Gender;
		this.BirthDate = BirthDate;
	}
}
