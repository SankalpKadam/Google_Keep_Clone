import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';

function Actions(props) {
    const fabButton={
        backgroundColor:"#fff",
        width:"1.5rem",
        height:"1.5rem",
        boxShadow : "none"
    }
    const theme=useTheme();
    const transitionDuration = {
        enter: 250,
        exit: 750
      };
    return(
        <div className="actionIcons">
        <Zoom in={true} appear={true} timeout={transitionDuration} unmountOnExit onClick={()=>props.editNote(props.entireNote)}>

            <Fab style={fabButton}>
                <EditIcon style={{color:"grey",marginRight:"1.5rem"}}/>
            </Fab>
        </Zoom>
        <Zoom in={true} appear={true} timeout={transitionDuration} unmountOnExit onClick={()=>{
            props.deleteNote(props.id)
        }}>

            <Fab style={fabButton}>
                <DeleteIcon style={{color:"grey",marginLeft:".5rem"}}/>
            </Fab>
        </Zoom>
        </div>
    );
}
export default Actions;