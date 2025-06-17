import { Component } from '@angular/core';

@Component({
  selector: 'app-type-script-into',
  imports: [],
  templateUrl: './type-script-into.component.html',
  styleUrl: './type-script-into.component.css'
})
export class TypeScriptIntoComponent {

   title = 'Introduction to TypeScript';
  sections = [
    {
      heading: 'What is TypeScript?',
      content: `TypeScript is a superset of JavaScript developed by Microsoft. It adds optional static typing, interfaces, classes, and modern ECMAScript features.`
    },
    {
      heading: 'Why Use TypeScript?',
      content: `- Static Typing: Catches errors during development\n- Better Tooling: Auto-complete and intelligent suggestions\n- Modern JavaScript: Use features before they're in all browsers\n- Great for teams: Clear contracts and scalable code`
    },
    {
      heading: 'Advantages of TypeScript',
      content: `- Early error detection\n- Better IDE support\n- Suitable for large projects\n- Improved maintainability\n- Optional adoption (you can use JS & TS together)`
    },
    {
      heading: 'Getting Started',
      content: `Install TypeScript: npm install -g typescript\nCompile: tsc filename.ts`
    },
    {
      heading: 'Example',
      content: `function greet(name: string): string {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet('Alice'));`
    }
  ];

}
