"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Check, Edit } from "lucide-react";
import { BiUser } from "react-icons/bi";

export function UpdateUserModal({ user }) {
    const userName = user?.name;
    const userImage = user?.image;
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value === "" ? userName : e.target.name.value;
        const image = e.target.image.value === "" ? userImage : e.target.image.value;

        await authClient.updateUser({
            name,
            image
        })
    };
    return (
        <Modal>
            <Button
                className="flex-1 cursor-pointer bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold py-2.5 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
                <Edit size={16} />
                Update Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md overflow-hidden">

                        <Modal.CloseTrigger />

                        <Modal.Header className="pt-4 pb-2">
                            <div className="flex justify-center items-center mb-3">
                                <div className="w-16 h-16 rounded-full bg-linear-to-br from-sky-50 to-amber-50 flex items-center justify-center shadow-inner">
                                    <BiUser className="size-8 text-sky-500" />
                                </div>
                            </div>
                            <Modal.Heading className="text-center text-xl font-bold text-stone-800">
                                Update Profile
                            </Modal.Heading>
                            <p className="text-center text-stone-500 text-sm mt-1">
                                Edit your personal information
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6 pt-2">
                            <Surface variant="default" className="rounded-xl border border-stone-100 p-4">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label className="text-stone-700 font-medium text-sm">Full Name</Label>
                                        <Input
                                            placeholder="Enter your name"
                                            className="border-stone-200 focus:border-sky-400 rounded-lg"
                                        />
                                    </TextField>

                                    <TextField className="w-full" name="image" type="url">
                                        <Label className="text-stone-700 font-medium text-sm">Image URL</Label>
                                        <Input
                                            placeholder="https://example.com/user.jpg"
                                            className="border-stone-200 focus:border-sky-400 rounded-lg"
                                        />
                                        <p className="text-stone-400 text-xs mt-1">Enter a valid image URL</p>
                                    </TextField>

                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="flex-1 border-2 border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300 font-medium py-2 rounded-lg transition"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="flex-1 bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold py-2 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                        >
                                            <Check size={14} />
                                            Save Changes
                                        </Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}