import { Injectable } from '@angular/core';
import { captureException } from '@sentry/core';
import { HttpClient } from '@angular/common/http';
import { GitRepo } from './portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  get projects() { return this.getGitProjects(); }

  gitBaseUrl = 'https://api.github.com/users/victormatthews/repos?per_page=100';

  constructor(private http: HttpClient) { }

  async getGitProjects() {
    const filteredProjects = [];
    try {
      const projects = await this.http.get(this.gitBaseUrl).toPromise() as GitRepo[];
      for (const project of projects) {
          const mappedProject: GitRepo = {
            name: project.name,
            description: project.description,
            html_url: project.html_url,
            language: project.language,
            stargazers_count: project.stargazers_count,
            forks: project.forks
          };
          filteredProjects.push(mappedProject);
      }
    } catch (error) {
      captureException(error)
      console.error(error);
    }

    return filteredProjects;
  }
}
