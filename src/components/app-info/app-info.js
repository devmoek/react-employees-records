import './app-info.css'

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employees records at Myers</h1>
            <h2>Total staff: {employees}</h2>
            <h2>Bonus will get: {increased}</h2>
        </div>
    )
}

export default AppInfo;