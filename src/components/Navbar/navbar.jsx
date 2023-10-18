import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import './navbar.css';
import CustomIcon from '../customIcon';

import { GroupByPriority, 
        GroupByStatus, 
        GroupByUser, 
        OrderByPriority, 
        OrderByTitle } from "../../redux/action";

const getGroup = () => {
    const groupValue = localStorage.getItem("group");
    return groupValue ? groupValue : "status";
}

const getOrder = () => {
    const orderValue = localStorage.getItem("order");
    return orderValue ? orderValue : "priority";
}

const Navbar = () => {
    const [displayOnClick, setDisplayOnClick] = useState(false);

    const [groupValue, setGroupValue] = useState(getGroup());
    const [orderValue, setOrderValue] = useState(getOrder());

    const dispatch = useDispatch();
    const {users,tickets} = useSelector(state=>state.Data);

    useEffect(() => {
        if(groupValue === "status"){
            dispatch(GroupByStatus())
        }else if(groupValue === "user"){
            dispatch(GroupByUser());
        }else{
            dispatch(GroupByPriority())
        }

        if(orderValue === 'title'){
            dispatch(OrderByTitle());
        }else if(orderValue === 'priority'){
            dispatch(OrderByPriority());
        }
    },[groupValue,dispatch,users,tickets,orderValue]);
    

    const handleGroupValue = (e, changeGroup) => {
      if(changeGroup){
        setGroupValue(e.target.value);
        setDisplayOnClick(!displayOnClick);
        localStorage.setItem("group", e.target.value);
      }else{
        setOrderValue(e.target.value);
        setDisplayOnClick(!displayOnClick);
        localStorage.setItem("order", e.target.value);
      }
    }
   
    return ( 
        <div className="navbar">
            <div className="dropdown">
                <button className="dropdown-button">
                    <CustomIcon name="TuneOutlinedIcon" size='15px'/>
                    Display
                    <CustomIcon name="KeyboardArrowDownOutlinedIcon" size='20px'/>
                </button>
                <div className="dropdown-content">
                    <div className="dropdown-option">
                        Grouping
                        <div className="nested-dropdown">
                            <select value={groupValue} 
                                onChange={(e) => handleGroupValue(e, true)} name="group" id="group"
                            >
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                    </div>
                    <div className="dropdown-option">
                        Ordering
                        <div className="nested-dropdown">
                            <select value={orderValue} 
                                onChange={(e) => handleGroupValue(e, false)} name="order" id="order"
                            >
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;