function Cell({ type, tower, onClick, isSelected, children }) {

    const colorMap = {
        'path': '#ccc', 
        'empty': 'white', 
        'End': '#f00', 
        'Start': '#0f0', 
        '1': 'purple',
        '2': 'blue',
        '3': 'pink',
    };

    return (
        <div
            style={{
                width: '9vw',
                height: '9vw',
                boxSizing: 'border-box', 
                border: isSelected ? '3px solid gold' : '1px solid #999',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colorMap[type],
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Cell;