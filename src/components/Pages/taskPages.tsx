export const TaskAppPages: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
    <div>
    <header>
        <h1>Task Manager</h1>
    </header>
    <main>{children}</main>
    </div>
    );
};