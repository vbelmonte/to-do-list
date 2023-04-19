import Task from './tasks';

export default class Project extends Task {
  type = 'project';

  constructor(projectName, projectDescription, dueDate, priority) {
    super(projectName, projectDescription, dueDate, priority);
    this.inProgressTaskArray = [];
    this.completedTaskArray = [];
  }
}
