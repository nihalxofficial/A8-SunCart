"use client"
import React from 'react';
import { Button, Modal } from "@heroui/react"
import { Trash2 } from 'lucide-react';
import { TrashBin } from '@gravity-ui/icons';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const DeleteUserModal = () => {
    const router = useRouter();
    const deleteUser = async () => {
        const action = await authClient.deleteUser();
        if (action) {
            router.push("/signup")
        }
    }
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
                    <Modal.Dialog className="sm:max-w-md overflow-hidden">
                        <Modal.CloseTrigger />

                        <Modal.Header className="pt-4 pb-2">
                            <div className='flex justify-center items-center mb-3'>
                                <div className='w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center'>
                                    <TrashBin className='size-8 text-rose-500' />
                                </div>
                            </div>
                            <Modal.Heading className='text-xl font-bold text-center text-stone-800'>
                                Are You Sure?
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="pb-2">
                            <p className='text-center text-stone-500 text-sm'>
                                This action cannot be undone. Your account and all associated data will be permanently deleted.
                            </p>
                        </Modal.Body>

                        <Modal.Footer className="flex gap-3 pt-2">
                            <Button
                                slot="close"
                                variant="secondary"
                                className="flex-1 border border-stone-200 text-stone-600 hover:bg-stone-50 font-medium py-2 rounded-lg transition"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={deleteUser}
                                className="flex-1 bg-linear-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold py-2 rounded-lg transition shadow-md hover:shadow-lg"
                                slot="close"
                            >
                                Yes, Delete Account
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteUserModal;