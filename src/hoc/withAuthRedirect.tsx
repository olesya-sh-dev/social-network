import React, { FC } from "react";
import { Navigate} from "react-router-dom";
import { AppStateType } from "../components/redux/redux-store";
import { connect } from "react-redux";

type RedirectComponentProps = {
  isAuth: boolean;
  // другие пропсы...
}
 let mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
      isAuth: state.auth.isAuth
    }
  }
export const withAuthRedirect = (Component: any) => {
    
    class RedirectComponent extends React.Component<RedirectComponentProps> {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}


// не работает с редиректом. Это классовый компонент.Нужен простой компонент. Или все страницы поместить в AuthRedirectComponent В КАЖДОМ КОМПОНЕНТЕ
        