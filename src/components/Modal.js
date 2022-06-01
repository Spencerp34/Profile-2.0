import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import playroom from "../assets/acornsSnap.png";

export default function DisplayModal(props){
    // const [category, setCategory] = useState("");
    // const [subCategory, setSubCategory] = useState("");
    const [opacity, setOpacity] = useState(0)
    const {setTreesOpen} = props;
    const closeModal = () => {setTreesOpen(false)}
    const openModal = () => {setTreesOpen(true)}

    setTimeout(() => {setOpacity(1)}, 1000);

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
            sx={{
                padding: "5px 8px",
                marginTop: "25vh",
                marginLeft: "35vh",
                opacity: opacity,
                transition: "4s",
            }}
        >
            <Box
                sx={{
                    width: "70%",
                    height: "60%",
                    borderRadius: "8px",
                    bgcolor: "rgba(196, 196, 196, 0.3)",
                    boxShadow: 24,
                    p: 7,
                }}
                style={{ position: "relative" }}
            >
                <Button
                    sx={{
                        position: "absolute",
                        top: 15,
                        right: 5,
                    }}
                    onClick={closeModal}
                >
                    <CloseIcon />
                </Button>
                <div className="modaling">
                    <div className="dropdown">
                        <h4><u>Preschool</u></h4>
                        <h4>Resturaunt</h4>
                        <h4>Merch Store</h4>
                    </div>
                    <div className="body">
                        <img src={playroom} id="acorns" alt={"playroom"}></img>
                    </div>
                    <div className="description">
                        <h5>Visit this site to see:</h5>
                        <h6>Photo Carosels, form inquiries, home business</h6>
                    </div>
                </div>
                
                

            </Box>

        </Modal>
    )
}
