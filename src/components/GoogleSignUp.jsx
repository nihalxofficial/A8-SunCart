import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignUp = () => {
    const googleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <Button
            className="flex w-full"
            variant="outline"
            onClick={googleSignUp}
        >
            <FcGoogle className="text-xl" />
            Google
        </Button>
    );
};

export default GoogleSignUp;