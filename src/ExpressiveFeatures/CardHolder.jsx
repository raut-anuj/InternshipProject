import React from "react";

export default function CardHolder({ title }) {
    return (
        // Ye class aapki style.css se box ka design (border, shadow, hover) le legi
        <div className="holder-card">
            {/* Ye class aapki style.css se text ka design le legi */}
            <h2 className="holder-title">
                {title}
            </h2>
        </div>
    );
}