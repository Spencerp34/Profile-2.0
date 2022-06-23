import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Category from "./Category";
import Details from "./Details";

export default function DisplayModal(props){
    const [category, setCategory] = useState(0);
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
                position: "absolute",
                marginTop: "5vh",
                opacity: opacity,
                transition: "4s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "70%",
                    height: "70%",
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
                    <Category category={category} setCategory={setCategory} />
                    <Details category={category} setCategory={setCategory} />
                </div>
            </Box>

        </Modal>
    )
}
