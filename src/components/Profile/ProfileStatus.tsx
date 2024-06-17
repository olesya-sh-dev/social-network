import React from "react";

class ProfileStatus extends React.Component<any, any> {
  state = {
    editMode: false,
    //status: this.props.status
  };
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <div>
              <span onDoubleClick={this.activateEditMode.bind(this)}>
                {this.props.status}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                autoFocus={true}
                value={this.props.status}
                onBlur={this.deactivateEditMode.bind(this)}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}
export default ProfileStatus;
