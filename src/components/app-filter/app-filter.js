import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'like', label: 'Bonused employees'},
        {name: 'moreThen1000', label: 'Salary more then $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;

