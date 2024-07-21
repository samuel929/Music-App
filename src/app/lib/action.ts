'use server';
import { app } from "@/lib/firebase";
import { formSchema } from "@/lib/formValidation";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { z } from "zod";
const auth = getAuth(app);

export const authentication = (values: z.infer<typeof formSchema>) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        })
}


export const signin = (values: z.infer<typeof formSchema>) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

