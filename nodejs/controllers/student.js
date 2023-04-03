async function getAllStudents(req, res) {
    res.status(HttpStatusCode.OK).json({
        message: "get all student"
    })
}

async function getStudentById(req, res) {
    res.status(HttpStatusCode.OK).json({
        name: "demo"
    })
}

async function updateStudent(req, res) {

}

async function insertStudent(req, res) {

}

export default {
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent
}