export type UserType = {
  id: number;
  photoUrl: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: { city: string; country: string };
};

const initialState = {
  users: [] as UserType[]
};
type InitialStateType = typeof initialState;

type SetUsersActionCreatorType = ReturnType<typeof setUsersAC>;

type FollowctionCreatorType = ReturnType<typeof followAC>;
type UnfollowctionCreatorType = ReturnType<typeof unfollowAC>;

type ActionType =
  | SetUsersActionCreatorType
  | FollowctionCreatorType
  | UnfollowctionCreatorType;
export const usersReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case "SET-USERS": {
      return {
        ...state,
        users: [...action.users],
      };
    }
    default:
      return state;
  }
};

export const setUsersAC = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};

export const followAC = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unfollowAC = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};
