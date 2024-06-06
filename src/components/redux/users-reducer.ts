
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
  isFetching: true,
  followingInProgress: [] as Array<number>,
};

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
    case "TOGGLE-IS-FOLLOWING-PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          :state.followingInProgress.filter(id => id !== action.userId)
      }
    }
  
    default:
      return state;
  }
};

export const setUsers = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};

export const follow = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unfollow = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "CURRENT-PAGE",
    currentPage,
  } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalCount,
  } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  } as const;
};

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
  return {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
  } as const;
}

type InitialStateType = typeof initialState;

type SetUsersActionCreatorType = ReturnType<typeof setUsers>;

type FollowctionCreatorType = ReturnType<typeof follow>;
type UnfollowctionCreatorType = ReturnType<typeof unfollow>;
type CurrentPageActionCreatorType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountActionCreatorType = ReturnType<typeof setTotalUsersCount>;
type ToggleIsFetchingActionCreatorType = ReturnType<typeof toggleIsFetching>;
type ToggleFollowingProgressActionCreatorType = ReturnType<typeof toggleIsFollowingProgress>;

type ActionType =
  | SetUsersActionCreatorType
  | FollowctionCreatorType
  | UnfollowctionCreatorType
  | CurrentPageActionCreatorType
  | SetTotalUsersCountActionCreatorType
  | ToggleIsFetchingActionCreatorType
  | ToggleFollowingProgressActionCreatorType;