import React from 'react'
const Categories = ({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}>Все</li>
                {items ?
                    items.map((item, index) => (
                        <li className={activeItem === index ? "active" : ''} 
                    onClick={() => onSelectItem(index)} key={`${item}_${index}`}>{item}</li>
                )) : undefined}
            </ul>
        </div>
    );
}

export default Categories; 