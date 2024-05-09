import { Button } from "../Button";
import { UsersMapPropsType } from "./UsersContainer";

export const Users = (props: UsersMapPropsType) => {
  if (props.users.length === 0) {
  props.setUsers([{
    id: 1,
    photoUrl:
      "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303073.jpg?w=826&t=st=1712399351~exp=1712399951~hmac=27776bd4ae88075e2fe852104bd704e20c8e84863033d0a0a3cc2c401aa3788e",
    followed: true,
    fullName: "Dimych",
    status: "I am a boss",
    location: { city: "Minsk", country: "Belarus" },
  },
  {
    id: 2,
    photoUrl:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_235528-1107.jpg?w=826",
    followed: false,
    fullName: "Andrey",
    status: "I am a boss",
    location: { city: "Moscow", country: "Russia" },
  },
  {
    id: 3,
    photoUrl:
      "https://img.freepik.com/premium-psd/3d-male-cartoon-character-avatar_235528-1107.jpg?w=826",
    followed: true,
    fullName: "Sveta",
    status: "I am a boss",
    location: { city: "Minsk", country: "Belarus" },
  },
  {
    id: 4,
    photoUrl:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_235528-1107.jpg?w=826",
    followed: false,
    fullName: "Sasha",
    status: "I am a boss too",
    location: { city: "Kiev", country: "Ukraine" },
  },
  {
    id: 5,
    photoUrl:
      "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-88.jpg?w=826",
    followed: true,
    fullName: "Valera",
    status: "I am a boss too",
    location: { city: "Minsk", country: "Belarus" },
  },])
  }
  return (
    <>
      {props.users.map((u, index) => (
        <div style={{ display: "flex" }} key={index}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <img
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              src={u.photoUrl}
              alt="img"
           
            />
            {u.followed ? (
              <Button 
                onClick={() => {
                  props.unfollow(u.id);
                }}
                
              >
                Unfollow
              </Button>
            ) : (
              <Button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </Button>
            )}
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div >{u.fullName}</div>
              <span>{u.status}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{u.location.city}</span>
              <span>{u.location.country}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

