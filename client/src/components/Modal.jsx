import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';


const Modal = ({ children, isOpen, setIsOpen }) => {
    return (
        <div>
            <Dialog.Root isOpen={isOpen} onOpenChange={setIsOpen}>
                {children}
            </Dialog.Root>
        </div>
    )
}

export default Modal