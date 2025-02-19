import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
        <p>
            Thank you for sending me a message. I will get back with you as soon as I can.
        </p>
    </div>
);