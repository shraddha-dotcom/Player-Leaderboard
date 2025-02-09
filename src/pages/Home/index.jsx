
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPlayerData } from "../../action";
import Form from "../../components/form";
import { Button, Card, Typography } from "@mui/material";
import PlayerTable from "../../components/table";

function Home() {
  const PlayerBenchData = useSelector((state) => state.Bench || []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!PlayerBenchData || PlayerBenchData.length === 0) {
      dispatch(GetPlayerData()); //  Only fetch if data is empty
    }
  }, [dispatch, PlayerBenchData]);

  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {/* Bench Table Section */}
      <Card className="p-4 shadow-lg bg-amber-100">
        <Typography
          variant="h5"
          className="text-center font-semibold border-b-2 border-black pb-2"
        >
          Bench Table
        </Typography>
        <div className="max-w-full overflow-x-auto">
          {PlayerBenchData.length ? (
            <PlayerTable PlayerData={PlayerBenchData} />
          ) : (
            <Typography className="text-center text-gray-500">
              No Data Yet
            </Typography>
          )}
        </div>
      </Card>

      {/* Add Player Score Section */}
      <div className="text-center mt-10 mb-20">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFormVisible((prev) => !prev)}
          className="bg-orange-500 hover:bg-orange-300 text-white px-6 py-2 rounded-md"
        >
          {isFormVisible ? "Hide Form" : "Add Player"}
        </Button>
      </div>

      {/* Conditional Form Rendering */}
      {isFormVisible && (
        <div className="mt-6">
          <Form />
        </div>
      )}
    </div>
  );
}

export default Home;




