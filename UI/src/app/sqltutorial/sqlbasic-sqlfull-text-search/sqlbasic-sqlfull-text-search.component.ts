import { Component } from '@angular/core';

import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'; 


@Component({
  selector: 'app-sqlbasic-sqlfull-text-search',
  imports: [MatExpansionModule, CommonModule,MatCardModule],
  templateUrl: './sqlbasic-sqlfull-text-search.component.html',
  styleUrl: './sqlbasic-sqlfull-text-search.component.css'
})
export class SqlbasicSqlfullTextSearchComponent {
  currentPath: string = '';
  nextPage: string | null = null;
  previousPage: string | null = null;

  // Define the order of SQL topics
  pages = [
    '/SQL/basicsql',
    '/SQL/basicsql-Sqldatatype',
    '/SQL/basicsql-crud',
    '/SQL/basicsql-dataconstraints',
    '/SQL/basicsql-sqloperators',
    '/SQL/basicsql-sqlfunction',
    '/SQL/basicsql-sqljoin',
    '/SQL/basicsql-sqlsubquery',
    '/SQL/basicsql-sqlviews',
    '/SQL/basicsql-sqlindexes',
    '/SQL/basicsql-sqlstoredprocedure',
    '/SQL/SqlbasicSqltransactionsComponent',
    '/SQL/SqlbasicSqltriggersComponent',
    '/SQL/SqlbasicSqlCommonTableExpressionComponent',
    '/SQL/SqlbasicSqlpartitioningComponent',
    '/SQL/SqlbasicSqlNormalizationComponent',
    '/SQL/SqlbasicSqlrecursivequeryComponent',
    '/SQL/SqlbasicSqlpivotunpivotComponent',
    '/SQL/SqlbasicSqljsonComponent',
    '/SQL/SqlbasicSqlfullTextSearchComponent',
    
    '/SQL/SqlAdvanceSequrityinsqlEncriptmaskComponent',
    '/SQL/SqlAdvancePerformanceOptimizationComponent' // Last topic
  ];
 constructor(private route: ActivatedRoute, private router: Router) {}
  
    ngOnInit() {
      this.route.url.subscribe(() => {
        this.currentPath = this.router.url;
        const index = this.pages.indexOf(this.currentPath);
        this.previousPage = index > 0 ? this.pages[index - 1] : null;
        this.nextPage = index < this.pages.length - 1 ? this.pages[index + 1] : null;
      });
    }
    navigateTo(path: string | null) {
      if (path) this.router.navigate([path]);
    }

}
