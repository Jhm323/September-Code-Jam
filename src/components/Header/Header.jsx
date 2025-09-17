import { useMemo, useState } from "react";
import Tasks from "../Tasks/Tasks.jsx";
import Progress from "../Progress/Progress.jsx";

export default function Header() {
  return (
    <div className="app__page">
      <h1 className="app__title">Tidy Fish</h1>
      <div className="app__card">
        <div className="app__header">
          <div className="app__emoji"></div>
          <div className="app__header-text">
            <p className="app__description">
              Keeping eyes on the mess so you don't have to
            </p>
          </div>
        </div>

        <div className="app__controls">
          <button className="app__button" onClick={generateChallenge}>
            Click to Tidy
          </button>
        </div>

        <Tasks tasks={tasks} toggleTask={toggleTask} checked={checked} />

        <Progress progressPct={progressPct} />

        {progressPct === 100 && tasks.length > 0 && (
          <div className="app__complete-message">
            🎉 All tasks complete! You deserve some Fish Food!
          </div>
        )}
      </div>
    </div>
  );
}
