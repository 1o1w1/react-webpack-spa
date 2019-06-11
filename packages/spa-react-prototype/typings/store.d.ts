import { RouterStore as _RouterStore } from 'mobx-react-router';
import { ReducersMapObject ,AnyAction} from 'redux';

declare global {
//   /**
//    * type from mobx-react-router
//    *
//    * @interface RouterStore
//    * @extends {_RouterStore}
//    */
//   interface RouterStore extends _RouterStore {}

//   /**
//    * type for all store
//    *
//    * @interface IStore
//    */
//   interface IStore {
//     authStore: IAuthStore.AuthStore;
//     userStore: IUserStore.UserStore;
//     globalStore: IGlobalStore.GlobalStore;
//     socketStore: ISocketStore.SocketStore;
//     routerStore: RouterStore;
//   }
 
  declare interface state {
    [key: string]: any;
  }
  

// interface Action {
//   type: any;
//   [key: string]: any;
// }
declare interface Model {
  namespace: string;
  state: state
  reducer: ReducersMapObject<any, AnyAction>;
}
}


