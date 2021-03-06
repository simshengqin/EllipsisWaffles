import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Auth, Hub} from 'aws-amplify';
import {APIService} from "../../../API.service";
// import {Task} from '../../../core/models/task';
// import {APIService, UpdateTaskInput} from '../../../API.service';

@Component({
  selector: 'app-header', // name of this UI dulpicate
  templateUrl: './header.component.html', // FE, UI
  styleUrls: ['./header.component.scss'] // FE, style
})
export class HeaderComponent implements OnInit {
  url: string; // name of file
  username: string;
  role: string;
  // newTasks: Array<Task> = [];
  constructor(private router: Router, private api: APIService) { }

  ngOnInit(): void {
    this.url = this.router.url;
    this.username = localStorage.getItem('username'); // get cookies
    this.role = localStorage.getItem('role'); // get cookies
    this.getNewTasks();
  } // ngOnInit --> run when components start
  async handleSignOutButtonClick() {
    try {

      await Auth.signOut();
      localStorage.removeItem('username');
      Hub.dispatch('UI Auth', {   // channel must be 'UI Auth'
        event: 'AuthStateChange',    // event must be 'AuthStateChange'
        message: 'signedout'    // message must be 'signedout'
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  getNewTasks() {
    // this.api.ListTasks().then(event => {
    //   if (event.items) {
    //     const tasks = event.items as Array<Task>;
    //     this.newTasks = [];
    //     for (const task of tasks) {
    //       if (task.status2 === 1) {
    //         this.newTasks.push(task);
    //       }
    //     }
    //   }
    //
    // });
  }
  // async onViewReport(task: Task) {
  //   const updateTaskInput: UpdateTaskInput = {
  //     id: task.id,
  //     filename: task.filename,
  //     uploadDate: task.uploadDate,
  //     //patientCount: task.patientCount,
  //     status2: 2 // Read the task notification
  //   };
  //   await this.api.UpdateTask(updateTaskInput);
  //   const id = task.id;
  //   const filename = task.filename;
  //   // this.getNewTasks();
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
  //     this.router.navigate(['my-report'], {queryParams: {id}}));
  // }
}
