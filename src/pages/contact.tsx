import * as React from "react";
import Layout from "../components/Layout";
import SEOHead from "../components/head";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const titleClasses = `mb-4 ${getSize("large")} ${getColor("secondary")}`;
const subTitleClasses = `mb-4 ${getSize("medium")} ${getColor("primary")}`;
const descriptionClasses = `mb-4 ${getSize("small")} ${getColor("secondary")}`;

const ContactForm = () => {
    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
    };
    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };
    const handleSubmit = () => {
        setLoading(true);
        const submitParams = new FormData();

        submitParams.append(FormKeys.name, name);
        submitParams.append(FormKeys.email, email);
        submitParams.append(FormKeys.subject, subject);
        submitParams.append(FormKeys.message, message);

        axios
            .post(FormKeys.formUrl, submitParams)
            .then(() => {
                setLoading(false);
                setPopupMessage("お問い合わせが送信されました！");
            })
            .catch(() => {
                setLoading(false);
                setPopupMessage("お問い合わせが送信されました！");
                console.log("エラーです");
            });
    };
    const FormKeys = {
        formUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLScozi1Pvyvxvy9p2k1R2xfmHrO2NovWLNgJ6277NH8AxP2aGQ/formResponse",
        name: "entry.1696594161",
        email: "entry.92481834",
        subject: "entry.1279078928",
        message: "entry.1064825457",
    };

    return (
        <div className="my-10 justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                        <h1 className={titleClasses}>Contact us!</h1>
                        <p className={descriptionClasses}>
                            お問い合わせの際は下記フォームをご利用ください。
                        </p>
                    </div>

                    <form>
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name"
                            placeholder="お名前"
                            name="name"
                            onChange={handleNameChange}
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleEmailChange}
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="件名"
                            name="_subject"
                            onChange={handleSubjectChange}
                        />

                        <textarea
                            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="メッセージを入力してください"
                            name="message"
                            style={{ height: "121px" }}
                            onChange={handleMessageChange}
                        ></textarea>

                        <div className="flex justify-start">
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="Send ➤"
                                onClick={handleSubmit}
                                disabled={loading}
                            />
                        </div>
                    </form>

                    {popupMessage && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded shadow-md">
                                <p className={subTitleClasses}>
                                    {popupMessage}
                                </p>
                                <button
                                    className="mt-2 bg-blue-500 text-white p-2 rounded"
                                    onClick={() => setPopupMessage(null)}
                                >
                                    閉じる
                                </button>
                            </div>
                        </div>
                    )}
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
