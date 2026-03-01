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
    rightButton: string | undefined;
    actionFunction?: () => void;
    submitFunction?: (e: React.FormEvent<HTMLFormElement>) => void;
    submitButton: boolean;
    topInputValue?: string;
    bottomInputValue?: string;
    onTopInputChange?: (value: string) => void;
    onBottomInputChange?: (value: string) => void;
}
export const Modal: FC<ModalProps> = ({
    bottomInputValue, 
    topInputValue, 
    submitButton, 
    actionFunction,
    submitFunction, 
    title, 
    topInputLabel, 
    topInputType, 
    topInputId, 
    bottomInputLabel, 
    bottomInputType, 
    bottomInputId, 
    modalState, 
    closeFunction, 
    leftButton, 
    rightButton,
    onTopInputChange,
    onBottomInputChange
}) => {

    return (
        <div className={modalState ? "modal-open" : "modal"}>
            <div className="modal-content">
                <span onClick={closeFunction} className="close-button" id="closeModalBtn">&times;</span>
                <h2 className="modal-title">{title}</h2>
                <form className="modal-form" id="profileForm" onSubmit={submitFunction} noValidate>
                    { topInputId && (<div className="form-group">
                        <label htmlFor={topInputId}>{topInputLabel}</label>
                        <input 
                            type={topInputType} 
                            id={topInputId} 
                            value={onTopInputChange ? (topInputValue ?? '') : undefined} 
                            className="form-input" 
                            onChange={onTopInputChange ? (e) => onTopInputChange(e.target.value) : undefined}
                            required 
                        />
                    </div>)}
                    { bottomInputId && (<div className="form-group">
                        <label htmlFor={bottomInputId}>{bottomInputLabel}</label>
                        <input 
                            type={bottomInputType} 
                            id={bottomInputId}  
                            value={bottomInputValue ? (bottomInputValue ?? '') : undefined}
                            onChange={onBottomInputChange ? (e) => onBottomInputChange(e.target.value) : undefined} 
                            className="form-input" 
                        />
                    </div>)}
                    <div className="modal-buttons">
                        {submitButton 
                        ? (<button type="submit" className="modal-button">{leftButton}</button>) 
                        : (<button type="button" onClick={actionFunction} className="modal-button">{leftButton}</button>)}
                        { rightButton && <button type={submitButton ? 'submit' : 'button'} className="modal-button">{rightButton}</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}