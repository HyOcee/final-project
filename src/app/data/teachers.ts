export let teachers = [
    {
        name: 'Mr Abdullahi', username: 'Abdul',
        subjects: ['Mathematics','Physics','Biology']
    },
    {
        name: 'Kayode Sam', username: 'Kay',
        subjects: ['Yoruba','CCA','Biology']
    },
    {
        name: 'Kofi Annan', username: 'Kofi',
        subjects: ['Literature','CRK','PHE']
    },
    {
        name: 'Aladesanmu Favor', username: 'Favor',
        subjects: ['Government','Physics','Social Studies']
    },
]

export const getAllTeachers = () => {
    return JSON.parse(sessionStorage.getItem('teachers')!)
}

export const getTeacherInfo = (teacherSearch: any) => {
    let allTeachers: {username:string, name:string, subjects: string[]}[] = JSON.parse(sessionStorage.getItem('teachers')!)
    let teacherFound;
    allTeachers.forEach(teacher => {
        if(teacher.username.toLowerCase() === teacherSearch.toLowerCase()){
            teacherFound = teacher
        }
    })
    return teacherFound
}