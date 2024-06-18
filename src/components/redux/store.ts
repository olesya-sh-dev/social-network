
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";


type PostPropsType = {
  id: string;
  message: string;
  likesCount: number;
};
type MyPostsPropsType = {
  posts: PostPropsType[];
};

type ProfilePropsType = 
  MyPostsPropsType & {
  newPostText: string;
}
type MessagePropsType = {
  id: string;
  message: string;
};

type DialogItemPropsType = {
  name: string;
  id: string;
  img: string;
};
type DialogsPropsType = {
  dialogs: DialogItemPropsType[];
  messages: MessagePropsType[];
  newMessageBody: string;
};
type SidebarPropsType = {
  friends: DialogItemPropsType[];
};
type StateType = {
  profilePage: {
    posts: PostPropsType[];
    //newPostText: string;
  };
  dialogsPage: {
    dialogs: DialogItemPropsType[];
    messages: MessagePropsType[];
    newMessageBody: string;
  };
  sidebar: {
    friends: DialogItemPropsType[];
  };
};
//export 
const store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you", likesCount: 15 },
        { id: "2", message: "It's my first post", likesCount: 20 },
      ],
      //newPostText: "+++",
    },
    dialogsPage: {
      dialogs: [
        {
          id: "1",
          name: "Dimych",
          img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303073.jpg?w=826&t=st=1712399351~exp=1712399951~hmac=27776bd4ae88075e2fe852104bd704e20c8e84863033d0a0a3cc2c401aa3788e",
        },
        {
          id: "2",
          name: "Andrey",
          img: "https://img.freepik.com/premium-psd/3d-male-cartoon-character-avatar_235528-1107.jpg?w=826",
        },
        {
          id: "3",
          name: "Sveta",
          img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671153.jpg?w=826&t=st=1712399497~exp=1712400097~hmac=69cb6df93dcd7c811600177351c76f0fca7f90ccabf153219cda3ca6300555b8",
        },
        {
          id: "4",
          name: "Sasha",
          img: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg?w=826&t=st=1712403062~exp=1712403662~hmac=e62bc0ce0c09a228ccd830a9602cf1bb1c5ae0afb194b693fdc7c0ecfabbd575",
        },
        {
          id: "5",
          name: "Viсtor",
          img: "https://img.freepik.com/free-psd/3d-illustration-bald-person_23-2149436183.jpg?w=826&t=st=1712403186~exp=1712403786~hmac=eff4fc6d688446f61747a361e7fab73eac4b5b29e4a9733043bebfb70d588081",
        },
        {
          id: "6",
          name: "Valera",
          img: "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-88.jpg?w=826",
        },
      ],
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How is your React?" },
        { id: "3", message: "Yo" },
        { id: "4", message: "Yo" },
        { id: "5", message: "Yo" },
      ],
      //newMessageBody: "+++",
    },
    sidebar: {
      friends: [
        {
          id: "1",
          name: "Dimych",
          img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303073.jpg?w=826&t=st=1712399351~exp=1712399951~hmac=27776bd4ae88075e2fe852104bd704e20c8e84863033d0a0a3cc2c401aa3788e",
        },
        {
          id: "2",
          name: "Andrey",
          img: "https://img.freepik.com/premium-psd/3d-male-cartoon-character-avatar_235528-1107.jpg?w=826",
        },
        {
          id: "3",
          name: "Sveta",
          img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671153.jpg?w=826&t=st=1712399497~exp=1712400097~hmac=69cb6df93dcd7c811600177351c76f0fca7f90ccabf153219cda3ca6300555b8",
        },
      ],
    },
  },
  
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {

   //this._state.profilePage = profileReducer(this._state.profilePage, action);
    //this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber();

    console.log(action);
  },
    
 
};

//window.store = store;
