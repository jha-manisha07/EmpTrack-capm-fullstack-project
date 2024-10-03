sap.ui.define(
  ["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],
  function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("test.capm.app.test.controller.View2", {
      onInit: function () {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("View2")
          .attachPatternMatched(this.fnRouteMatched, this);

        // Call the CAP API to get the data
        var oModel = new JSONModel();
        this.getView().setModel(oModel);

        // Fetch data from CAP API
        this._fetchPersonDetails(oModel);
      },

      _fetchPersonDetails: function (oModel) {
        var sUrl = "/v2/odata/v4/person-detail/getAllPersonDetails"; // Replace with your service URL

        // Fetch data from API
        $.ajax({
          url: sUrl,
          method: "GET",
          success: function (oData) {
            oModel.setData(oData); // Bind API data to the model
            
            oData.d.results.forEach(function (item) {
              // Convert StartDate and EndDate from /Date(...)/ format to JS Date
              item.StartDate = new Date(
                parseInt(
                  item.StartDate.replace("/Date(", "").replace(")/", ""),
                  10
                )
              );
              item.EndDate = new Date(
                parseInt(
                  item.EndDate.replace("/Date(", "").replace(")/", ""),
                  10
                )
              );
            });
            oModel.setData(oData); // Set the modified data to the model
          },
          error: function () {
            console.error("Failed to fetch person details");
          },
        });
      },
    });
  }
);
