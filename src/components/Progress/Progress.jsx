export default function Progress({ progressPct }) {
    return (
        <section className="progress">
            <div className="progress__meta">
                <span>Progress</span>
                <span>{progressPct}%</span>
            </div>
            <div className="progress__bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPct}>
                <div className="progress__fill" style={{ width: `${progressPct}%` }} />
            </div>

            <div className="progress__dust">
                <span className="progress__dust-emoji" aria-hidden>💨</span>
                <div className="progress__dust-track">
                    <div className="progress__dust-overlay" style={{ opacity: 1 - progressPct / 100 }} />
                </div>
                <span className="progress__dust-text">Cleaner!</span>
            </div>
        </section>
    );
}