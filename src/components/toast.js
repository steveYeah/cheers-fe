import React from "react";

function Toast(props) {
  if (props.error) {
    return (
      <div className="jumbotron vertical-center bg-transparent">
        <div className="speech-bubble-ds">
          <div className="text-center">
            <p> {props.error.message}</p>
          </div>
          <div className="speech-bubble-ds-arrow"></div>
        </div>
      </div>
    );
  }

  if (props.isLoading) {
    return (
      <div className="jumbotron vertical-center bg-transparent">
        <div className="speech-bubble-ds">
          <div className="text-center">
            <p> Errrr.... </p>
          </div>
          <div className="speech-bubble-ds-arrow"></div>
        </div>
      </div>
    );
  }

  if (!props.toast) {
    return (
      <div className="jumbotron vertical-center bg-transparent">
        <div className="speech-bubble-ds">
          <div className="text-center">
            <p> Well, this is awkward.. </p>
          </div>
          <div className="speech-bubble-ds-arrow"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="jumbotron vertical-center bg-transparent">
      <div className="speech-bubble-ds">
        <div className="text-center">
          <p> {props.toast.quote}</p>
        </div>
        <div className="text-right">
          <p className="text-muted">
            <i>{props.toast.cheers}!!!</i>
          </p>
        </div>
        <div className="speech-bubble-ds-arrow"></div>
      </div>

      <div className="vertial-center text-center">
        <button className="btn btn-default" onClick={props.onClick}>
          <svg
            className="bi bi-arrow-clockwise text-muted"
            width="32"
            height="32"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63l-.5.865A5.472 5.472 0 0010 4.5z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M10.646 1.646a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L12.793 4.5l-2.147-2.146a.5.5 0 010-.708z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toast;
