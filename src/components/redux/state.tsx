import { v1 } from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


export type PostPropsType = {
  id: string;
  message: string;
  likesCount: number;
};
export type MyPostsPropsType = {
  postData: PostPropsType[];
};

export type ProfilePropsType = {
  postData: PostPropsType[];
  newPostText: string;
};
export type MessagePropsType = {
  id: string;
  message: string;
};

export type DialogItemPropsType = {
  name: string;
  id: string;
  img?: string;
};
export type DialogsPropsType = {
  dialogs: DialogItemPropsType[];
  messages: MessagePropsType[];
};
export type SidebarPropsType = {
  friends: DialogItemPropsType[];
};
export type StateType = {
  profilePage: {
    posts: PostPropsType[];
    newPostText: string;
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
export const store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you", likesCount: 15 },
        { id: "2", message: "It's my first post", likesCount: 20 },
      ],
      newPostText: "+++",
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
      newMessageBody: "+++",
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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  // addPost() {

  //   let newPost: PostPropsType = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.posts = [...this._state.profilePage.posts, newPost];
  //   console.log(this._state.profilePage.posts);

  //   this._callSubscriber();
  //   this._state.profilePage.newPostText = "";
  // },

  // upDateNewPostText(text: string) {
  //   this._state.profilePage.newPostText = text;
  //   console.log("hi");
  //   this._callSubscriber();
  // },

  addNewMessage() {
    let newMessageItem: MessagePropsType = {
      id: v1(),
      message: this._state.dialogsPage.newMessageBody,
    };
    this._state.dialogsPage.messages = [
      ...this._state.dialogsPage.messages,
      newMessageItem,
    ];
    this._callSubscriber();
    this._state.dialogsPage.newMessageBody = "";
  },
  upDateNewMessageText(newText: string) {
    this._state.dialogsPage.newMessageBody = newText;

    this._callSubscriber();
  },

  dispatch(action: any) {
    console.log(action);
    if (action.type === ADD_POST) {
      console.log("add");
      let newPost: PostPropsType = {
        id: v1(),
        // message: this._state.profilePage.newPostText,
        message: action.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts = [
        ...this._state.profilePage.posts,
        newPost,
      ];
      console.log(this._state.profilePage.posts);

      this._callSubscriber();
      this._state.profilePage.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      console.log("textarea");
      this._callSubscriber();
    }
  },

  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};


export const addPostActionCreator = (newPostText: string) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
// type addPostActionType = ReturnType<typeof addPostActionCreator>;
export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

//window.store = store;
