import axios from "axios";

export async function updateEmployeeCourses(userCourses, userData) {
  let user = userData.user;
  try {
    let response = await axios.put(
      `https://course-manager-backend.herokuapp.com/api/employee/${userData.user.id}`,
      { coursesInProgress: userCourses }
    );
  } catch (err) {
    console.error(err);
  }
}
