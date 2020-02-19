import React from "react";

function Toast(props) {
  if (props.error) {
    return <div>{props.error.message}</div>;
  }

  if (props.isLoading) {
    return (
      <div className="jumbotron vertical-center bg-white">
        <div className="card w-50 mx-auto">
          <div className="card-body text-center">
            <p className="card-text">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!props.toast) {
    return <div></div>;
  }

  return (
    <div className="jumbotron vertical-center bg-white">
      <div className="card w-50 mx-auto">
        <div className="card-body text-center">
          <p className="card-text">{props.toast.quote}</p>
        </div>
      </div>

      <div className="w-50 mx-auto">
        <div className="text-right">
          <p className="text-muted">
            <i>{props.toast.cheers}!!!</i>
          </p>
        </div>

        <div className="vertial-center text-center">
          <button className="refresh" onClick={props.onClick}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
