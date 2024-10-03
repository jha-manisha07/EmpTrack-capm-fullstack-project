sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],

  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("test.capm.app.test.controller.View1", {
      onInit: function () {},

      OnPressSave: function () {
        var Fname = this.getView().byId("Input1").getValue();
        var Lname = this.getView().byId("Input2").getValue();
        var Email = this.getView().byId("Input3").getValue();
        var Position = this.getView().byId("Input4").getValue();
        var Salary = this.getView().byId("Input5").getValue();
        var StartDate = this.getView().byId("Input6").getValue();
        var EndDate = this.getView().byId("Input7").getValue();
        var sPath = "/createPersonlByTemplate";

        // console.log("entries", Fname, Lname, Email, Position, Salary, StartDate, EndDate);/
        var oPayload = {
          First_Name: Fname,
          Last_Name: Lname,
          Email: Email,
          Position: Position,
          Salary: Salary,
          StartDate: StartDate,
          EndDate: EndDate,
        };

        var oModel = this.getView().getModel();
        oModel.create(sPath, oPayload, {
          success: function (oResponse) {
            console.log("oResponse", oResponse);
            MessageToast.show("Record Created successfully");
          }.bind(this),

          error: function (oError) {
            console.log("oError", oError);
            MessageToast.show("Record not Created");
          }.bind(this),
        });
      },
    });
  }
);
