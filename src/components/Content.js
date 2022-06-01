import { Button } from "@mui/material";
import DisplayModal from './Modal';

const Content = (props) => {
    const {treesOpen, setTreesOpen} = props

    return(
        <div className='content'>
            {treesOpen
                ?   <div className="modal">
                        <DisplayModal  {...props} />
                    </div>
                : <Button className="button" onClick={() => setTreesOpen(true)}>Projects</Button>
            }
        </div>
    )
}

export default Content