import axios from "axios";

export async function updateEmployeeCourses(userCourses, userData) {
  let user = userData.user;
  try {
    let response = await axios.put(
      `http://localhost:5010/api/employee/${userData.user.id}`,
      { coursesInProgress: userCourses }
    );
  } catch (err) {
    console.error(err);
  }
}
