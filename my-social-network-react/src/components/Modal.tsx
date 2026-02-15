import type { FC } from "react";

type ModalProps = {
    title: string;
    topInputLabel: string;
    topInputType: string;
    topInputId: string | undefined;
    bottomInputLabel: string;
    bottomInputType: string;
    bottomInputId: string | undefined;
    modalState: boolean;
    closeFunction: () => void;
    leftButton: string; 
    rightButton: string | undefined
}
export const Modal: FC<ModalProps> = ({title, topInputLabel, topInputType, topInputId, bottomInputLabel, bottomInputType, bottomInputId, modalState, closeFunction, leftButton, rightButton}) => {


    return (
        <div className={modalState ? "modal-open" : "modal"}>
            <div className="modal-content">
                <span onClick={closeFunction} className="close-button" id="closeModalBtn">&times;</span>
                <h2 className="modal-title">{title}</h2>
                <form className="modal-form" id="profileForm" noValidate>
                    { topInputId && (<div className="form-group">
                        <label htmlFor={topInputId}>{topInputLabel}</label>
                        <input type={topInputType} id={topInputId} className="form-input" required />
                    </div>)}
                    { bottomInputId && (<div className="form-group">
                        <label htmlFor={bottomInputId}>{bottomInputLabel}</label>
                        <input type={bottomInputType} id={bottomInputId} className="form-input" />
                    </div>)}
                    <div className="modal-buttons">
                        <button type="submit" className="modal-button">{leftButton}</button>
                        { rightButton && <button type="submit" className="modal-button">{rightButton}</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}