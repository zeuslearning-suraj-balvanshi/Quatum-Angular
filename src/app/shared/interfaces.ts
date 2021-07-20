export interface ICourse {
  courseImg: string;
  courseName: string;
  fav: string;
  subject: string;
  grades: string;
  units1: number;
  units2: number;
  units3: number;
  classOption: string;
  totalStudents: string;
  duration: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export interface INotification {
  viewed: string;
  notificationName: string;
  notificationIcon: string;
  courseFrom: string;
  classFrom: string;
  notificationDate: string;
}

export interface IAlert {
  viewed: string;
  pa: string;
  alertIcon: string;
  alertName: string;
  courseFrom: string;
  attachments: string;
  alertDate: string;
}
