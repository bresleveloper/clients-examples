# DialogExample


# ckeditor 5 simple

* `npm install --save @ckeditor/ckeditor5-angular`
* `npm install --save @ckeditor/ckeditor5-build-classic`
* import module to app.module.cs `import { CKEditorModule } from '@ckeditor/ckeditor5-angular';`
* comp:
```
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export class MyComponent {
    public Editor = ClassicEditor;
}
```
* comp html `<ckeditor [editor]="Editor" data="<p>Hello, world!</p>"></ckeditor>`


# kolkov editor

https://www.npmjs.com/package/@kolkov/angular-editor