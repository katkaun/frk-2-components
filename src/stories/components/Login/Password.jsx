import React from "react";

const Password = () => {
    const onPasswordChange = (e) => {
        console.log(e.target.value);
    }

  return (
    <div>
      Password
      <input type="password" onChange={onPasswordChange} />
    </div>
  );
};

export default Password;
