"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import { image } from "@uiw/react-md-editor";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (state: any, form: FormData, pitch: string) => {
    const session = await auth();

    // if(!session) return parseServerActionResponse({
    //     error: "Not signed in",
    //     status: "Error"
    // })

    const {title, description, category, link} = Object.fromEntries(
        Array.from(form).filter(([key]) => key != "pitch"),
    );
    
    const slug = slugify(title as string, {lower: true, strict: true})

    try {
        const startup = {
            title,
            description,
            category,
            image: link,
            slug: {
                _type: slug,
                current: slug
            },
            author: {
                _type: "reference",
                _ref: "6f4c9722-db5c-4e9c-bd8b-df188047a4a2", //session?.id, 
            },
            pitch,
        };

        const result = await writeClient.create({_type: "startup", ...startup})
        return parseServerActionResponse({
            ...result,
            error: "",
            status: "SUCCESS"
        })
        
    } catch (error) {
        console.log(error)
        return parseServerActionResponse({
            error: JSON.stringify(error),
            status: "ERROR"
        })
    }
}