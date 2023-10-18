import {useSelector } from "react-redux";
import Card from "../Card/card";
import './home.css';
import user from '../../Assets/user.png';
import CustomIcon from "../customIcon";

const Home = () => {
    const {choicedData}= useSelector((state) => state.Data);
    console.log(choicedData);

    const PriorityIcons = new Map();
    PriorityIcons.set("Urgent","PriorityHighIcon");
    PriorityIcons.set("High", "SignalCellularAltOutlinedIcon");
    PriorityIcons.set("Medium" , "SignalCellularAlt2BarOutlinedIcon");
    PriorityIcons.set("Low" , "SignalCellularAlt1BarOutlinedIcon");
    PriorityIcons.set("No priority","MoreHorizIcon");

    const StatusIcons = new Map();
    StatusIcons.set("Todo", {name: "UpdateIcon",color: ""});
    StatusIcons.set("In progress" , {name: "PendingActionsIcon",color : 'orange'});
    StatusIcons.set("Backlog" , {name: "CheckCircleIcon",color: 'blue'})

    let groupingBy = window.localStorage.getItem("group");
    
    return ( 
        choicedData?.length > 0 && 
        <div className="container">
            {choicedData?.map((list,index) => {
               return (
                <div key={index}>
                    <div className="list-header">
                        <div style={{display: 'flex'}}>
                            {/* Status Icon */}
                            {groupingBy === 'status' &&  StatusIcons.has(list[index].title) &&
                                <CustomIcon 
                                    name={StatusIcons.get(list[index].title).name}
                                    color={StatusIcons.get(list[index].title).color} 
                                    size='15px'/>}  
                            
                            {/* User Icon */}
                            {groupingBy === 'user' && <img className="img" src={user} alt=""></img>}
                            
                            {groupingBy === "priority" && 
                                <CustomIcon 
                                    name={PriorityIcons.get(list[index].title)} 
                                    color={list[index].title==="Urgent" && "red"} 
                                    size='15px'
                                />}

                            <h5 className="title">{list[index].title} {" "} {list[index].value.length}</h5>
                        </div>
                        <div>
                            <CustomIcon name="AddOutlinedIcon"/>
                            <CustomIcon name="MoreHorizOutlinedIcon"/>
                        </div>
                    </div>
                    <div>
                        {list[index].value.map(element => {
                            return <Card key={element.id} ele={element}></Card>
                        })}
                    </div>
                </div>
               )
            })}
        </div>
     );
}
 
export default Home;