import { combineReducers } from 'redux';
import initLayout from './initLayout/model';
import { AnyAction } from 'redux';
import { createReducer } from 'redux-starter-kit';

const modelArray: Model[] = [initLayout];

export default combineReducers<any, AnyAction>(creatStoreSlice(modelArray));

function creatStoreSlice(modelA: Model[]) {
  const storeSlice: any = {};

  modelA.forEach((model: any) => {
    const sliceReducers = model.reducer;
    const _sliceReducers: any = {};
    for (const key in sliceReducers) {
      if (sliceReducers.hasOwnProperty(key)) {
        const sliceReducer = sliceReducers[key];
        _sliceReducers[model.namespace + '/' + key] = sliceReducer;
      }
    }

    storeSlice[model.namespace] = createReducer(model.state, _sliceReducers);
  });

  return storeSlice;
}
