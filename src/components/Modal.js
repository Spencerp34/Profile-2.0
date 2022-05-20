import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function DisplayModal(props){
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const {openModal, closeModal} = props;

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
        >
            <Box>
                <Button>
                    <Close />
                </Button>

            </Box>

        </Modal>
    )
}
