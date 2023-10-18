import './card.css'
import user from '../../Assets/user.png'
import CustomIcon from '../customIcon';

const Card = ({ele}) => {
    let groupingBy = window.localStorage.getItem("group");

    const StatusIcons = new Map();
    StatusIcons.set("Todo", {name: "UpdateIcon",color: ""});
    StatusIcons.set("In progress" , {name: "PendingActionsIcon",color : 'orange'});
    StatusIcons.set("Backlog" , {name: "CheckCircleIcon",color: 'blue'})

    const priorityIcons = ["MoreHorizIcon","SignalCellularAlt1BarOutlinedIcon","SignalCellularAlt2BarOutlinedIcon","SignalCellularAltOutlinedIcon","PriorityHighIcon"];
    
    return ( 
        <div className="card">
            <div className='card-content'>
                <div className='card-header'>
                    <div className='card-title'>{ele.id}</div>
                    {groupingBy !== "user" && <img src={user} alt="" className='card-img'/>}
                </div>
                <div className='card-text'>
                    {groupingBy !== 'status' &&  StatusIcons.has(ele.status) &&
                                <CustomIcon 
                                    name={StatusIcons.get(ele.status).name}
                                    color={StatusIcons.get(ele.status).color} 
                                    size='15px'/>}  

                    <h5>{ele.title}</h5>
                </div>
                <div className='card-footer'>
                    {groupingBy !== "priority" && 
                        <CustomIcon 
                            name={priorityIcons[ele.priority]} 
                            color= {ele.priority === 4 && "red"} 
                            size='15px' 
                            border={true}/>}
                    <div className='card-tag'>
                        <CustomIcon name='CircleIcon' size='10px'/>
                        Feature Request
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;