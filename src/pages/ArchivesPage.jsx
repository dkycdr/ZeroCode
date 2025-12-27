import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import NeuralVaultSystem from '../components/neural-vault/NeuralVaultSystem';

export default function ArchivesPage() {
    return (
        <AppLayout fullWidth={true}>
            <div className="fixed inset-0 top-16 bg-black">
                <NeuralVaultSystem />
            </div>
        </AppLayout>
    );
}
