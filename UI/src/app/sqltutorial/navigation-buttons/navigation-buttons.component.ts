import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [],
  templateUrl: './navigation-buttons.component.html',
  styleUrl: './navigation-buttons.component.css'
})
export class NavigationButtonsComponent {
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
    '/SQL/Sqlsec-encription-mask',
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
