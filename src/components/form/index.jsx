
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetAddedData } from "../../action";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Card, CardContent, Snackbar, Alert } from "@mui/material";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        teamname: "",
        position: "",
        score: "",
    });

    const dispatch = useDispatch();


    const [successMessage, setSuccessMessage] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation 
        if (!formData.name || !formData.teamname || !formData.position || formData.score === "") {
            alert("Please fill in all fields!");
            return;
        }

        // Dispatching Data
        const newPlayer = { ...formData, id: uuidv4().slice(0, 5) };
        // console.log(newPlayer);
        dispatch(GetAddedData(newPlayer));

        setSuccessMessage("Player added successfully!");

        // Reset form
        setFormData({ name: "", teamname: "", position: "", score: "" });


        setTimeout(() => setSuccessMessage(""), 3000);
    };


    return (
        <Card className="max-w-md mx-auto mt-10 p-6 shadow-lg">
            <CardContent>
                <h2 className="text-xl font-semibold text-center mb-4">Add Player</h2>

                {/* Success Message Notification */}
                <Snackbar open={!!successMessage} autoHideDuration={3000} onClose={() => setSuccessMessage("")} anchorOrigin={{ vertical: "top", horizontal: "right" }} >
                    <Alert severity="success">{successMessage}</Alert>
                </Snackbar>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField
                        label="Player Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Team Name"
                        variant="outlined"
                        fullWidth
                        name="teamname"
                        value={formData.teamname}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Position"
                        variant="outlined"
                        fullWidth
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Score"
                        variant="outlined"
                        fullWidth
                        name="score"
                        type="number"
                        value={formData.score}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default Form;








