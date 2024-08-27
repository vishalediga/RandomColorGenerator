import { useState } from "react";
import '../App.css'

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    function handleColorTypeChange(newType) {
        setTypeOfColor(newType);
        // Generate a new color immediately when the type is changed
        if (newType === 'hex') {
            handleCreateRandomHexColor();
        } else {
            handleCreateRandomRgbColor();
        }
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }} className="main">
            <div className="bu">
            <button onClick={() => handleColorTypeChange('hex')}>Create HEX Color</button>
            <button onClick={() => handleColorTypeChange('rgb')}>Create RGB Color</button>
            <button onClick={() => {
                if (typeOfColor === "hex") {
                    handleCreateRandomHexColor();
                } else {
                    handleCreateRandomRgbColor();
                }
            }}>Generate Random Color</button>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}
