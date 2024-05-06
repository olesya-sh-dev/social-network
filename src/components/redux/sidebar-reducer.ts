


type ChangeFrendsInSidebarActionCreatorType = ReturnType<typeof changeFrendsInSidebarActionCreator>;

type ActionsSidebarType = ChangeFrendsInSidebarActionCreatorType
export type FriendType = {
  id: string
  name: string
  img: string
}

let initialState = {
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
  ] as FriendType[]
} 
type SidebarPropsType = typeof initialState
export const sidebarReducer = (
  state: SidebarPropsType = initialState,
  action: ActionsSidebarType
): SidebarPropsType => {
  switch (action.type) {
    case "CHANGE-FRIEND":
      return {
        ...state,
        friends: [
          {
            id: "4",
            name: "Viktor",
            img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303073.jpg?w=826&t=st=1712399351~exp=1712399951~hmac=27776bd4ae88075e2fe852104bd704e20c8e84863033d0a0a3cc2c401aa3788e",
          },
          ...state.friends,
       
        ],
      };
      default:
        return state;
  }
}
export const changeFrendsInSidebarActionCreator = () => ({ type: "CHANGE-FRIEND" }) as const