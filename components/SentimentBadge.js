import React, { useState } from 'react';

function scoreColor(score) {
  if (score === null || score === undefined) return '#aaa';
  if (score >= 4) return '#22a855';
  if (score >= -3) return '#f5a623';
  return '#e03b3b';
}

function trustLabel(score, label) {
  if (score === null) return null;
  if (label === 'positive') return 'Trusted';
  if (label === 'negative') return 'Use Caution';
  if (label) return label.charAt(0).toUpperCase() + label.slice(1);
  if (score >= 4) return 'Trusted';
  if (score >= -3) return 'Mixed';
  return 'Use Caution';
}

function formatScore(score) {
  if (score === null || score === undefined) return null;
  return score > 0 ? `+${score}` : `${score}`;
}

function ConfidencePips({ confidence }) {
  const levels = { low: 1, medium: 2, high: 3 };
  const filled = levels[confidence] || 0;
  return (
    <span className="sentiment-confidence-pips" title={`Confidence: ${confidence}`}>
      {[1, 2, 3].map(i => (
        <span key={i} className={`pip${i <= filled ? ' filled' : ''}`} />
      ))}
    </span>
  );
}

function SourceRow({ label, data }) {
  if (!data) return null;
  return (
    <div className="sentiment-source-row">
      <span className="sentiment-source-label">{label}</span>
      <span className="sentiment-source-stat">{data.threads_found} threads · {data.comments_after_filter} signals used</span>
    </div>
  );
}

export default function SentimentBadge({ sentiment, brandName }) {
  const [open, setOpen] = useState(false);

  if (!sentiment) return null;

  const { score, label, confidence, summary, signal_count,
    filtered_count, filter_reasons, sources_used, reddit_threads,
    methodology_version, available, loading,
    volume_factor, velocity_factor, velocity_label } = sentiment;

  if (loading) {
    return (
      <div className="sentiment-badge sentiment-loading">
        <span className="sentiment-spinner" />
        <span className="sentiment-badge-label">Brand Trust</span>
      </div>
    );
  }

  if (!available || score === null) {
    return (
      <div className="sentiment-badge sentiment-unavailable" title="Not enough community data">
        <span className="sentiment-badge-dot" style={{ background: '#ccc' }} />
        <span className="sentiment-badge-label">No brand data</span>
      </div>
    );
  }

  const color = scoreColor(score);
  const tLabel = trustLabel(score, label);

  return (
    <>
      <button
        className="sentiment-badge"
        style={{ '--score-color': color }}
        onClick={(e) => { e.stopPropagation(); setOpen(true); }}
        title="View brand trust score"
      >
        <span className="sentiment-score" style={{ color }}>{formatScore(score)}</span>
        <span className="sentiment-badge-divider" />
        <span className="sentiment-badge-label">Brand Trust</span>
        <ConfidencePips confidence={confidence} />
      </button>

      {open && (
        <div className="sentiment-modal-overlay" onClick={() => setOpen(false)}>
          <div className="sentiment-modal" onClick={e => e.stopPropagation()}>
            <div className="sentiment-modal-header">
              <div>
                <div className="sentiment-modal-title">Brand Trust</div>
                {brandName && <div className="sentiment-modal-product">{brandName}</div>}
              </div>
              <button className="sentiment-modal-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Score display */}
            <div className="sentiment-score-display">
              <span className="sentiment-score-big" style={{ color }}>{formatScore(score)}</span>
              <div className="sentiment-score-meta">
                <span className="sentiment-label-pill" style={{ background: color }}>
                  {tLabel}
                </span>
                <span className="sentiment-confidence-text">
                  Confidence: <strong>{confidence}</strong>
                  <ConfidencePips confidence={confidence} />
                </span>
              </div>
            </div>

            {/* Summary */}
            {summary && (
              <p className="sentiment-summary">{summary}</p>
            )}

            {/* Methodology */}
            <div className="sentiment-methodology">
              <div className="sentiment-method-title">How this was calculated</div>

              <div className="sentiment-method-stats">
                <div className="sentiment-stat">
                  <span className="sentiment-stat-num">{signal_count}</span>
                  <span className="sentiment-stat-label">signals used</span>
                </div>
                <div className="sentiment-stat">
                  <span className="sentiment-stat-num">{filtered_count}</span>
                  <span className="sentiment-stat-label">filtered out</span>
                </div>
                <div className="sentiment-stat">
                  <span className="sentiment-stat-num">{reddit_threads?.length || 0}</span>
                  <span className="sentiment-stat-label">Reddit threads</span>
                </div>
              </div>

              {/* Volume + Velocity factors */}
              {(volume_factor != null || velocity_factor != null) && (
                <div className="sentiment-factors">
                  <div className="sentiment-factors-title">Score weighting</div>
                  <div className="sentiment-factor-row">
                    <span className="sentiment-factor-label">Volume</span>
                    <div className="sentiment-factor-bar">
                      <div className="sentiment-factor-fill" style={{ width: `${volume_factor || 0}%` }} />
                    </div>
                    <span className="sentiment-factor-pct">{volume_factor || 0}%</span>
                    <span className="sentiment-factor-note">
                      {signal_count < 10 ? 'low signal' : signal_count < 30 ? 'moderate' : 'strong'}
                    </span>
                  </div>
                  <div className="sentiment-factor-row">
                    <span className="sentiment-factor-label">Recency</span>
                    <div className="sentiment-factor-bar">
                      <div className="sentiment-factor-fill" style={{ width: `${Math.min(velocity_factor || 0, 100)}%`, background: (velocity_factor || 0) >= 90 ? '#22a855' : '#f5a623' }} />
                    </div>
                    <span className="sentiment-factor-pct">{velocity_factor || 0}%</span>
                    <span className="sentiment-factor-note">{velocity_label || '—'}</span>
                  </div>
                </div>
              )}

              {/* Sources */}
              {sources_used && (
                <div className="sentiment-sources">
                  <SourceRow label="Reddit" data={sources_used.reddit} />
                </div>
              )}

              {/* Reddit thread links — these are the "product examples" driving the score */}
              {reddit_threads?.length > 0 && (
                <div className="sentiment-threads">
                  <div className="sentiment-threads-label">What's being discussed</div>
                  {reddit_threads.map((t, i) => (
                    <a
                      key={i}
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sentiment-thread-link"
                    >
                      <span className="sentiment-thread-sub">{t.subreddit}</span>
                      <span className="sentiment-thread-title">{t.title?.slice(0, 70)}{t.title?.length > 70 ? '…' : ''}</span>
                      <span className="sentiment-thread-meta">↑{t.score} · {t.comment_count} comments</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Filters applied */}
              {filtered_count > 0 && filter_reasons?.length > 0 && (
                <div className="sentiment-filters">
                  <div className="sentiment-filters-label">
                    {filtered_count} signal{filtered_count !== 1 ? 's' : ''} removed:
                  </div>
                  {[...new Set(filter_reasons)].map((r, i) => (
                    <span key={i} className="sentiment-filter-tag">✗ {r}</span>
                  ))}
                </div>
              )}

              <div className="sentiment-method-footer">
                Methodology {methodology_version} · Updates every 24h · Reddit community data
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
