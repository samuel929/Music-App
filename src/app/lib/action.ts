'use server';
import { app } from "@/lib/firebase";
import { formSchema } from "@/lib/formValidation";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { z } from "zod";
import { hygraph } from "./hygraph.server";
import { gql } from "graphql-request";
import { Tracks } from "./types";
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

export const ShuffleTracks = async () => {
    const query = gql`
    query GetTracks {
        tracks {
        id
        title
        artist
        albumArt {
            url
        }
        audioFile {
            url
        }
        }
    }
    `;

    try {
        const response: Tracks[] = await hygraph.request(query);
        return response;
    } catch (error) {
        console.error("Error fetching tracks:", error);
        throw error;
    }
}

