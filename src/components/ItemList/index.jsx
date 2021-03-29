import Item from '../Item'
import './ItemList.scss'

const ItemList = ({items=[]}) =>{
    return(
        <div className="item-list">
            <div className="item-list-cards">
            {items.map(item => <Item key={item.id} item={item}/>)}
            </div>
        </div>
    )
}
export default ItemList;