import { useMemo, useState } from "react";
import Tasks from "../Tasks/Tasks.jsx";
import Progress from "../Progress/Progress.jsx";

export default function App() {
  const TASK_POOL = useMemo(
    () => [
      "Wipe kitchen counters",
      "Vacuum one room",
      "Take out recycling",
      "Load/unload dishwasher",
      "Clean bathroom sink",
      "Quick mop high-traffic area",
      "Dust shelves/TV stand",
      "Change bed linens",
      "Tidy entryway/shoes",
      "Wipe mirrors",
      "Empty all trash bins",
      "Declutter coffee table",
      "Spot-clean stovetop",
      "Fold & put away laundry (10 items)",
      "Wipe doorknobs & light switches",
    ],
    []
  );

  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState({});

  const progressPct = tasks.length
    ? Math.round(
        (Object.values(checked).filter(Boolean).length / tasks.length) * 100
      )
    : 0;

  function generateChallenge() {
    const count = Math.floor(Math.random() * 3) + 3; // 3–5
    const pool = [...TASK_POOL];
    const pick = [];
    for (let i = 0; i < count && pool.length; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      pick.push(pool[idx]);
      pool.splice(idx, 1);
    }
    setTasks(pick);
    setChecked({});
  }

  function toggleTask(task) {
    setChecked((prev) => ({ ...prev, [task]: !prev[task] }));
  }

  return (
    <div className="app__page">
      <div className="app__card">
        <div className="app__header">
          <div className="app__emoji"></div>
          <div className="app__header-text">
            <h1 className="app__title">Tidy Fish</h1>
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
