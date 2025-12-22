import TopNavbar from './TopNavbar';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-indigo-500/30">
            <TopNavbar />
            <main className="pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
