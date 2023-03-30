const getAllStudents = async ( {
    page,
    size, 
    searchString, 
}) => {
    console.log("get all student");
}

const insertStudent = async ({
    name, email, languages, gender, phoneNumber, address
}) => {
    console.log('isert student');
}

export default {
    insertStudent,
    getAllStudents
}