type course = {
    courseNumber: string,
    courseName: string,
    semesterTaken: string
}

const myCourses: Array<course> = [
    {
        courseNumber: 'CIS 162',
        courseName: 'Computer Science I',
        semesterTaken: 'Fall 2016'
    },
    {
        courseNumber: 'CIS 163',
        courseName: 'Computer Science II',
        semesterTaken: 'Fall 2017'
    },
    {
        courseNumber: 'CIS 241',
        courseName: 'System-Level Programming & Utilities',
        semesterTaken: 'Fall 2022'
    },
    {
        courseNumber: 'CIS 350',
        courseName: 'Intro Software Engineering',
        semesterTaken: 'Fall 2022'
    },
    {
        courseNumber: 'CIS 263',
        courseName: 'Data Structures & Algorithms',
        semesterTaken: 'Winter 2023'
    },
    {
        courseNumber: 'CIS 290',
        courseName: 'Professional Responsibilities & Practices',
        semesterTaken: 'Winter 2023'
    },
    {
        courseNumber: 'CIS 353',
        courseName: 'Database',
        semesterTaken: 'Winter 2023'
    },
    {
        courseNumber: 'CIS 371',
        courseName: 'Web Application Programming',
        semesterTaken: 'Winter 2023'
    }
]

const area4 = document.getElementById('area4');
const table = document.createElement('table');
const tr = document.createElement('tr');
const courseNumTh = document.createElement('th');
const courseNameTh = document.createElement('th');
const courseSemTh = document.createElement('th');
const courseNum = document.createTextNode('Course Number');
const courseName = document.createTextNode('Course Name');
const semTaken = document.createTextNode('Semester Taken');

area4?.appendChild(table).appendChild(tr);
tr.appendChild(courseNumTh).appendChild(courseNum);
tr.appendChild(courseNameTh).appendChild(courseName);
tr.appendChild(courseSemTh).appendChild(semTaken);

myCourses.forEach(course => {
    const tr1 = document.createElement('tr');
    const td1 = document.createElement('td');
    const text1 = document.createTextNode(course.courseNumber);
    const td2 = document.createElement('td');
    const text2 = document.createTextNode(course.courseName);
    const td3 = document.createElement('td');
    const text3 = document.createTextNode(course.semesterTaken);

    table.appendChild(tr1);
    tr1.appendChild(td1).appendChild(text1);
    tr1.appendChild(td2).appendChild(text2);
    tr1.appendChild(td3).appendChild(text3);
});

type company = {
    name: string,
    abbrev: string,
    url: string
}

const myCompanies: Array<company> = [
    {
        name: 'International Business Machines Corporation',
        abbrev: 'IBM',
        url: 'https://www.ibm.com/us-en/'
    },
    {
        name: 'Hewlett-Packard',
        abbrev: 'HP',
        url: 'https://www.hp.com/us-en/home.html'
    },
    {
        name: 'Mozilla Developer Network',
        abbrev: 'MDN',
        url: 'https://developer.mozilla.org/en-US/'
    },
]

const area6 = document.getElementById('area6');
const ul = document.createElement('ul');

area6?.appendChild(ul);

myCompanies.forEach(company => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const aText = document.createTextNode(company.abbrev);
    a.setAttribute('href', company.url);

    ul.appendChild(li).appendChild(a).appendChild(aText);
});

type socialMedia = {
    icon: string,
    url: string
}

const mySocMedia: Array<socialMedia> = [
    {
        icon: 'fa-brands fa-facebook',
        url: 'https://www.facebook.com/'
    },
    {
        icon: 'fa-brands fa-instagram',
        url: 'https://www.instagram.com/'
    },
    {
        icon: 'fa-brands fa-twitter',
        url: 'https://twitter.com/home'
    },
    {
        icon: 'fa-brands fa-amazon',
        url: 'https://www.amazon.com/'
    },
    {
        icon: 'fa-brands fa-github',
        url: 'https://www.github.com/'
    },
]

const area8 = document.getElementById('area8');

mySocMedia.forEach(soc => {
    const a = document.createElement('a');
    const i = document.createElement('i');
    a.setAttribute('href', soc.url);
    i.setAttribute('class', soc.icon);

    area8?.appendChild(a).appendChild(i);
})