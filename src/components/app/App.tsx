import React, {useState} from 'react';
import ModalWindow from "./ModalWindow";

import './App.css';

export default function App(): JSX.Element {
    const [openModal, setOpenModal] = useState<boolean>(false)
    return (
        <div className="App">
            {openModal? <ModalWindow />: <></>}
            <button disabled={false} onClick={() => setOpenModal(!openModal)}>Выполнить действие</button>
        </div>
    );
}
