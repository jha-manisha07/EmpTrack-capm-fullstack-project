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



