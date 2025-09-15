export default function Tasks({ tasks, checked, toggleTask }) {
  return (
    <section className="tasks__section">
      <h2 className="tasks__section-title"> No need to flounder</h2>
      {tasks.length === 0 ? (
        <p className="tasks__muted">
          Click “Generate Challenge” to get 3–5 tasks.
        </p>
      ) : (
        <ul className="tasks__list">
          {tasks.map((t) => (
            <li key={t} className="tasks__task">
              <input
                id={t}
                type="checkbox"
                className="tasks__checkbox"
                checked={!!checked[t]}
                onChange={() => toggleTask(t)}
              />
              <label
                htmlFor={t}
                className={`tasks__label ${checked[t] ? "is-done" : ""}`}
              >
                {t}
              </label>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
