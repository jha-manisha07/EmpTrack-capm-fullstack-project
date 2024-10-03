const { Integer } = require("@sap/cds/lib/linked/classes");
const { randomUUID } = require("crypto");

module.exports = cds.service.impl(async function () {
  const { PersonDetail, EmployeementDetail } = this.entities;

  // this.on("READ", "PersonDetails" , async (req) => {

  //   const {ID, First_Name, Last_Name, Email} = req.data
  //   var CQN = {
  //     SELECT: {
  //       from: { ref: ["sap_capire_PersonDetail"] },
  //       columns: [
  //         { ref: ["ID", "First_Name", "Last_Name", "Email"] },
  //         { val: ID, First_Name, Last_Name, Email },
  //       ],
  //     },
  //   };
  //   const result = await cds.run(CQN);
  //   return result;
  // });

  // this.before("CREATE", "EmplyeeD", async (req) => {
  //   console.log("employement detail create called");
  //   const { PersonID, Salary } = req.data;
  //   let p = await SELECT.from`sap_capire_PersonDetail`.where({ ID: PersonID });
  //   console.log("p is: ", p);
  //   if (p.length === 0) {
  //     req.error(
  //       400,
  //       "User doesn't exists. Please check your id"
  //     );
  //   }

  // });

  this.before("CREATE", "PersonD", async (req) => {
    console.log("employement detail created");
    const { First_Name, Last_Name, Email } = req.data;
    let p = await INSERT(First_Name, Last_Name, Email).into(
      sap_capire_PersonDetail
    );
    console.log("p is: ", p);
  });

  this.before("createPersonlByTemplate", async (req) => {
    console.log("createPersonlByTemplate:", req.data);
  });

  this.on("createPersonlByTemplate", async (req) => {
    try {
      const {
        First_Name,
        Last_Name,
        Email,
        Position,
        Salary,
        StartDate,
        EndDate,
      } = req.data;
      const id = randomUUID();
      console.log("id: ", id);

      console.log("on function of createPersonlByTemplate:");
      const pResult = await INSERT([
        { ID: id, First_Name, Last_Name, Email },
      ]).into("sap_capire_PersonDetail");
      console.log("presult:", pResult);
      const eId = randomUUID();
      const eResult = await INSERT([
        { ID: eId, PersonID: id, Position, Salary, StartDate, EndDate },
      ]).into("sap_capire_EmployeementDetail");

      return 1;
    } catch (Err) {
      console.log(`err`, Err);
      return -1;
    }
  });

  this.on("getAllPersonDetails", async (req) => {
    console.log("get all person details called");

    const result = await SELECT.from`sap.capire.EmployeementDetail`.columns(
      (b) => {
        // method: 1
        b.employment((e) => {
          e.ID, e.First_Name, e.Last_Name, e.Email;
        });
        // method: 2
        // b.employment.ID,
        //   b.employment.First_Name.as("First name"),
        //   b.employment.Last_Name,
        //   b.employment.Email,
          b.Position,
          b.Salary,
          b.StartDate,
          b.EndDate;
      }
    );

    console.log("result: ", result);
    return result;
  });
});
