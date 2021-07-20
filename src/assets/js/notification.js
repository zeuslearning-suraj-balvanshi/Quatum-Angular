const notifications = [
    {
        viewed: "unviewed",
        notificationName:
            "License for Introduction to Algebra has been assigned to your school",
        notificationIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        courseFrom: "",
        classFrom: "",
        notificationDate: "13-Sep-2018 at 01:15 pm",
    },
    {
        viewed: "viewed",
        notificationName:
            "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        notificationIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3676" data-name="Path 3676" d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" fill="#1f7a54"/></svg>',
        courseFrom: "Advanced Mathematics",
        classFrom: "",
        notificationDate: "15-Sep-2018 at 05:21 pm",
    },
    {
        viewed: "unviewed",
        notificationName: "23 new students created",
        notificationIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        courseFrom: "",
        classFrom: "",
        notificationDate: "14-Sep-2018 at 01:21 pm",
    },
    {
        viewed: "unviewed",
        notificationName: "15 submissions ready for evaluation",
        notificationIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        courseFrom: "",
        classFrom: "Basics of Algebra",
        notificationDate: "13-Sep-2018 at 01:15 pm",
    },
    {
        viewed: "unviewed",
        notificationName:
            "License for Basic Concepts in Geometry has been assigned to your... school",
        notificationIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3677" data-name="Path 3677" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#1f7a54"/><path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/></svg>',
        courseFrom: "",
        classFrom: "",
        notificationDate: "15-Sep-2018 at 07:21 pm",
    },
    {
        viewed: "viewed",
        notificationName: "Lesson 3 Practice Worksheet overdue for Sam Diego",
        notificationIcon:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_3676" data-name="Path 3676" d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" fill="#1f7a54"/></svg>',
        courseFrom: "Advanced Mathematics",
        classFrom: "",
        notificationDate: "15-Sep-2018 at 07:21 pm",
    },
];

function ifCourse(content) {
    return `
    <div class="course-from">
        <span>Course:</span> ${content}
    </div>
    `;
}

function ifClass(content) {
    return `
    <div class="class-from">
        <span>Class:</span> ${content}
    </div>
    `;
}

function mainTemplate(notification) {
    return `
    <div class=${notification.viewed}>
        <div class="notification-name">
            ${notification.notificationName}
        </div>
        <div class="notification-icon">${notification.notificationIcon}</div>
        ${notification.courseFrom ? ifCourse(notification.courseFrom) : ""}
        ${notification.classFrom ? ifCourse(notification.classFrom) : ""}
        <div class="notification-date">
            ${notification.notificationDate}
        </div>
    </div>
    `;
}

document.querySelector(".notifications-panel").innerHTML = `
    ${notifications.map(mainTemplate).join("")}
    <div class="empty-space"></div>
`;

// // document.querySelector(".notifications").addEventListener("click", function () {
// //     if (document.querySelector(".notifications-panel").style.display == "") {
// //         document.querySelector(".notifications-panel").style.display = "block";
// //         document.querySelector(".alerts-panel").style.display = "";
// //         document.querySelector(".ham-menu").style.display = "";
// //     } else if (
// //         document.querySelector(".notifications-panel").style.display == "block"
// //     ) {
// //         document.querySelector(".notifications-panel").style.display = "";
// //     }
// });
