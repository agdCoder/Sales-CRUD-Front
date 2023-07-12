import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "./modalAlert";
import { sendRequest } from "./fetchData";

export const checkData = (fields, id, operation, url, getData) => {
  let reqParam = "";
  let reqParams;
  let reqMethod;

  for (let field in fields) {
    if (
      typeof fields[field] !== "number" &&
      (!fields[field] || fields[field].toString().trim() === "")
    ) {
      const fieldName = field.replace(/([A-Z])/g, " $1").toLowerCase();
      show_alert(`Write the ${fieldName}`, "warning");
      return;
    }
  }

  reqParams = { ...fields };

  if (operation === 1) {
    reqMethod = "POST";
  } else {
    reqMethod = "PUT";
    reqParam = id;
  }

  sendRequest(reqMethod, reqParams, reqParam, url, getData);
};

export const deleteData = (id, setId, url, getData) => {
  const mySwal = withReactContent(Swal);
  mySwal
    .fire({
      title: "Are you sure you want to delete this record? ",
      icon: "question",
      text: "This action cannot be undone.",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    })
    .then((result) => {
      if (result.isConfirmed) {
        setId(id);
        sendRequest("DELETE", { id }, id, url, getData);
      } else {
        show_alert("The record was not deleted", "info");
      }
    });
};
