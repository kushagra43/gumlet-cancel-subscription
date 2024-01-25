import React, { useEffect } from "react";

const FreshworksForm = () => {
  useEffect(() => {
    // Load the Freshworks form script
    var freshworksFormContainer = document.getElementById(
      "freshworks-form-container"
    );

    if (!freshworksFormContainer.hasChildNodes()) {
      const script = document.createElement("script");
      script.src =
        "https://gumlet-team.myfreshworks.com/crm/sales/web_forms/7afc54c6287eef697898c6beef6f39d2555b4dc0831191312f62aa3941e42a3b/form.js";
      script.crossorigin = "anonymous";
      script.id =
        "fs_7afc54c6287eef697898c6beef6f39d2555b4dc0831191312f62aa3941e42a3b";
      document.getElementById("freshworks-form-container").appendChild(script);
    }
  }, []);

  return (
    <div id="freshworks-form-container">
      {/* The Freshworks form will be rendered here by the script */}
    </div>
  );
};

export default FreshworksForm;
