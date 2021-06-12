import formJson from "form-json";
import { api } from "../../functions/api";

export function submitBlog(event) {
  event.preventDefault();
  const form = event.target;
  var payload = formJson(form);
  const endpoint = payload.id ? `blogs/${payload.id}` : "blogs";

  const method = payload.id ? "PUT" : "POST";

  api({ endpoint, method, payload }).then((response) => {
    alert("Blog Creado !");
  });
}

export function getById(id) {
  const endpoint = `blogs/${id}`;
  return api({ endpoint });
}
