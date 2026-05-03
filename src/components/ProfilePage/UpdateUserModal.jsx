"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit } from "lucide-react";
import {  BiUser } from "react-icons/bi";

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
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <div className="flex justify-center items-center">
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <BiUser className="size-8" />
                                </Modal.Icon>
                            </div>
                            <Modal.Heading className="text-center text-xl font-bold">Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    onSubmit={onSubmit}
                                    className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Image URL" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}