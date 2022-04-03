export let teachers = [
    {
        name: 'Derek Peters', username: 'peter',
        subjects: ['Mathematics','Physics','Economics']
    },
    {
        name: 'Kayode Sam', username: 'Kay',
        subjects: ['Yoruba','Literature','Biology']
    },
    {
        name: 'Kofi Annan', username: 'Kofi',
        subjects: ['Literature','English','PHE']
    },
    {
        name: 'Aladesanmu Favor', username: 'Favor',
        subjects: ['agricultural science','Chemistry','Social Studies']
    },
    {
        name: 'Sadio Mane', username: 'saed',
        subjects: ['Mathematics','Physics','Economics']
    },
    {
        name: 'Cristiano Ronaldo', username: 'cr7',
        subjects: ['PHE','Literature','Biology']
    },
    {
        name: 'Damilola Helen', username: 'ennyitan',
        subjects: ['Biology','English','Physics']
    },
    {
        name: 'Okunola Tomiwa', username: 'tommy',
        subjects: ['Government','Chemistry','Social Studies']
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