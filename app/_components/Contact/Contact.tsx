import React, { useEffect } from "react";
import "./Contact.css";

declare global {
    interface Window {
        hbspt: any;
    }
}

const Contact = () => {
    useEffect(() => {
        // HubSpotのスクリプトを読み込む
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;
        script.onload = () => {
            // HubSpotフォームをレンダリング
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: "48458753", // あなたのHUBSPOT_PORTAL_ID
                    formId: "bd6ff507-e991-436f-a82a-7a455d384403", // あなたのHUBSPOT_FORM_ID
                    target: "#hubspotForm", // フォームを埋め込むターゲット要素
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            // スクリプトをクリーンアップ
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <div id="hubspotForm"></div> {/* HubSpotフォームの埋め込み先 */}
        </section>
    );
};

export default Contact;
