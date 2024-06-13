import React, { ComponentType} from "react";
import { Navigate} from "react-router-dom";
import { AppStateType } from "../components/redux/redux-store";
import { connect } from "react-redux";


type MapStatePropsType = {
  isAuth: boolean

}
const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth

  }
}
export function withAuthRedirect <T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStatePropsType)=> {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Navigate to="/login" />
    return <Component {...restProps  as T & {}}/>
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent
}
    
// type RedirectComponentProps = {
//   isAuth: boolean;
  
// }
//  let mapStateToPropsForRedirect = (state: AppStateType) => {
//     return {
//       isAuth: state.auth.isAuth
//     }
//   }
    // class RedirectComponent extends React.Component<RedirectComponentProps> {
    //     render() {
    //         if (!this.props.isAuth) return <Navigate to="/login" />
    //         return <Component {...this.props} />
    //     }
    // }

    // let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    // return ConnectedAuthRedirectComponent
//}



        