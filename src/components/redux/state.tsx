export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number;
};
export type MyPostsPropsType = {
  postData: PostPropsType[];
};

export type ProfilePropsType = {
  postData: PostPropsType[];
};
export type MessagePropsType = {
  id: string;
  message: string;
};

export type DialogItemPropsType = {
  name: string;
  id: string;
};
export type DialogsPropsType = {
  dialogs: DialogItemPropsType[];
  messages: MessagePropsType[];
};
export type StateType = {
  profilePage: {
    posts: PostPropsType[];
    newPostText: string;
  };
  dialogsPage: {
    dialogs: DialogItemPropsType[];
    messages: MessagePropsType[];
  };
  sidebar: {};
};

export const state: StateType = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 20 },
    ],
    newPostText: "",
  },
  dialogsPage: {
    dialogs: [
      { id: "1", name: "Dimych" },
      { id: "2", name: "Andrey" },
      { id: "3", name: "Sveta" },
      { id: "4", name: "Sasha" },
      { id: "5", name: "Viсtor" },
      { id: "6", name: "Valera" },
    ],
    messages: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How is your React?" },
      { id: "3", message: "Yo" },
      { id: "4", message: "Yo" },
      { id: "5", message: "Yo" },
    ],
  },
  sidebar: {},
};
