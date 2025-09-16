export default function Tasks({ tasks, checked, toggleTask }) {
  return (
    <section className="tasks__section">
      {tasks.length === 0 ? (
        <p className="tasks__muted">
          I’ve been swimming around these ideas… ready for some cleaning?
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
