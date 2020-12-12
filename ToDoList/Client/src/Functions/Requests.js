import axios from "axios"

function post_value(request, value) {
  return axios.post(request, value);
}

function get_task_list(user_id){
  return axios.get("/tasks_list", { params: { user_id: user_id } })
}

function delete_task(task_id){
  return axios.delete("/task",{data:{task_id:task_id}})
}

export default {
  post_value,
  get_task_list,
  delete_task
};

