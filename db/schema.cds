using {cuid} from '@sap/cds/common';

namespace sap.capire;


entity PersonDetail : cuid {

    First_Name : String(60);
    Last_Name  : String(60);
    Email      : String;

    
}

entity EmployeementDetail : cuid {
    PersonID     : UUID;
    Position     : String;
    Salary       : Integer;
    StartDate    : Date;
    EndDate      : Date;

    // One-to-Many relationship with EmployeementDetail
    employment : Association to many PersonDetail
                     on employment.ID = PersonID;

}


// entity Student : cuid {
//     name  : String;
//     class : Integer;
// }

// entity Rack : cuid {
//     student_id : UUID;
//     my_stud    : Association to Student
//                      on my_stud.ID = student_id;
// }

// entity ManagedStudent : cuid {
//     name  : String;
//     class : Integer;
// }

// entity ManagedRack : cuid {
//     student : Association to ManagedStudent;
// }

// entity NoteBook{
//     key student_id : UUID;
//         student    : Association to Student
//                          on student.ID = student_id;
// }
