import React from 'react';

import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SignalCellularAlt2BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt2BarOutlined';
import SignalCellularAlt1BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt1BarOutlined';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UpdateIcon from '@mui/icons-material/Update';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const iconMapping = {
  'SignalCellularAltOutlinedIcon': SignalCellularAltOutlinedIcon,
  'SignalCellularAlt2BarOutlinedIcon': SignalCellularAlt2BarOutlinedIcon,
  'SignalCellularAlt1BarOutlinedIcon': SignalCellularAlt1BarOutlinedIcon,
  'PriorityHighIcon': PriorityHighIcon,
  'MoreHorizIcon': MoreHorizIcon,
  'PendingActionsIcon':PendingActionsIcon,
  'CheckCircleIcon': CheckCircleIcon,
  'UpdateIcon': UpdateIcon,
  'CircleIcon': CircleIcon,
  'AddOutlinedIcon':  AddOutlinedIcon,
  'MoreHorizOutlinedIcon': MoreHorizOutlinedIcon,
  'TuneOutlinedIcon' : TuneOutlinedIcon,
  'KeyboardArrowDownOutlinedIcon' : KeyboardArrowDownOutlinedIcon,
};

const CustomIcon = ({ name, size,border,color}) => {

    const Icon = {
        fontSize: size, 
        color: color ? color : '#b6b6b8',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: '5px',
        border: border && '1px solid #b6b6b8',
        borderRadius: border && '2px',
    }

    const IconComponent  = iconMapping[name];
    
    if(!IconComponent){
        return <div>Icon Not Found!</div>
    }

    return <IconComponent style={Icon}/>
};

export default CustomIcon;
