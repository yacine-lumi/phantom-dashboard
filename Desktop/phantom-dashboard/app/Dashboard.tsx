'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const [affiliateLink] = useState('https://phantom.cx.tools/?ref=phantom123');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink).then(() => setCopied(true));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord Phantom</h1>
      <div className="mb-4">
        <p className="mb-2">Lien d'affiliation :</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={affiliateLink}
            readOnly
            className="border p-2 rounded w-full"
          />
          <Button onClick={copyToClipboard}>
            {copied ? 'Copié !' : 'Copier'}
          </Button>
        </div>
      </div>
    </div>
  );
}
