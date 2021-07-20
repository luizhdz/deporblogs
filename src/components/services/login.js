
import { api } from "../../functions/api";
import formJson from "form-json";
import { setStorage } from "../../functions/storage";
export const loginSubmit = (event) =>{
  if (event) event.preventDefault()
  const form = event.target;

  var payload = formJson(form);

  const endpoint = "user/login";

  const method = "POST";

  api({ endpoint, method, payload, auth: true })
  .then((response) => {
    const { error, data } = response;
    
    if(error){
      alert(error)
    }else{
      setStorage({name: "token", value: data.token})
      window.location.reload();
    }

  }).catch(err => console.log("Error: ", err));


}