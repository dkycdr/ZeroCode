import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthProvider';
import { ProgressProvider } from './contexts/ProgressProvider';
import LearningLayout from './pages/LearningLayout';
import CourseSyllabus from './pages/CourseSyllabus';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Forum from './pages/Forum';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return null;
    if (!user) return <Navigate to="/login" />;
    return children;
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <ProgressProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

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
                    <Route path="/library" element={
                        <ProtectedRoute>
                            <Library />
                        </ProtectedRoute>
                    } />
                    <Route path="/resources" element={<Navigate to="/library" />} />
                    <Route path="/forum" element={
                        <ProtectedRoute>
                            <Forum />
                        </ProtectedRoute>
                    } />
                    <Route path="/community" element={<Navigate to="/forum" />} />
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                </Routes>
                </ProgressProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
