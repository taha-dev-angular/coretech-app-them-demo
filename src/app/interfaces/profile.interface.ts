export interface Profile{
    FirstName:string;
    MiddleName:string;
    LastName :string;
    DOB:Date;
    Email :string;
    Phone:string;
    Mobile :string;
    WorkPhone :string;
    Company :string;
    PersonalPhoto:string;
    Gender:Gender;
    Address :string;
}

export enum Gender{
    Male = "Male",
    Female = "Female",
   
}