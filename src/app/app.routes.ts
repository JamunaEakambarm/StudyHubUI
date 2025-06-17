
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseFormComponent } from './courses/course-form/course-form.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SQLTutorialComponent } from './courses/sqltutorial/sqltutorial.component';
import { SqlBasicComponent } from './sqltutorial/sql-basic/sql-basic.component';
import { SqlAdvanceComponent } from './sqltutorial/sql-advance/sql-advance.component';
import { SqlbasicSqldatatypeComponent } from './sqltutorial/sqlbasic-sqldatatype/sqlbasic-sqldatatype.component';
import { SqlbasicCrudComponent } from './sqltutorial/sqlbasic-crud/sqlbasic-crud.component';
import { SqlbasicDataConstraintsComponent } from './sqltutorial/sqlbasic-data-constraints/sqlbasic-data-constraints.component';
import { SqlbasicSqlOperatorsComponent } from './sqltutorial/sqlbasic-sql-operators/sqlbasic-sql-operators.component';
import { SqlbasicSqlfunctionComponent } from './sqltutorial/sqlbasic-sqlfunction/sqlbasic-sqlfunction.component';
import { SqlbasicSqljoinComponent } from './sqltutorial/sqlbasic-sqljoin/sqlbasic-sqljoin.component';
import { SqlbasicSqlsubqueryComponent } from './sqltutorial/sqlbasic-sqlsubquery/sqlbasic-sqlsubquery.component';
import { SqlbasicSqlviewsComponent } from './sqltutorial/sqlbasic-sqlviews/sqlbasic-sqlviews.component';
import { SqlbasicSqlindexesComponent } from './sqltutorial/sqlbasic-sqlindexes/sqlbasic-sqlindexes.component';
import { SqlbasicSqlstoredprocedureComponent } from './sqltutorial/sqlbasic-sqlstoredprocedure/sqlbasic-sqlstoredprocedure.component';
import { SqlbasicSqltransactionsComponent } from './sqltutorial/sqlbasic-sqltransactions/sqlbasic-sqltransactions.component';
import { SqlbasicSqltriggersComponent } from './sqltutorial/sqlbasic-sqltriggers/sqlbasic-sqltriggers.component';
import { SqlbasicSqlCommonTableExpressionComponent } from './sqltutorial/sqlbasic-sql-common-table-expression/sqlbasic-sql-common-table-expression.component';
import { SqlbasicSqlpartitioningComponent } from './sqltutorial/sqlbasic-sqlpartitioning/sqlbasic-sqlpartitioning.component';
import { SqlbasicSqlNormalizationComponent } from './sqltutorial/sqlbasic-sql-normalization/sqlbasic-sql-normalization.component';
import { SqlbasicSqlrecursivequeryComponent } from './sqltutorial/sqlbasic-sqlrecursivequery/sqlbasic-sqlrecursivequery.component';
import { SqlbasicSqlpivotunpivotComponent } from './sqltutorial/sqlbasic-sqlpivotunpivot/sqlbasic-sqlpivotunpivot.component';
import { SqlbasicSqljsonComponent } from './sqltutorial/sqlbasic-sqljson/sqlbasic-sqljson.component';
import { SqlbasicSqlfullTextSearchComponent } from './sqltutorial/sqlbasic-sqlfull-text-search/sqlbasic-sqlfull-text-search.component';
import { Component } from '@angular/core';
import { SqlAdvanceSequrityinsqlEncriptmaskComponent } from './sqltutorial/sql-advance-sequrityinsql-encriptmask/sql-advance-sequrityinsql-encriptmask.component';
import { SqlAdvancePerformanceOptimizationComponent } from './sqltutorial/sql-advance-performance-optimization/sql-advance-performance-optimization.component';

import { RegistrationComponent } from './courses/sqltutorial/User/login/registration.component';
import { LoginPageComponent } from './courses/sqltutorial/User/login/login.component';
import { HomeTutorialComponent } from './courses/sqltutorial/User/home/home-tutorial/home-tutorial.component';
import { AuthGuard } from './courses/sqltutorial/User/guards/auth.guard';
import { TypeScriptIntoComponent } from './TypeScriptTutorial/type-script-into/type-script-into.component';


export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: 'courses', component: CourseListComponent },
      // { path: 'add-course', component: CourseFormComponent },
      // {path:'Employee', component:EmployeeComponent},
      { path: 'register', component: RegistrationComponent }, 
      {path:'login',component:LoginPageComponent},
      { 
        path: 'home', 
        component: HomeTutorialComponent, 
        canActivate: [AuthGuard] // ✅ Protect Home Page
      },
      
      {
        path: 'SQL',
        children: [
          { path: 'basicsql', component: SqlBasicComponent },
          {path: 'advancesql', component:SqlAdvanceComponent},
          {path:'basicsql-Sqldatatype',component:SqlbasicSqldatatypeComponent},
          {path: 'basicsql-crud',component:SqlbasicCrudComponent},
          {path:'basicsql-dataconstraints',component:SqlbasicDataConstraintsComponent},
          {path: 'basicsql-sqloperators',component:SqlbasicSqlOperatorsComponent},
          {path:'basicsql-sqlfunction',component:SqlbasicSqlfunctionComponent},
          {path:'basicsql-sqljoin',component:SqlbasicSqljoinComponent},
          {path : 'basicsql-sqlsubquery',component:SqlbasicSqlsubqueryComponent},
          {path: 'basicsql-sqlviews',component:SqlbasicSqlviewsComponent},
          {path:'basicsql-sqlindexes',component:SqlbasicSqlindexesComponent},
          {path:'basicsql-sqlstoredprocedure',component:SqlbasicSqlstoredprocedureComponent},
          {path:'SqlbasicSqltransactionsComponent',component:SqlbasicSqltransactionsComponent},
          {path:'SqlbasicSqltriggersComponent',component:SqlbasicSqltriggersComponent},
          {path:'SqlbasicSqlCommonTableExpressionComponent',component:SqlbasicSqlCommonTableExpressionComponent},
          {path:'SqlbasicSqlpartitioningComponent',component:SqlbasicSqlpartitioningComponent},
          {path :'SqlbasicSqlNormalizationComponent',component:SqlbasicSqlNormalizationComponent},
          {path:'SqlbasicSqlrecursivequeryComponent',component:SqlbasicSqlrecursivequeryComponent},
          {path:'SqlbasicSqlpivotunpivotComponent',component:SqlbasicSqlpivotunpivotComponent},
          {path:'SqlbasicSqljsonComponent',component:SqlbasicSqljsonComponent},
          {path:'SqlbasicSqlfullTextSearchComponent',component:SqlbasicSqlfullTextSearchComponent},
          {path:'SqlAdvanceSequrityinsqlEncriptmaskComponent',component:SqlAdvanceSequrityinsqlEncriptmaskComponent},
          {path:'SqlAdvancePerformanceOptimizationComponent',component:SqlAdvancePerformanceOptimizationComponent}

          
        ],
      },
      {
        path: 'TypeScript',
        children: [
          { path: 'TypeScriptIntro', component: TypeScriptIntoComponent }
        ],
      },
      { path: '', redirectTo: 'courses', pathMatch: 'full' }
    ]
  }
];


export const appConfig = {
  providers: [provideRouter(routes)],
};

