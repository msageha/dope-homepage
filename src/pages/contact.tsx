import * as React from "react";
import Layout from "../components/Layout";
import SEOHead from "../components/head";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";
import { ChangeEvent, useState } from "react";

const titleClasses = `mb-4 ${getSize("large")} ${getColor("secondary")}`;
const descriptionClasses = `mb-4 ${getSize("small")} ${getColor("secondary")}`;

const ContactForm = () => {
    return (
        <div className="my-10 justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative py-10 bg-gray-800 shadow-lg sm:rounded-3xl ">
                    <div className="text-center px-2 pb-6">
                        <h1 className={titleClasses}>Contact us!</h1>
                        <p className={descriptionClasses}>
                            お問い合わせの際は下記フォームをご利用ください。
                        </p>
                    </div>

                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf78GNjoGzB5EeXJku_4fde5yY0px2KBKM8CyvgvWiFF1DZXQ/viewform?embedded=true"
                        width="100%"
                        height="1300"
                    >
                        読み込んでいます…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <Layout>
            <>
                <ContactForm />
            </>
        </Layout>
    );
}
