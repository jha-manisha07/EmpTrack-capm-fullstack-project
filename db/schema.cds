using {cuid} from '@sap/cds/common';

entity PersonDetail : cuid {

    First_Name : String(60);
    Last_Name  : String(60);
    DOB        : Date;
}

entity EmployeementDetail: cuid{
    Email : String;
    Position : String;
    Salary   : Integer;
}
