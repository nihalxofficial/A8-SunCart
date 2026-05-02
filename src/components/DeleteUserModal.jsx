import React from 'react';
import { Button, Modal } from "@heroui/react"
import { Trash2 } from 'lucide-react';
import { TrashBin } from '@gravity-ui/icons';

const DeleteUserModal = () => {
    return (
        <Modal>
            <Button
                className="flex-1 cursor-pointer bg-white border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-semibold py-2.5 rounded-xl transition flex items-center justify-center gap-2"
            >
                <Trash2 size={16} />
                Delete Account
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <div className='flex justify-center items-center'>
                                <TrashBin className='size-8 text-rose-500'></TrashBin>
                            </div>

                            <Modal.Heading className='text-xl font-bold leading-tight text-center'>Are You Sure To Delete?</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p className='text-center'>
                                After delete, you can&apos;t restore the account.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-full bg-linear-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white" slot="close">
                                Yes, Delete
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteUserModal;