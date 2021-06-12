import { api } from "../../functions/api";

export function getAllBlogs() {
  const endpoint = "blogs";

  return api({ endpoint });
}

export function deleteblogs(id) {
  const endpoint = `blogs/${id}`;
  const method = "DELETE";
  
  return api({ endpoint, method });
}
