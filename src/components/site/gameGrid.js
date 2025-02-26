import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import gameInfo from "../../game_info.json"

const GameGrid = () => {

    //Sort data
    gameInfo = [...gameInfo].sort((a, b) => Object.keys(b.screenshots).length - Object.keys(a.screenshots).length);
    return (
        <div>
            <Grid templateColumns="repeat(5, 1fr)" gap="6">
                {gameInfo.map((item) => (
                    <Link  key={item.steam_appid} to={`/game/${item.steam_appid}`}>
                        <img src={item.game_grid} alt="game_grid" />
                    </Link >
                ))}
            </Grid>
            
        </div>
    )
};

export default GameGrid;