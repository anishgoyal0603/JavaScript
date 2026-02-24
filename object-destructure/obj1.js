const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"      
}

//course.courseInstructor valid

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);
