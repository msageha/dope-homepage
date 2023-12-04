import * as React from "react";
import Layout from "../components/Layout";
import SEOHead from "../components/head";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";

const titleClasses = `mb-4 ${getSize("large")} ${getColor("secondary")}`;
const subTitleClasses = `mb-4 ${getSize("medium")} ${getColor("primary")}`;
const descriptionClasses = `mb-4 ${getSize("small")} ${getColor("secondary")}`;

const ContactForm = () => {
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
                            placeholder="お名前"
                            name="name"
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="件名"
                            name="_subject"
                        />

                        <textarea
                            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="メッセージを入力してください"
                            name="message"
                            style={{ height: "121px" }}
                        ></textarea>

                        <div className="flex justify-start">
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="Send ➤"
                            />
                        </div>
                    </form>
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
