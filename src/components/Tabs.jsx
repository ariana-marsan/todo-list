
export function Tabs(props) {
    const tabs = ['All', "Active", "Completed"];
    const { todos, selectedTab, setSelectedTab } = props;

    return (
        <>
        <nav className="sections">
            {tabs.map((tab, tabIndex) => {
                const numOfTabs = tab === 'All' ? 
                todos.length : 
                tab === "Active" ? 
                todos.filter(val => !val.completed).length : 
                todos.filter(val => val.completed).length

                return (
                    <button key={tabIndex} className={(tab === selectedTab ? 'tab-selected' : '')} 
                    onClick={()=> {setSelectedTab(tab)}}>
                        <h4>{tab} <span>({numOfTabs})</span></h4>
                    </button>
                );
            })}
        </nav>
        <hr></hr>
        </>
    )
}