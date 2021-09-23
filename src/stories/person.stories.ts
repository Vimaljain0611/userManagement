import { moduleMetadata, storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../app/pagination/pagination.component';

const template = `<div style="width: 100%;">
<app-pagination
      [totalRecords]="totalRecords"
      [recordsPerPage]="recordsPerPage"
      (onPageChange)="displayActivePage($event)"
    ></app-pagination>
</div>`;

storiesOf('Pagination', module)
  .addDecorator(
    moduleMetadata({
      declarations: [PaginationComponent],
      imports: [CommonModule],
    })
  )
  .add(
    'sample Pagination bar',
    () => ({
      template,
      props: {
        totalRecords: text('Total Records', '25'),
        recordsPerPage: text('Record Per Page', '10'),
      },
    }),
  );
