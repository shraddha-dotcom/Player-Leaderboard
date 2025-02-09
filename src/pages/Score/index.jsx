import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../../action";
import { TextField } from "@mui/material";

function PlayerScore() {
  const AddData = useSelector((state) => state.AddData);
  // console.log(AddData);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (index) => {
    dispatch(DeleteUser(index));
  };
  // search query
  const filteredPlayers = AddData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.teamname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.position.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Player Scores</h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <TextField
          label="Search Player..."
          variant="outlined"
          fullWidth
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* show message if no player found*/}
      {filteredPlayers.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No players found.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredPlayers.map((user, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md p-6 w-80 relative transition duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">
                <span className="font-medium">ID:</span> {user.id}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Position:</span> {user.position}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Team Name:</span> {user.teamname}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Score:</span> {user.score}
              </p>
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded shadow-sm transition duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default PlayerScore;