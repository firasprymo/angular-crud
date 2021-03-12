import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from 'src/app/shared/model/process';
import { ProcessService } from 'src/app/shared/services/process.service';

@Component({
  selector: 'app-showprocess',
  templateUrl: './showprocess.component.html',
  styleUrls: ['./showprocess.component.css']
})
export class ShowprocessComponent implements OnInit {
process$:Observable<Process[]>
  constructor(private processSer:ProcessService) { }

  ngOnInit(): void {
    this.process$ = this.processSer.findAllProcesss()

  }

}
