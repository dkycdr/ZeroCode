import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthProvider';
import { ProgressProvider } from './contexts/ProgressProvider';
import LandingPage from './pages/LandingPage';
import LearningLayout from './pages/LearningLayout';
import CourseSyllabus from './pages/CourseSyllabus';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailVerification from './pages/EmailVerification';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminAccess from './pages/AdminAccess';
import Library from './pages/Library';
import Forum from './pages/Forum';
import ForumPost from './pages/ForumPost';
import Leaderboard from './pages/Leaderboard';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return null;
    if (!user) return <Navigate to="/login" />;
    return children;
};

const AdminRoute = ({ children }) => {
    const { user, loading, isAdmin } = useAuth();
    if (loading) return null;
    if (!user) return <Navigate to="/login" />;
    if (!isAdmin) return <Navigate to="/dashboard" />;
    return children;
};

const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return null;
    if (user) return <Navigate to="/dashboard" />;
    return children;
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <ProgressProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/register" element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    } />
                    <Route path="/verify-email" element={<EmailVerification />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />

                    {/* Admin Routes */}
                    <Route path="/admin/access" element={
                        <ProtectedRoute>
                            <AdminAccess />
                        </ProtectedRoute>
                    } />
                    <Route path="/admin" element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    } />

                    {/* Course Syllabus - shows all units/lessons */}
                    <Route path="/course/:courseId" element={
                        <ProtectedRoute>
                            <CourseSyllabus />
                        </ProtectedRoute>
                    } />

                    {/* Learning Environment - specific lesson/quiz/project */}
                    <Route path="/learn/:courseId/:itemId" element={
                        <ProtectedRoute>
                            <LearningLayout />
                        </ProtectedRoute>
                    } />

                    {/* Legacy route - redirect to syllabus */}
                    <Route path="/learn/:courseId" element={
                        <ProtectedRoute>
                            <CourseSyllabus />
                        </ProtectedRoute>
                    } />

                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />

                    {/* Library */}
                    <Route path="/resources" element={
                        <ProtectedRoute>
                            <Library />
                        </ProtectedRoute>
                    } />

                    {/* Forum */}
                    <Route path="/community" element={
                        <ProtectedRoute>
                            <Forum />
                        </ProtectedRoute>
                    } />
                    <Route path="/forum/:postId" element={
                        <ProtectedRoute>
                            <ForumPost />
                        </ProtectedRoute>
                    } />

                    {/* Leaderboard */}
                    <Route path="/leaderboard" element={
                        <ProtectedRoute>
                            <Leaderboard />
                        </ProtectedRoute>
                    } />
                    
                    {/* Catch all */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                </ProgressProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
