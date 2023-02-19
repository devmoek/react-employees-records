import EmployeesListItem from "../employees-list-item.js/employees-list-item";
import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            // {...item} is the same as 'name={item.name} salary={item.salary}'
            <EmployeesListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;

