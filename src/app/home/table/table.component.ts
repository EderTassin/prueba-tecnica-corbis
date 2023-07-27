import { Component, Input } from '@angular/core';
import { Objectives } from 'src/app/core/models/objectives.model';
import { Perspective } from 'src/app/core/models/perspective.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() objective: Objectives[] = [];
  @Input() perspective: Perspective[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  sortedColumnObjectives!: keyof Objectives;
  sortedColumnPerspective!: keyof Perspective;

  onSort(column: keyof Objectives | keyof Perspective) {
    if (column === this.sortedColumnObjectives || column === this.sortedColumnPerspective) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumnObjectives = column as keyof Objectives;
      this.sortedColumnPerspective = column as keyof Perspective;
      this.sortDirection = 'asc';
    }
    this.sortTable();
  }

  sortTable() {
    this.objective.sort((a, b) => {
      const valA = a[this.sortedColumnObjectives];
      const valB = b[this.sortedColumnObjectives];
      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.perspective.sort((a, b) => {
      const valA = a[this.sortedColumnPerspective];
      const valB = b[this.sortedColumnPerspective];
      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}

