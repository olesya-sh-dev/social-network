// export type UserType = {
//   id: number;
//   photoUrl: string;
//   followed: boolean;
//   fullName: string;
//   status: string;
//   location: { city: string; country: string };
// };
export type UserType ={
  name: string
    id: number
    photos: {
      small: string
      large: string
    }
    status: any
    followed: boolean
}

const initialState = {
  users: [] as UserType[],
  pageSize:5,
  totalUsersCount: 0,
  currentPage: 5,
  isFetching: false
};
type InitialStateType = typeof initialState;

type SetUsersActionCreatorType = ReturnType<typeof setUsersAC>;

type FollowctionCreatorType = ReturnType<typeof followAC>;
type UnfollowctionCreatorType = ReturnType<typeof unfollowAC>;
type CurrentPageActionCreatorType = ReturnType<typeof currentPageAC>;
type SetTotalUsersCountActionCreatorType = ReturnType<typeof setTotalUsersCountAC>;
type ToggleIsFetchingActionCreatorType = ReturnType<typeof setIsFetchingAC>;

type ActionType =
  | SetUsersActionCreatorType
  | FollowctionCreatorType
  | UnfollowctionCreatorType
  | CurrentPageActionCreatorType
  | SetTotalUsersCountActionCreatorType
  | ToggleIsFetchingActionCreatorType;
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
    case "CURRENT-PAGE": {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case "SET-TOTAL-USERS-COUNT": {
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }
    case "TOGGLE-IS-FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching
      }
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
export const currentPageAC = (currentPage: number) => {
  return {
    type: "CURRENT-PAGE",
    currentPage,
  } as const;
};
export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalCount,
  } as const;
};
export const setIsFetchingAC = (isFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  } as const;
};
