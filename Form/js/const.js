// const groups = [
//   "React N1",
//   "React N3",
//   "React N4",
//   "React N9",
//   "React N10",
//   "React N15",
//   "React N20",
//   "React N41"
// ];
const positions = [`Frontend`, `Backend`, `Fullstack`];
const POSITION = `position`;
const STUDENTS = "students";
const students = [
  {
    firstName: "Muhammaddiyor",
    lastName: "Odiljonov",
    address: "Andijon",
    position: "Frontend",
    typePosition: "Junior",
    salary: 500,
    isMarried: false,
  },
  {
    firstName: "Azizbek",
    lastName: "Xotamaliyev",
    address: "Toshkent",
    position: "Frontend",
    typePosition: "Senior",
    salary: 500,
    isMarried: true,
  },
];
let studentsJSON = localStorage.getItem(STUDENTS);
let Students = JSON.parse(studentsJSON) || students;
