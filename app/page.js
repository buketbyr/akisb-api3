"use client";
import { useState, useEffect } from 'react';

export default function Page() {
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/api/entries").then(res => res.json()).then(setEntries);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, content })
    });
    setCategory("");
    setContent("");
    const newEntries = await fetch("/api/entries").then(res => res.json());
    setEntries(newEntries);
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ak\u0131\u015f Bilinci Uygulamas\u0131</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <label>
            Kategori:
            <select value={category} onChange={e => setCategory(e.target.value)} required>
              <option value="">Se\u00e7iniz</option>
              <option value="g\u00fcnl\u00fck">G\u00fcnl\u00fck</option>
              <option value="not">Not</option>
              <option value="di\u011fer">Di\u011fer</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Metin:
            <textarea value={content} onChange={e => setContent(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Kaydet</button>
      </form>

      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <strong>{entry.category}</strong>: {entry.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
