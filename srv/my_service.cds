using {sap.capire as detail} from '../db/schema';

service PersonDetailService {

    entity PersonD  as projection on detail.PersonDetail;
    entity EmplyeeD as projection on detail.EmployeementDetail;

    action   createPersonlByTemplate(First_Name : String(60),
                                     Last_Name : String(60),
                                     Email : String,
                                     Position : String,
                                     Salary : Integer,
                                     StartDate : Date,
                                     EndDate : Date) returns Integer;

    function getAllPersonDetails()                   returns array of {
        First_Name : String(60);
        Last_Name : String(60);
        Email : String;
        Position : String;
        Salary : Integer;
        StartDate : Date;
        EndDate : Date;
    };
}

// service EmployeementDetailService {

//     // entity EmplyeeD  as projection on detail.EmployeementDetail;
//     entity Stud  as projection on detail.Student;
//     entity NoteBook as projection on detail.NoteBook;

// }
