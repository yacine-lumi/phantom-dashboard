import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue dans votre Panel Fantôme 👻</h1>
        <p className="text-lg mb-6">Voici votre lien affilié intelligent :</p>
        <a
          href="https://example.com/aff?ref=phantomFR"
          className="text-blue-400 underline text-xl hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://example.com/aff?ref=phantomFR
        </a>
      </div>

      <div className="mt-12 w-full max-w-3xl">
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">📊 Statistiques Rapides</h2>
          <ul className="list-disc list-inside text-zinc-300">
            <li>Impressions aujourd'hui : 29</li>
            <li>CTR moyen : 5.7%</li>
            <li>Conversions estimées : 2</li>
            <li>Gains potentiels : 4.60 €</li>
          </ul>
        </div>
      </div>

      <footer className="mt-16 text-zinc-500 text-sm">
        Propulsé par <span className="text-purple-400">Elite Phantom System</span>
      </footer>
    </div>
  );
}
