import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@chakra-ui/react"
import gameInfo from "../game_info.json"

const GameScreenshotsPage = () => {
    const { id } = useParams();
    const game = gameInfo.find((item) => item.steam_appid === id);
    // Find the game based on steam_appid
    // const game = gameInfo.find((item) => item.steam_appid === parseInt(id, 10));

    // if (!game) {
    //     return <h1>Game not found!</h1>;
    // }

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap="6">
            {Object.values(game.screenshots).map((screenshotDir, index) => (
                <div>
                    <img
                        key={index}
                        src={`/archive/steam_screenshots/${id}/screenshots/${screenshotDir}`}
                        alt={`Screenshot ${index + 1}`}
                    />
                </div>
            ))}
        </Grid>
    );
}

export default GameScreenshotsPage;