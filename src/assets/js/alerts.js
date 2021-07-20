const alerts = [
    {
        viewed: "viewed",
        pa: "Wilson Kumar",
        alertIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3676" data-name="Path 3676" d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" fill="#1f7a54"/></svg>',
        alertName: "No classes will be held on 21st Nov",
        courseFrom: "",
        attachments: "2 files are attached",
        alertDate: "15-Sep-2018 at 07:21 pm",
    },
    {
        viewed: "unviewed",
        pa: "Samson White",
        alertIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        alertName: "Guest lecture on Geometry on 20th September",
        courseFrom: "",
        attachments: "2 files are attached",
        alertDate: "15-Sep-2018 at 07:21 pm",
    },
    {
        viewed: "viewed",
        pa: "Wilson Kumar",
        alertIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3676" data-name="Path 3676" d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" fill="#1f7a54"/></svg>',
        alertName: "Additional course materials available on request",
        courseFrom: "Course: Mathematics 101",
        attachments: "",
        alertDate: "15-Sep-2018 at 07:21 pm",
    },
    {
        viewed: "unviewed",
        pa: "Wilson Kumar",
        alertIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        alertName: "No classes will be held on 25th Dec",
        courseFrom: "",
        attachments: "2 files are attached",
        alertDate: "15-Sep-2018 at 07:21 pm",
    },
    {
        viewed: "unviewed",
        pa: "Wilson Kumar",
        alertIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        alertName: "Additional course materials available on request",
        courseFrom: "Course: Mathematics 101",
        attachments: "",
        alertDate: "15-Sep-2018 at 07:21 pm",
    },
];

function ifCourse(content) {
    return `
    <div class="course-from">
        <span>Course: ${content}</span>
    </div>
    `;
}

function mainTemplate(alert) {
    return `
    <div class=${alert.viewed}>
        <div class="alert-pa">
            <span>PA:</span>  ${alert.pa}
        </div>
        <div class="alert-icon">${alert.alertIcon}</div>
        <div class="alert-name">
            ${alert.alertName}
        </div>
        ${alert.courseFrom ? ifCourse(alert.courseFrom) : ""}
        <div class="alert-date">
            ${
                alert.attachments ? alert.attachments : ""
            } <span class="alert-date-left">${alert.alertDate}</span>
        </div>
    </div>
    `;
}

document.querySelector(".alerts-panel").innerHTML = `
    ${alerts.map(mainTemplate).join("")}    
`;

/*  */

// document.querySelector(".alerts").addEventListener("click", function () {
//     if (document.querySelector(".alerts-panel").style.display == "") {
//         document.querySelector(".alerts-panel").style.display = "block";
//         document.querySelector(".notifications-panel").style.display = "";
//         document.querySelector(".ham-menu").style.display = "";
//     } else if (
//         document.querySelector(".alerts-panel").style.display == "block"
//     ) {
//         document.querySelector(".alerts-panel").style.display = "";
//     }
// });
