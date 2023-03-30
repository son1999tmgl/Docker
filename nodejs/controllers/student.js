async function getAllStudents(req, res) {
    res.json({
        status: 200,
        msg: 'get all student'
    })
}

async function getStudentById(req, res) {
    res.status(200).json({
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