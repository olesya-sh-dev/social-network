import { AppStateType } from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        id: state.profilePage.posts.id,
        message: state.profilePage.posts.message,
        likesCount: state.profilePage.posts.likesCount,
    };
};

export const PostContainer = connect(mapStateToProps)(Post)