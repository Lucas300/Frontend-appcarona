import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './ModalCorridas.css'
import FormCorrida from '../corrida/formcorrida/FormCorrida';

function ModalCorrida() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Corrida
                    </button>
                }
                modal
            >
                <FormCorrida />
            </Popup>
        </>
    );
}

export default ModalCorrida;