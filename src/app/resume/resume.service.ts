import { Injectable } from '@angular/core';
import { EducationSummary, JobSummary, SkillSummary } from './resume.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  populateJobs(callback: (result: JobSummary[]) => void) {
    callback(
      [
        {
          duration: 'May 2021 - Present',
          title: 'Software Engineer',
          company: 'Boeing',
          description: [
            'Working with the Aviation Data Solutions group, helped develop and support Angular UI\'s that manage data for airline and business customers around the world.',
            'Drove the daily execution of product development in a fast paced agile environment. Involved in the entire software development life cycle, from idea creation and development, all the way through to maintenance and support of the delivered system.',
            'Decomposed complex requirements and capabilities into executable discrete user stories, using Angular to develop UI\'s with integration, testing, and delivery within a CI/CD pipeline',
          ],
        },
        {
          duration: 'March 2016 - May 2021',
          title: 'Software Engineer',
          company: 'Gordon Food Service',
          description: [
            'Working with the IT Warehouse team, I have helped develop and support the warehouse management system.',
            'Subject matter expert on Inventory Control and Material Handling Control Systems.',
            'On a team of 14 people I played a big part in the most recent warehouse project where we created and deployed a new Angular app to replace old telnet devices in the warehouses.',
            'Updated and revamped software used throughout the entire warehouse for receiving, selection, inventory control, and shipping.',
            'Completed 22% of the 200+ bugs that came in over the 10 month roll-out of the software to all warehouses.',
          ],
        },
        {
          duration: 'May 2015 - March 2016',
          title: 'Asset Administrator',
          company: 'Gordon Food Service',
          description: [
            'Working with the North American Asset Management team. I automated the internal IT hardware & software PO request system using JavaScript and Google Apps Script, resulting in faster throughput for PO requests.',
            'Awarded the Gordon Food Service J&P Cup award, a yearly award given to one of the IT teams.',
            'Implemented field validation for forms to make sure the user had all the information needed, based on their specific requests.',
            'Added the ability for an Asset Administrator on the team to generate a PO number, save as a PDF, and store the request in the proper folder with a click of a button.',
          ],
        },
        {
          duration: 'September 2013 - May 2015',
          title: 'Sales Associate',
          company: 'Gordon Food Service',
          description: [
            'Working at the GFS Store in Cascade, MI'
          ],
        },
      ]
    );
  }

  populateEducations(callback: (result: EducationSummary[]) => void) {
    callback(
      [
        {
          title: 'Bachelor of Science in Digital Media Software Engineering',
          duration: '2013-2017',
          institution: 'Ferris State University',
          location: 'Grand Rapids, MI',
        },
      ]
    );
  }

  populateSkills(callback: (result: SkillSummary[]) => void) {
    callback(
      [
        {
          skillName: 'Java',
          skillLevel: 5,
        },
        {
          skillName: 'SQL',
          skillLevel: 5,
        },
        {
          skillName: 'Angular',
          skillLevel: 4,
        },
        {
          skillName: 'Javascript/TypeScript',
          skillLevel: 4,
        },
        {
          skillName: 'Git',
          skillLevel: 4,
        },
        {
          skillName: 'HTML',
          skillLevel: 3,
        },
        {
          skillName: 'CSS',
          skillLevel: 3,
        },
        {
          skillName: 'Node.js',
          skillLevel: 3,
        },
        {
          skillName: 'Spring',
          skillLevel: 3,
        },
        {
          skillName: 'Maven',
          skillLevel: 3,
        },
      ]
    );
  }
}
