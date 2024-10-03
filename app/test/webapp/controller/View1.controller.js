sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],

  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("test.capm.app.test.controller.View1", {
      onInit: function () {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("RouteView1")
          .attachPatternMatched(this.fnRouteMatched, this);
      },

      OnPressSave: function () {
        var Fname = this.getView().byId("Input1").getValue();
        var Lname = this.getView().byId("Input2").getValue();
        var Email = this.getView().byId("Input3").getValue();
        var Position = this.getView().byId("Input4").getValue();
        var Salary = this.getView().byId("Input5").getValue();
        var StartDate = this.getView().byId("Input6").getValue();
        var EndDate = this.getView().byId("Input7").getValue();
        var sPath = "/createPersonlByTemplate";

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
            this.clearData();
          }.bind(this),

          error: function (oError) {
            console.log("oError", oError);
            MessageToast.show("Record not Created");
          }.bind(this),
        });
      },

      clearData: function () {
        this.getView().byId("Input1").setValue("");
        this.getView().byId("Input2").setValue("");
        this.getView().byId("Input3").setValue("");
        this.getView().byId("Input4").setValue("");
        this.getView().byId("Input5").setValue("");
        this.getView().byId("Input6").setValue("");
        this.getView().byId("Input7").setValue("");
      },

      OnPressShowTable: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("View2");
        console.log("manisha");
      },
    });
  }
);
