import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { GameLoop } from "react-native-game-engine";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

export default function GameScreen() {
    const [x, setX] = useState(WIDTH / 2 - RADIUS);
    const [y, setY] = useState(HEIGHT / 2 - RADIUS);

    const updateHandler = ({ touches, screen, layout, time }) => {
        let move = touches.find(x => x.type === "move");
        if (move) {
            setX(move.event.pageX);
            setY(move.event.pageY);
        }
    };

    return (
        <GameLoop style={styles.container} onUpdate={updateHandler}>
            <View style={[styles.player, { left: x, top: y }]} />
        </GameLoop>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    player: {
        position: "absolute",
        backgroundColor: "pink",
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: RADIUS * 2
    }
});