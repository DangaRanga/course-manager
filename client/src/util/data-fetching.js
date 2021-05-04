import axios from "axios";

export async function updateEmployeeCourses(userCourses, userData) {
  // let user = userData.user;
  try {
    await axios.put(
      `https://course-manager-backend.herokuapp.com/api/employee/${userData.user.id}`,
      { coursesInProgress: userCourses }
    );
  } catch (err) {
    console.error(err);
  }
}

export async function fetchCourses() {
  return await axios
    .get("https://course-manager-backend.herokuapp.com/api/course")
    .then((response) => {
      return response.data;
    });
}
