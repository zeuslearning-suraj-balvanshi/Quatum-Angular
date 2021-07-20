const courses = [
    {
        courseImg: "/assets/images/imageMask-1.svg",
        courseName: "Acceleration",
        fav: "/assets/icons/favourite.svg",
        subject: "Physics",
        grades: "Grade 7 +2",
        units: "<strong>4</strong> Units <strong>18</strong> Lessons <strong>24</strong> Topics</strong>",
        classOption: "Mr. Frank's Class B",
        totalStudents: "50 Students",
        duration: "21-Jan-2020 - 21-Aug-2020",
        img1: "/assets/icons/preview.svg",
        img2: "/assets/icons/manage-course.svg",
        img3: "/assets/icons/grade-submissions.svg",
        img4: "/assets/icons/reports.svg",
    },
    {
        courseImg: "/assets/images/imageMask-2.svg",
        courseName: "Displacement, Velocity and Speed",
        fav: "/assets/icons/favourite.svg",
        subject: "Physics 2",
        grades: "Grade 6 +3",
        units: "<strong>2</strong> Units <strong>15</strong> Lessons <strong>20</strong> Topics</strong>",
        classOption: "No Classes",
        totalStudents: "",
        duration: "",
        img1: "/assets/icons/preview.svg",
        img2: "/assets/icons/manage-course.svg",
        img3: "/assets/icons/grade-submissions.svg",
        img4: "/assets/icons/reports.svg",
    },
    {
        courseImg: "/assets/images/imageMask.svg",
        courseName:
            "Introduction to Biology: Micro organisms and how the affec..",
        fav: "/assets/icons/favourite.svg",
        subject: "Biology",
        grades: "Grade 4 +1",
        units: "<strong>5</strong> Units <strong>16</strong> Lessons <strong>22</strong> Topics</strong>",
        classOption: "All Classes",
        totalStudents: "300 Students",
        duration: "",
        img1: "/assets/icons/preview.svg",
        img2: "/assets/icons/manage-course.svg",
        img3: "/assets/icons/grade-submissions.svg",
        img4: "/assets/icons/reports.svg",
    },
    {
        courseImg: "/assets/images/imageMask-3.svg",
        courseName: "Introduction to High School Mathematics",
        fav: "/assets/icons/favourite.svg",
        subject: "Mathematics",
        grades: "Grade 8 +3",
        units: "",
        classOption: "Mr. Frank's Class A",
        totalStudents: "44 Students",
        duration: "14-Oct-2019 - 20-Oct-2019",
        img1: "/assets/icons/preview.svg",
        img2: "/assets/icons/manage-course.svg",
        img3: "/assets/icons/grade-submissions.svg",
        img4: "/assets/icons/reports.svg",
    },
];

function template(course) {
    return `
                <div class="course">
                    <div class="details">
                        <img class="course-img" src=${course.courseImg} alt="" />
                        <div class="course-details">
                            <div class="course-content">
                                <div class="course-name">${course.courseName}</div> 
                            </div>
                            <div class="favourite">
                                <img
                                    src=${course.fav}
                                    alt="favourite"
                                />
                            </div>
                            <div class="sub-grade">
                                <div class="subjetc">${course.subject}</div>
                                <div class="">|</div>
                                <div class="grades">${course.grades}</div>
                            </div>
                            <div class="units">
                                <div class="">
                                ${course.units}
                                </div>
                            </div>
                            <div class="classes">
                                <select name="classes" class="n-classes">
                                    <option value="mr-frank-b">
                                        ${course.classOption}
                                    </option>
                                </select>
                            </div>
                            <div class="student">
                                <div class="total-students">${course.totalStudents}</div>
                                <div class="">|</div>
                                <div class="duration">${course.duration}</div>
                            </div>
                        </div>
                    </div>
                    <div class="controls">
                        <div class="">
                            <img
                                src=${course.img1}
                                alt="preview"
                            />
                        </div>
                        <div class="">
                            <img
                                src=${course.img2}
                                alt="manage"
                            />
                        </div>
                        <div class="">
                            <img
                                src=${course.img3}
                                alt="grade"
                            />
                        </div>
                        <div class="">
                            <img
                                src=${course.img4}
                                alt="reports"
                            />
                        </div>
                    </div>
                </div>
`;
}

document.getElementsByClassName("course-table")[0].innerHTML = `
    ${courses.map(template).join("")}
`;

const hamMenuItemArrow = document.querySelectorAll(".expand-arrow");
hamMenuItemArrow.forEach(
    (arrowDown) =>
        (arrowDown.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`)
);

// document.querySelector(".invisible").addEventListener("click", function () {
//     if (document.querySelector(".ham-menu").style.display == "") {
//         document.querySelector(".ham-menu").style.display = "block";
//         document.querySelector(".notifications-panel").style.display = "";
//         document.querySelector(".alerts-panel").style.display = "";
//     } else if (document.querySelector(".ham-menu").style.display == "block") {
//         document.querySelector(".ham-menu").style.display = "";
//     }
// });

// function loading() {
//     setTimeout(() => {
//         document.getElementsByClassName("course-table")[0].innerHTML = `
//             ${courses.map(template).join("")}
//             `;
//     }, 2000);
// }

// document.getElementsByClassName("course-table")[0].innerHTML = "loading";
// loading();
