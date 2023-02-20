import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const data = [
        {name: 'Michael M.', salary: 800, increase: true, id: 1},
        {name: 'Sonya M.', salary: 3000, increase: true, id: 2},
        {name: 'Blackberry P.', salary: 2100, increase: false, id: 3},
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