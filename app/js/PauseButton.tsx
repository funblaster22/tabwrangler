import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./Types";

export default function PauseButton() {
  const dispatch = useDispatch();
  const paused = useSelector((state: AppState) => state.settings.paused);

  function pause() {
    dispatch({ key: "paused", type: "SET_PAUSED_SETTING", value: true });
  }

  function play() {
    dispatch({ key: "paused", type: "SET_PAUSED_SETTING", value: false });
  }

  return (
    <button className="btn btn-outline-dark btn-sm" onClick={paused ? play : pause} type="button">
      {paused ? (
        <>
          <i className="fas fa-play" /> {chrome.i18n.getMessage("extension_resume")}
        </>
      ) : (
        <>
          <i className="fas fa-pause" /> {chrome.i18n.getMessage("extension_pause")}
        </>
      )}
    </button>
  );
}
