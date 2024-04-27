import { connect } from "react-redux"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer"
import { MyPosts } from "./MyPosts"

let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)