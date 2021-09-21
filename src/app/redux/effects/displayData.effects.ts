// import {selectRouteParam} from '@redux/selectors/router.selectors';
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
// import { ROUTER_NAVIGATION } from '@ngrx/router-store';
// import { Store, select } from '@ngrx/store';
// import { SetDisplayCategory } from '@redux/actions/displayData.action';

// @Injectable()
// export class MovieEffects {

//   constructor(
//     private actions$: Actions,
//     private store: Store
//   ) {}

//   setDisplayData$ = createEffect(() => this.actions$.pipe(
//     ofType(ROUTER_NAVIGATION),             // get router navigated ngrx actions
//     mergeMap(() => this.store.pipe(
//       select(selectRouteParam('id')))     // get the id from the router store
//     ),
//     map((id: string) => setDisplayCategory({ id })),  // dispatch a new action to set the selected id
//   ));


// }
