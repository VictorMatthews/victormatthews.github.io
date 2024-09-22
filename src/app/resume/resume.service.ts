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
            'Created a workflow in DataBricks for aeronautical data extraction, resulting in over 100x faster data delivery to customers.',
            'Led development of Angular UI\'s to configure aeronautical data needs for airline and business customers around the world.',
            'Drove the daily execution of product development in a fast paced agile environment. Involved in the entire software development life cycle, from idea creation and development, all the way through to maintenance and support of the delivered system.',
            'Decomposed complex requirements and capabilities into executable discrete user stories, using Python to develop backend\'s and Angular to develop UI\'s with integration, testing, and delivery in a CI/CD pipeline.',
          ],
        },
        {
          duration: 'March 2016 - May 2021',
          title: 'Software Engineer',
          company: 'Gordon Food Service',
          description: [
            'Working with the IT Warehouse team, helped develop and support the warehouse management system.',
            'Subject matter expert on Inventory Control and Material Handling Control Systems.',
            'Created and deployed a new Angular app, replacing the old telnet devices in the warehouses.',
            'Updated and revamped software used throughout the warehouse for receiving, selection, inventory control, and shipping.',
          ],
        },
        {
          duration: 'May 2015 - March 2016',
          title: 'Asset Administrator',
          company: 'Gordon Food Service',
          description: [
            'Automated the internal IT hardware & software PO request system using JavaScript, resulting in faster throughput for PO requests.',
            'Implemented field validation for forms to ensure the user entered all the information needed, based on the specific users requests.',
            'Awarded the Gordon Food Service J&P Cup award, a yearly award given to one of the IT teams.',
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
          skillName: 'Python',
          skillLevel: 5,
        },
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
          skillName: 'TypeScript/JavaScript',
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
      ]
    );
  }
}
