"use server";

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID 
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID 

const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;



type Return = {
    status: "success" | "error";
    message: string;
};

type FormDataType = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export const createContact = async (formData: FormDataType): Promise<Return> => {
    const payload = {
        fields: [
            { name: "firstname", value: formData.firstName },
            { name: "lastname", value: formData.lastName },
            { name: "email", value: formData.email },
            { name: "message", value: formData.message },
        ],
    };

    try {
        const response = await fetch(HUBSPOT_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return { status: "success", message: "Message sent successfully." };
        } else {
            return { status: "error", message: "There was an error sending your message. Please try again." };
        }
    } catch (error) {
        console.error("Error:", error);
        return { status: "error", message: "There was an error sending your message. Please try again." };
    }
};
