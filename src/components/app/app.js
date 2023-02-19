import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const data = [
        {name: 'Michael M.', salary: 800, increase: true},
        {name: 'Sonya M.', salary: 3000, increase: true},
        {name: 'Blackberry M.', salary: 2100, increase: false},
    ];


    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeeAddForm />
        </div>
    );
}

export default App;