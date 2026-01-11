
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

// Note the explicit file extension, which is needed for browser-native ESM.
// You will need to rename 'src/app.component.ts' to 'src/app.component.js' for this to work on GitHub Pages.
import { AppComponent } from './src/app.component.ts';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection()
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
