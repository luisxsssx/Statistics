import { Routes } from '@angular/router';
import { PitcherComponent } from './components/components/pitcher/pitcher.component';
import { BatterComponent } from './components/components/batter/batter.component';

export const routes: Routes = [
    { path: '', component: BatterComponent },
    { path: 'pitcher', component: PitcherComponent }
];
