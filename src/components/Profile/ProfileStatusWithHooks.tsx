import React, { ChangeEvent, useState } from "react";

export const ProfileStatusWithHooks = (props: any) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
    props.updateStatus(status)
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };
   const onStatusChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setStatus(e.currentTarget.value)
   }

  return (
    <>
      <div>
         {!editMode && 
          <div>
            <span onDoubleClick={activateEditMode}>
              {props.status || "_______"}
            </span>
          </div>
}
        {editMode && (
      
          <div>
            <input
              onBlur={deactivateEditMode}
              autoFocus={true}
              value={status}
              onChange={onStatusChange}          
            />
          </div>
        )}
      </div>
    </>
  );
};
