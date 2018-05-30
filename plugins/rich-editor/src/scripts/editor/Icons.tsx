/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license https://opensource.org/licenses/GPL-2.0 GPL-2.0
 */

import React from "react";
import { t } from "@dashboard/application";

const currentColorFill = {
    fill: "currentColor",
};

export function bold() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Bold")}</title>
            <path
                d="M6.511,18v-.62a4.173,4.173,0,0,0,.845-.093.885.885,0,0,0,.736-.79,5.039,5.039,0,0,0,.063-.884V8.452a6.585,6.585,0,0,0-.047-.876,1.116,1.116,0,0,0-.194-.527.726.726,0,0,0-.4-.263,3.658,3.658,0,0,0-.674-.1v-.62h4.975a7.106,7.106,0,0,1,3.6.752A2.369,2.369,0,0,1,16.68,8.964q0,1.843-2.651,2.6v.062a4.672,4.672,0,0,1,1.542.24,3.39,3.39,0,0,1,1.171.674,3.036,3.036,0,0,1,.744,1.023,3.125,3.125,0,0,1,.263,1.287,2.49,2.49,0,0,1-.38,1.379,3.05,3.05,0,0,1-1.092.992,7.794,7.794,0,0,1-3.8.775Zm6.076-.945q2.5,0,2.5-2.248a2.3,2.3,0,0,0-.9-2.015,3.073,3.073,0,0,0-1.2-.465,9.906,9.906,0,0,0-1.806-.139h-.744v3.1a1.664,1.664,0,0,0,.5,1.364A2.659,2.659,0,0,0,12.587,17.055Zm-1.24-5.8a4.892,4.892,0,0,0,1.21-.131,2.69,2.69,0,0,0,.868-.38,1.8,1.8,0,0,0,.743-1.6,2.107,2.107,0,0,0-.557-1.635,2.645,2.645,0,0,0-1.8-.5h-1.1q-.279,0-.279.264v3.983Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function italic() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Italic")}</title>
            <path
                d="M11.472,15.4a4.381,4.381,0,0,0-.186,1.085.744.744,0,0,0,.333.713,2.323,2.323,0,0,0,1.077.186L12.51,18H7.566l.17-.62a3.8,3.8,0,0,0,.791-.07,1.282,1.282,0,0,0,.566-.271,1.62,1.62,0,0,0,.41-.558,5.534,5.534,0,0,0,.326-.93L11.642,8.7a5.332,5.332,0,0,0,.233-1.271.577.577,0,0,0-.349-.612,3.714,3.714,0,0,0-1.186-.132l.171-.62h5.038l-.171.62a3.058,3.058,0,0,0-.852.1,1.246,1.246,0,0,0-.59.38,2.578,2.578,0,0,0-.441.774,11.525,11.525,0,0,0-.4,1.287Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function strike() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Strikethrough")}</title>
            <path
                d="M12.258,13H6V12h4.2l-.05-.03a4.621,4.621,0,0,1-1.038-.805,2.531,2.531,0,0,1-.55-.892A3.285,3.285,0,0,1,8.4,9.2a3.345,3.345,0,0,1,.256-1.318,3.066,3.066,0,0,1,.721-1.046,3.242,3.242,0,0,1,1.1-.682,3.921,3.921,0,0,1,1.4-.24,3.641,3.641,0,0,1,1.271.217,4.371,4.371,0,0,1,1.194.7l.4-.7h.357l.171,3.085h-.574A3.921,3.921,0,0,0,13.611,7.32a2.484,2.484,0,0,0-1.7-.619,2.269,2.269,0,0,0-1.5.465,1.548,1.548,0,0,0-.558,1.255,1.752,1.752,0,0,0,.124.674,1.716,1.716,0,0,0,.4.574,4.034,4.034,0,0,0,.729.542,9.854,9.854,0,0,0,1.116.566,20.49,20.49,0,0,1,1.906.953q.232.135.435.27h4.6v1H15.675a2.263,2.263,0,0,1,.3.544,3.023,3.023,0,0,1,.186,1.093,3.236,3.236,0,0,1-1.177,2.541,4.014,4.014,0,0,1-1.334.721,5.393,5.393,0,0,1-1.7.256,4.773,4.773,0,0,1-1.588-.248,4.885,4.885,0,0,1-1.434-.837l-.434.76H8.132L7.9,14.358h.573a3.886,3.886,0,0,0,.411,1.255A3.215,3.215,0,0,0,10.7,17.155a3.872,3.872,0,0,0,1.294.21,2.786,2.786,0,0,0,1.813-.543,1.8,1.8,0,0,0,.667-1.473,1.752,1.752,0,0,0-.573-1.34,4.04,4.04,0,0,0-.83-.6Q12.723,13.217,12.258,13Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function code() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Paragraph Code Block")}</title>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.11588626,16.5074223 L3.14440918,12.7070466 L3.14440918,11.6376386 L9.11588626,7.32465415 L9.11588626,9.04808032 L4.63575044,12.0883808 L9.11588626,14.7663199 L9.11588626,16.5074223 Z M14.48227,5.53936141 L11.1573124,18.4606386 L9.80043634,18.4606386 L13.131506,5.53936141 L14.48227,5.53936141 Z M15.1729321,14.7663199 L19.6530679,12.0883808 L15.1729321,9.04808032 L15.1729321,7.32465415 L21.1444092,11.6376386 L21.1444092,12.7070466 L15.1729321,16.5074223 L15.1729321,14.7663199 Z"
            />
        </svg>
    );
}

export function link() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Link")}</title>
            <path
                d="M9.108,12.272a.731.731,0,0,0,.909.08l1.078.9a2.094,2.094,0,0,1-2.889.087l-2.4-2.019A2.089,2.089,0,0,1,5.443,8.4L6.892,6.679a2.088,2.088,0,0,1,2.942-.144l2.4,2.019a2.089,2.089,0,0,1,.362,2.924l-.1.114-1.073-.9.1-.114a.705.705,0,0,0-.192-.95l-2.4-2.019a.7.7,0,0,0-.968-.026L6.516,9.3a.7.7,0,0,0,.191.95Zm9.085,1.293a2.088,2.088,0,0,1,.362,2.924l-1.448,1.722a2.088,2.088,0,0,1-2.942.144l-2.4-2.019a2.1,2.1,0,0,1-.409-2.86l1.077.9a.73.73,0,0,0,.235.883l2.4,2.019a.7.7,0,0,0,.968.026l1.448-1.722a.7.7,0,0,0-.192-.95l-2.4-2.019a.7.7,0,0,0-.967-.026l-.1.115-1.072-.9.1-.115a2.087,2.087,0,0,1,2.942-.144ZM10.028,10.6a.466.466,0,0,1,.658-.057l3.664,3.082a.467.467,0,0,1,.057.658l-.308.366a.466.466,0,0,1-.658.057L9.776,11.626a.469.469,0,0,1-.057-.659Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function emoji() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Emoji")}</title>
            <path
                fill="currentColor"
                d="M12,4 C7.58168889,4 4,7.58168889 4,12 C4,16.4181333 7.58168889,20 12,20 C16.4183111,20 20,16.4181333 20,12 C20,7.58168889 16.4183111,4 12,4 Z M12,18.6444444 C8.33631816,18.6444444 5.35555556,15.6636818 5.35555556,12 C5.35555556,8.33631816 8.33631816,5.35555556 12,5.35555556 C15.6636818,5.35555556 18.6444444,8.33631816 18.6444444,12 C18.6444444,15.6636818 15.6636818,18.6444444 12,18.6444444 Z M10.7059556,10.2024889 C10.7059556,9.51253333 10.1466667,8.95324444 9.45671111,8.95324444 C8.76675556,8.95324444 8.20746667,9.51253333 8.20746667,10.2024889 C8.20746667,10.8924444 8.76675556,11.4517333 9.45671111,11.4517333 C10.1466667,11.4517333 10.7059556,10.8924444 10.7059556,10.2024889 Z M14.5432889,8.95306667 C13.8533333,8.95306667 13.2940444,9.51235556 13.2940444,10.2023111 C13.2940444,10.8922667 13.8533333,11.4515556 14.5432889,11.4515556 C15.2332444,11.4515556 15.7925333,10.8922667 15.7925333,10.2023111 C15.7925333,9.51235556 15.2332444,8.95306667 14.5432889,8.95306667 Z M14.7397333,14.1898667 C14.5767111,14.0812444 14.3564444,14.1256889 14.2471111,14.2883556 C14.2165333,14.3336889 13.4823111,15.4012444 11.9998222,15.4012444 C10.5198222,15.4012444 9.7856,14.3374222 9.75271111,14.2885333 C9.64444444,14.1256889 9.42471111,14.0803556 9.2608,14.1884444 C9.09688889,14.2963556 9.05155556,14.5169778 9.15964444,14.6810667 C9.19804444,14.7393778 10.1242667,16.1125333 11.9998222,16.1125333 C13.8752,16.1125333 14.8014222,14.7395556 14.84,14.6810667 C14.9477333,14.5173333 14.9027556,14.2983111 14.7397333,14.1898667 Z"
            />
        </svg>
    );
}

export function embedError() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24" aria-hidden="true">
            <title>{t("Warning")}</title>
            <path
                d="M11.651,3.669,2.068,21.75H21.234Zm.884-1,10,18.865A1,1,0,0,1,21.649,23h-20a1,1,0,0,1-.884-1.468l10-18.865a1,1,0,0,1,1.767,0Zm.232,13.695H10.547L10.2,10h2.905Zm-2.535,2.354a1.239,1.239,0,0,1,.363-.952,1.491,1.491,0,0,1,1.056-.34,1.443,1.443,0,0,1,1.039.34,1.258,1.258,0,0,1,.353.952,1.224,1.224,0,0,1-.367.945A1.452,1.452,0,0,1,11.65,20a1.5,1.5,0,0,1-1.042-.34A1.207,1.207,0,0,1,10.231,18.716Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function close() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24" aria-hidden="true">
            <title>{t("Close")}</title>
            <path
                fill="currentColor"
                d="M12,10.6293581 L5.49002397,4.11938207 C5.30046135,3.92981944 4.95620859,3.96673045 4.69799105,4.22494799 L4.22494799,4.69799105 C3.97708292,4.94585613 3.92537154,5.29601344 4.11938207,5.49002397 L10.6293581,12 L4.11938207,18.509976 C3.92981944,18.6995387 3.96673045,19.0437914 4.22494799,19.3020089 L4.69799105,19.775052 C4.94585613,20.0229171 5.29601344,20.0746285 5.49002397,19.8806179 L12,13.3706419 L18.509976,19.8806179 C18.6995387,20.0701806 19.0437914,20.0332695 19.3020089,19.775052 L19.775052,19.3020089 C20.0229171,19.0541439 20.0746285,18.7039866 19.8806179,18.509976 L13.3706419,12 L19.8806179,5.49002397 C20.0701806,5.30046135 20.0332695,4.95620859 19.775052,4.69799105 L19.3020089,4.22494799 C19.0541439,3.97708292 18.7039866,3.92537154 18.509976,4.11938207 L12,10.6293581 Z"
            />
        </svg>
    );
}

export function pilcrow() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("richEditor.menu.pilcrow")}</title>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15,6 L17,6 L17,18 L15,18 L15,6 Z M11,6 L13.0338983,6 L13.0338983,18 L11,18 L11,6 Z M11,13.8666667 C8.790861,13.8666667 7,12.1056533 7,9.93333333 C7,7.76101332 8.790861,6 11,6 C11,7.68571429 11,11.6190476 11,13.8666667 Z"
            />
        </svg>
    );
}

export function title() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Title")}</title>
            <path
                d="M12.3,17H10.658V12.5H6.051V17H4.417V7.006H6.051v4.088h4.607V7.006H12.3Zm5.944,0H16.637V10.547q0-1.155.055-1.832-.157.163-.387.362t-1.534,1.258l-.807-1.019L16.9,7.006h1.34Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function subtitle() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Subtitle")}</title>
            <path
                d="M12.3,17H10.658V12.5H6.051V17H4.417V7.006H6.051v4.088h4.607V7.006H12.3Zm8,0H13.526V15.783L16.1,13.192a22.007,22.007,0,0,0,1.514-1.657,3.978,3.978,0,0,0,.543-.92,2.475,2.475,0,0,0,.171-.923,1.4,1.4,0,0,0-.407-1.066,1.557,1.557,0,0,0-1.124-.39,3,3,0,0,0-1.111.212,5.239,5.239,0,0,0-1.241.766l-.868-1.06a5.612,5.612,0,0,1,1.62-1,4.744,4.744,0,0,1,1.675-.294,3.294,3.294,0,0,1,2.235.728,2.46,2.46,0,0,1,.841,1.959,3.453,3.453,0,0,1-.242,1.285,5.212,5.212,0,0,1-.746,1.254,17.041,17.041,0,0,1-1.671,1.747l-1.736,1.682v.068H20.3Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function blockquote() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Quote")}</title>
            <path
                d="M10.531,17.286V12.755H8.122a9.954,9.954,0,0,1,.1-1.408,4.22,4.22,0,0,1,.388-1.286,2.62,2.62,0,0,1,.735-.918A1.815,1.815,0,0,1,10.49,8.8V6.755a3.955,3.955,0,0,0-2,.49A4.164,4.164,0,0,0,7.082,8.551a5.84,5.84,0,0,0-.817,1.9A9.65,9.65,0,0,0,6,12.755v4.531Zm7.469,0V12.755H15.592a9.954,9.954,0,0,1,.1-1.408,4.166,4.166,0,0,1,.388-1.286,2.606,2.606,0,0,1,.734-.918A1.819,1.819,0,0,1,17.959,8.8V6.755a3.958,3.958,0,0,0-2,.49,4.174,4.174,0,0,0-1.408,1.306,5.86,5.86,0,0,0-.816,1.9,9.649,9.649,0,0,0-.266,2.306v4.531Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function codeBlock() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Paragraph Code Block")}</title>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.11588626,16.5074223 L3.14440918,12.7070466 L3.14440918,11.6376386 L9.11588626,7.32465415 L9.11588626,9.04808032 L4.63575044,12.0883808 L9.11588626,14.7663199 L9.11588626,16.5074223 Z M14.48227,5.53936141 L11.1573124,18.4606386 L9.80043634,18.4606386 L13.131506,5.53936141 L14.48227,5.53936141 Z M15.1729321,14.7663199 L19.6530679,12.0883808 L15.1729321,9.04808032 L15.1729321,7.32465415 L21.1444092,11.6376386 L21.1444092,12.7070466 L15.1729321,16.5074223 L15.1729321,14.7663199 Z"
            />
        </svg>
    );
}

export function spoiler() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Spoiler")}</title>
            <path
                d="M8.138,16.569l.606-.606a6.677,6.677,0,0,0,1.108.562,5.952,5.952,0,0,0,2.674.393,7.935,7.935,0,0,0,1.008-.2,11.556,11.556,0,0,0,5.7-4.641.286.286,0,0,0-.02-.345c-.039-.05-.077-.123-.116-.173a14.572,14.572,0,0,0-2.917-3.035l.6-.6a15.062,15.062,0,0,1,2.857,3.028,1.62,1.62,0,0,0,.154.245,1.518,1.518,0,0,1,.02,1.5,12.245,12.245,0,0,1-6.065,4.911,6.307,6.307,0,0,1-1.106.22,4.518,4.518,0,0,1-.581.025,6.655,6.655,0,0,1-2.383-.466A8.023,8.023,0,0,1,8.138,16.569Zm-.824-.59a14.661,14.661,0,0,1-2.965-3.112,1.424,1.424,0,0,1,0-1.867A13.69,13.69,0,0,1,8.863,6.851a6.31,6.31,0,0,1,6.532.123c.191.112.381.231.568.356l-.621.621c-.092-.058-.184-.114-.277-.168a5.945,5.945,0,0,0-3.081-.909,6.007,6.007,0,0,0-2.868.786,13.127,13.127,0,0,0-4.263,3.929c-.214.271-.214.343,0,.639a13.845,13.845,0,0,0,3.059,3.153ZM13.9,9.4l-.618.618a2.542,2.542,0,0,0-3.475,3.475l-.61.61A3.381,3.381,0,0,1,12,8.822,3.4,3.4,0,0,1,13.9,9.4Zm.74.674a3.3,3.3,0,0,1,.748,2.138,3.382,3.382,0,0,1-5.515,2.629l.6-.6a2.542,2.542,0,0,0,3.559-3.559Zm-3.146,3.146L13.008,11.7a1.129,1.129,0,0,1-1.516,1.516Zm-.6-.811a1.061,1.061,0,0,1-.018-.2A1.129,1.129,0,0,1,12,11.079a1.164,1.164,0,0,1,.2.017Z"
                style={currentColorFill}
            />
            <polygon
                points="19.146 4.146 19.854 4.854 4.854 19.854 4.146 19.146 19.146 4.146"
                style={currentColorFill}
            />
        </svg>
    );
}

export function emojiGroup_smileysPeople(group = "smileys_people") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M12,4 C7.58168889,4 4,7.58168889 4,12 C4,16.4181333 7.58168889,20 12,20 C16.4183111,20 20,16.4181333 20,12 C20,7.58168889 16.4183111,4 12,4 Z M12,18.6444444 C8.33631816,18.6444444 5.35555556,15.6636818 5.35555556,12 C5.35555556,8.33631816 8.33631816,5.35555556 12,5.35555556 C15.6636818,5.35555556 18.6444444,8.33631816 18.6444444,12 C18.6444444,15.6636818 15.6636818,18.6444444 12,18.6444444 Z M10.7059556,10.2024889 C10.7059556,9.51253333 10.1466667,8.95324444 9.45671111,8.95324444 C8.76675556,8.95324444 8.20746667,9.51253333 8.20746667,10.2024889 C8.20746667,10.8924444 8.76675556,11.4517333 9.45671111,11.4517333 C10.1466667,11.4517333 10.7059556,10.8924444 10.7059556,10.2024889 Z M14.5432889,8.95306667 C13.8533333,8.95306667 13.2940444,9.51235556 13.2940444,10.2023111 C13.2940444,10.8922667 13.8533333,11.4515556 14.5432889,11.4515556 C15.2332444,11.4515556 15.7925333,10.8922667 15.7925333,10.2023111 C15.7925333,9.51235556 15.2332444,8.95306667 14.5432889,8.95306667 Z M14.7397333,14.1898667 C14.5767111,14.0812444 14.3564444,14.1256889 14.2471111,14.2883556 C14.2165333,14.3336889 13.4823111,15.4012444 11.9998222,15.4012444 C10.5198222,15.4012444 9.7856,14.3374222 9.75271111,14.2885333 C9.64444444,14.1256889 9.42471111,14.0803556 9.2608,14.1884444 C9.09688889,14.2963556 9.05155556,14.5169778 9.15964444,14.6810667 C9.19804444,14.7393778 10.1242667,16.1125333 11.9998222,16.1125333 C13.8752,16.1125333 14.8014222,14.7395556 14.84,14.6810667 C14.9477333,14.5173333 14.9027556,14.2983111 14.7397333,14.1898667 Z"
            />
        </svg>
    );
}

export function emojiGroup_animalsNature(group = "animals-nature") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M10.8815789,7.36973684 L7.77236842,9.00263158 L9.36052632,7.36973684 L9.36052632,3.96973684 L9.36052632,3.5 L8.91315789,3.5 L8.91315789,4.43947368 L7.97368421,5.42368421 L7.97368421,5.02105263 L7.52631579,5.02105263 L7.52631579,5.89342105 L6.58684211,6.87763158 L6.58684211,6.54210526 L6.13947368,6.54210526 L6.13947368,7.34736842 L5.2,8.33157895 L5.2,8.06315789 L4.75263158,8.06315789 L4.75263158,8.80131579 L4.55131579,9.00263158 L2.40394737,9.00263158 L2.40394737,8.06315789 L1.93421053,8.06315789 L1.93421053,9.00263158 L1.93421053,9.04736842 L1.93421053,9.69605263 L3.85789474,9.69605263 L1.93421053,11.7092105 L1.93421053,13.3868421 L3.58947368,13.3868421 L4.73026316,12.2013158 L4.73026316,13.3868421 L9.40526316,13.3868421 L10.8815789,16.7421053 L13.5434211,20.5 L14.5947368,20.5 L20.4328947,10.9710526 L10.8815789,7.36973684 Z M13.5434211,20.5 L13.5434211,18.9565789 L11.9328947,16.7421053 L11.9328947,13.3868421 L15.8026316,13.3868421 L15.8026316,16.7421053 L13.5434211,20.5 Z M7.97368421,19.4039474 L9.47236842,15.6236842 L9.98684211,16.7421053 L9.00263158,19.4039474 L8.28684211,20.5 L7.21315789,20.5 L7.97368421,19.4039474 Z M20.4105263,13.3868421 L22.0657895,16.7421053 L22.0657895,19.4039474 L21.4171053,20.5 L20.4105263,20.5 L21.0368421,19.4039474 L21.0368421,16.7421053 L19.2026316,15.5565789 L20.4105263,13.3868421 Z"
            />
        </svg>
    );
}

export function emojiGroup_foodDrink(group = "food-drink") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M13.4404507,12.0850076 C14.050232,11.7279399 14.624055,11.6426962 15.1651887,11.5101788 C15.6655864,11.3874682 16.167493,11.2205013 16.9656149,10.4223794 L19.8603784,7.5276159 C20.0469589,7.33952668 20.046456,7.03652199 19.8593726,6.84918714 C19.6717863,6.66185228 19.3697874,6.6623552 19.182704,6.84969005 L16.8119752,9.22016743 C16.6248918,9.40750228 16.3211327,9.40725082 16.1343008,9.22067034 C15.9472174,9.03358694 15.9472174,8.72982788 16.1343008,8.54274449 L16.1353066,8.54199012 C16.4682346,8.20881068 18.5050296,6.17226711 18.5050296,6.17226711 C18.6926159,5.9846808 18.692113,5.68217902 18.5050296,5.49509563 C18.3179462,5.30776077 18.0149415,5.30750932 17.8278581,5.49484417 C17.8278581,5.49484417 15.7910631,7.53138774 15.4581351,7.86456718 L15.4571293,7.86532155 C15.2700459,8.0526564 14.9665383,8.0526564 14.7794549,7.865573 C14.5923715,7.67874106 14.5926229,7.374982 14.7797063,7.18789861 L17.1501837,4.81742123 C17.33777,4.62983492 17.33777,4.32783605 17.1506866,4.14075266 C16.9633518,3.95316635 16.6605985,3.95316635 16.4732637,4.14024975 L13.5782487,7.03451034 C12.7801268,7.83263224 12.6129085,8.33428732 12.4904493,8.83493656 C12.3576804,9.37607026 12.2724368,9.95014471 11.9151176,10.5599259 L5.50424235,4.14879926 C5.31665604,3.9614644 5.01415426,3.96171586 4.82707087,4.1485478 C3.1692203,5.80639837 6.6114039,9.99817284 8.76009693,12.1473688 C9.14080158,12.5280734 9.45210432,12.7606704 9.73122068,12.9145616 L4.28040514,18.3646227 C3.90623835,18.7387895 3.90674126,19.3453018 4.2806566,19.7194686 C4.65457193,20.093384 5.26083277,20.0938869 5.63525102,19.7197201 L11.7916526,13.5633185 C12.1939825,13.7297825 12.6295046,13.9842561 13.0406354,14.395387 L18.3654714,19.720223 C18.7381295,20.0931325 19.3456476,20.0943898 19.7200658,19.720223 C20.0927239,19.347062 20.0932268,18.7385381 19.7205688,18.3653771 L13.4404507,12.0850076 Z"
            />
        </svg>
    );
}

export function emojiGroup_travelPlaces(group = "travel-places") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M19.7629331,6.05594053 L17.6103818,4.60289782 C17.5216833,4.54282474 17.4166562,4.51077233 17.3094116,4.51077233 L13.5425476,4.51077233 L13.5425476,2.53803704 C13.5425476,2.24069548 13.3018521,2 13.0045105,2 L10.9952879,2 C10.6981479,2 10.4572509,2.24089706 10.4572509,2.53803704 L10.4572509,4.51097392 L6.54725967,4.51097392 C6.25011969,4.51097392 6.00922263,4.75187098 6.00922263,5.04901096 L6.00922263,7.9548948 C6.00922263,8.25203477 6.25011969,8.49293184 6.54725967,8.49293184 L10.4574524,8.49293184 L10.4574524,10.0177397 L6.69058838,10.0177397 C6.58314225,10.0177397 6.47851833,10.0497921 6.38961824,10.1098652 L4.2370669,11.5627063 C4.0886985,11.6628953 4,11.8298098 4,12.0088195 C4,12.187426 4.0886985,12.3547436 4.2370669,12.454731 L6.38941666,13.9077737 C6.47851833,13.9676452 6.58314225,13.9998992 6.69058838,13.9998992 L10.4574524,13.9998992 L10.4574524,21.0492125 C10.4574524,21.3463525 10.6983495,21.5872496 10.9954895,21.5872496 L13.0047121,21.5872496 C13.3020537,21.5872496 13.5427491,21.3463525 13.5427491,21.0492125 L13.5427491,13.9998992 L17.4527403,13.9998992 C17.7500819,13.9998992 17.990979,13.7590021 17.990979,13.4616606 L17.990979,10.5557767 C17.990979,10.2586368 17.7500819,10.0177397 17.4527403,10.0177397 L13.5425476,10.0177397 L13.5425476,8.49293184 L17.3094116,8.49293184 C17.4166562,8.49293184 17.5216833,8.46087943 17.6103818,8.40080635 L19.7629331,6.94776364 C19.9110999,6.84777624 20,6.68045861 20,6.50185209 C20,6.32324556 19.9110999,6.15592793 19.7629331,6.05594053 Z M16.9147033,12.9236235 L13.0045105,12.9236235 L10.9952879,12.9236235 L6.85528537,12.9236235 L5.5000126,12.0086179 L6.85528537,11.0938138 L10.9954895,11.0938138 L13.0047121,11.0938138 L16.9147033,11.0938138 L16.9147033,12.9236235 Z M17.1447146,7.41685775 L13.0045105,7.41685775 L10.9952879,7.41685775 L7.08529671,7.41685775 L7.08529671,5.58724959 L10.9952879,5.58724959 L13.0045105,5.58724959 L17.1447146,5.58724959 L18.4999874,6.50185209 L17.1447146,7.41685775 Z"
            />
        </svg>
    );
}

export function emojiGroup_activities(group = "activities") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M16.7634901,8.64140896 C16.8282904,9.00807085 16.5809692,9.36033265 16.2157473,9.42495299 L12.7984297,10.0403761 L14.1120765,15.2595029 C14.1379966,15.3696635 14.1613967,15.6195048 14.1432166,15.7336254 L13.5470536,20.1911683 C13.4746932,20.6199305 13.0614111,20.9086519 12.6261689,20.8362916 C12.1909266,20.7637512 11.8982451,20.3609091 11.9706055,19.9294469 L12.5469684,15.5961047 C12.5469684,15.5921446 12.3487874,14.7906005 12.3487874,14.7906005 C12.3345674,14.8269607 8.49370764,20.6031904 8.49370764,20.6031904 C8.2721265,20.9801123 7.785044,21.113313 7.40038202,20.8944319 C7.01950007,20.6782508 6.88611938,20.1951283 7.10626051,19.8180263 L10.7890794,14.294338 L9.65039358,9.89259539 C9.56777315,9.52989353 9.83597453,9.15945162 10.2064164,9.0971713 L15.4385033,8.15540647 L9.05225051,3.94158483 L8.62474831,4.55304797 C8.48866761,4.76148904 8.21182619,4.81728933 8.00428513,4.67994863 C7.79566405,4.54422793 7.73626375,4.2668465 7.87234445,4.05822543 L8.6027882,3 L16.4655886,8.18402662 C16.4798086,8.19446667 16.7132698,8.3562875 16.7634901,8.64140896 Z M9.97727525,6.02995556 C10.714019,6.02995556 11.3125221,6.62179859 11.3127021,7.34990233 C11.3127021,8.08034608 10.714019,8.67110912 9.97727525,8.67110912 C9.23603145,8.67110912 8.63788838,8.08052608 8.63788838,7.34990233 C8.63788838,6.62179859 9.23603145,6.02995556 9.97727525,6.02995556 Z"
            />
        </svg>
    );
}

export function emojiGroup_objects(group = "objects") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.4781671,6.08771565 C17.130662,5.41988765 16.6736986,4.86511431 16.1074207,4.42368331 C15.5409989,3.98239614 14.9002146,3.63474585 14.1856429,3.38073244 C13.4706397,3.1270067 12.7421161,3 11.9999281,3 C11.2577401,3 10.5292165,3.12686287 9.81435712,3.38073244 C9.09949778,3.63474585 8.45885723,3.98239614 7.89243548,4.42368331 C7.32615757,4.86511431 6.86905033,5.41974381 6.52140143,6.08771565 C6.17375253,6.75568749 6,7.47630311 6,8.24985017 C6,9.46080084 6.40244999,10.5076353 7.20706229,11.3904973 C7.55873857,11.7732434 7.84971653,12.1131266 8.08014,12.410003 C8.31070731,12.7067355 8.54314447,13.0798447 8.77745149,13.5290428 C9.0117585,13.9782409 9.14466193,14.3982404 9.1758741,14.7888975 C8.80866365,15.0076712 8.62513035,15.3279928 8.62513035,15.750006 C8.62513035,16.0391153 8.72279423,16.2891013 8.918122,16.499964 C8.72279423,16.7109706 8.62513035,16.9609567 8.62513035,17.2500659 C8.62513035,17.6564011 8.80104041,17.9726952 9.15257285,18.1995237 C9.05088159,18.3790304 9.00010788,18.5625644 9.00010788,18.7501259 C9.00010788,19.1094268 9.1230867,19.3870292 9.36918817,19.5820701 C9.61514581,19.7773987 9.91791823,19.8750629 10.2773616,19.8750629 C10.4335663,20.2188297 10.6680171,20.4922609 10.9804265,20.6953565 C11.2928358,20.8984522 11.6327176,21 11.9999281,21 C12.3671385,21 12.7070203,20.8984522 13.0194297,20.6953565 C13.3319829,20.4922609 13.5664337,20.2188297 13.7226384,19.8750629 C14.0819379,19.8750629 14.3848542,19.7773987 14.6308118,19.5820701 C14.8769133,19.3870292 14.9998921,19.1094268 14.9998921,18.7501259 C14.9998921,18.5625644 14.9489746,18.3790304 14.8472833,18.1995237 C15.1988158,17.9728391 15.3747258,17.6564011 15.3747258,17.2500659 C15.3747258,16.9609567 15.2769181,16.7109706 15.0817342,16.499964 C15.2769181,16.2891013 15.3747258,16.0391153 15.3747258,15.750006 C15.3747258,15.3279928 15.1911925,15.0078151 14.8238382,14.7888975 C14.8551942,14.3982404 14.9880977,13.9782409 15.2224047,13.5290428 C15.4569994,13.0798447 15.6892927,12.7067355 15.91986,12.410003 C16.1504273,12.1131266 16.4414053,11.7732434 16.7927939,11.3904973 C17.5974062,10.5076353 18,9.46080084 18,8.24985017 C18,7.47630311 17.8261036,6.75568749 17.4781671,6.08771565 L17.4781671,6.08771565 Z M15.702957,10.3591971 C15.6247108,10.4450668 15.5056156,10.5739434 15.3455273,10.7458268 C15.1854391,10.9177101 15.0663438,11.0464429 14.9882415,11.1324565 C13.9883014,12.3278729 13.4375577,13.4917894 13.3360103,14.6246374 L10.6639897,14.6246374 C10.5624423,13.4917894 10.0116986,12.3278729 9.01161467,11.1324565 C8.93351233,11.0465867 8.81441705,10.9177101 8.654185,10.7458268 C8.49409678,10.5739434 8.37485766,10.4452107 8.29675532,10.3591971 C7.76557312,9.74199915 7.4999101,9.03878763 7.4999101,8.24985017 C7.4999101,7.68730972 7.63468338,7.16389251 7.90422994,6.6794547 C8.17392034,6.1950169 8.52545278,5.79860639 8.9589711,5.48993551 C9.39248942,5.18126463 9.87289791,4.93918957 10.4003404,4.76342264 C10.9276391,4.58751189 11.460835,4.49977226 11.9999281,4.49977226 C12.5390212,4.49977226 13.0722171,4.58751189 13.5995158,4.76342264 C14.1268144,4.93918957 14.6072229,5.18126463 15.0408851,5.48993551 C15.4744034,5.79860639 15.8260797,6.19516074 16.0954824,6.6794547 C16.3648851,7.16389251 16.4998022,7.68730972 16.4998022,8.24985017 C16.4998022,9.03878763 16.234283,9.74199915 15.702957,10.3591971 L15.702957,10.3591971 Z M13.5410693,6.16674126 C13.1543994,6.05562304 12.7655718,6 12.375018,6 C12.2734596,6 12.185567,6.03286235 12.1113402,6.09897065 C12.0371134,6.16495109 12,6.24307909 12,6.33335464 C12,6.4236302 12.0371134,6.5017582 12.1113402,6.56773864 C12.185567,6.6335912 12.2734596,6.66670929 12.375018,6.66670929 C12.7813953,6.66670929 13.1953968,6.75353238 13.6175977,6.9270507 C14.0393671,7.10069689 14.2501079,7.34722844 14.2501079,7.66677322 C14.2501079,7.75704878 14.2870774,7.83530465 14.3614481,7.90115722 C14.4358187,7.96700978 14.5235675,8 14.624982,8 C14.7266842,8 14.814433,7.96713765 14.8888036,7.90115722 C14.9630304,7.83517678 15,7.75704878 15,7.66677322 C15,7.30554312 14.8532726,6.99303114 14.560537,6.72923726 C14.2678015,6.46544339 13.9277392,6.2777316 13.5410693,6.16674126 L13.5410693,6.16674126 Z"
            />
        </svg>
    );
}

export function emojiGroup_symbols(group = "symbols") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M19.1442646,4.83575742 C18.1650678,3.85559657 16.4547374,3.73144287 14.3690482,4.52537315 C13.5381247,4.85169622 12.7411635,5.25877639 11.9896,5.74077261 C11.2380365,5.25877639 10.4410753,4.85169622 9.61015178,4.52537315 C7.52446261,3.73144287 5.82718816,3.83926056 4.8349354,4.83575742 C3.84268265,5.83225429 3.73170701,7.52793255 4.52485642,9.61567516 C4.85085852,10.4474168 5.25753831,11.2451626 5.73906044,11.997466 C5.25753831,12.7497695 4.85085852,13.5475153 4.52485642,14.3792569 C3.73170701,16.4669995 3.83941866,18.165945 4.8349354,19.1591746 C5.4505037,19.7385409 6.27598921,20.04073 7.11972793,19.9955786 C7.98011582,19.972593 8.82930089,19.7943985 9.62647173,19.4695589 C10.4517722,19.142269 11.243226,18.73521 11.9896,18.2541594 C12.7411635,18.7361557 13.5381247,19.1432358 14.3690482,19.4695589 C15.1692842,19.7955535 16.0218905,19.9737698 16.885584,19.9955786 C17.7293227,20.04073 18.5548082,19.7385409 19.1703765,19.1591746 C20.1495733,18.1790138 20.2736049,16.4669995 19.4804555,14.3792569 C19.1461294,13.5464957 18.7306859,12.7487154 18.2401396,11.997466 C18.7216617,11.2451626 19.1283415,10.4474168 19.4543436,9.61567516 C20.247493,7.52793255 20.1495733,5.83225429 19.1442646,4.83575742 Z M5.74558842,9.15173236 C5.15480636,7.59654381 5.15807034,6.36154114 5.74558842,5.76037582 C6.11674164,5.43561893 6.60182527,5.2721976 7.09361601,5.30623463 C7.79440087,5.33070398 8.48521159,5.480066 9.13360934,5.74730701 C9.70769152,5.97226391 10.2631967,6.24209666 10.7949799,6.55430611 C9.18669216,7.76170948 7.7580096,9.19179863 6.55179379,10.8016698 C6.24050431,10.2735668 5.97094753,9.72190607 5.74558842,9.15173236 Z M11.9896,7.30902996 C12.8957173,7.95068414 13.7452817,8.66882467 14.5289837,9.45558222 C15.3149674,10.2400558 16.0324016,11.0904566 16.6734247,11.997466 C16.0324016,12.9044755 15.3149674,13.7548763 14.5289837,14.5393498 C13.7452817,15.3261074 12.8957173,16.0442479 11.9896,16.6859021 C11.0834827,16.0442479 10.2339183,15.3261074 9.45021631,14.5393498 C8.66423258,13.7548763 7.94679839,12.9044755 7.30577532,11.997466 C8.59381135,10.1831894 10.1771079,8.59833411 11.9896,7.30902996 Z M9.1466653,18.247625 C7.59300638,18.8389888 6.35921842,18.8357215 5.75864438,18.247625 C5.15807034,17.6595285 5.15480636,16.411457 5.75864438,14.8562685 C5.98338002,14.2816211 6.25294737,13.725569 6.56484974,13.1932623 C7.77126614,14.8029593 9.19992209,16.2330218 10.8080359,17.4406259 C10.2762527,17.7528354 9.72074748,18.0226681 9.1466653,18.247625 Z M18.2336116,14.8431997 C18.8243937,16.3983882 18.8211297,17.6333909 18.2336116,18.2345562 C17.6460935,18.8357215 16.3992496,18.8389888 14.8455907,18.2345562 C14.2715085,18.0095993 13.7160033,17.7397666 13.1842201,17.4275571 C13.9922383,16.8232472 14.7558043,16.1615663 15.4690126,15.4476322 C16.1822445,14.7337217 16.8432746,13.9694039 17.4469902,13.1605902 C17.753106,13.6998229 18.0161333,14.2624472 18.2336116,14.8431997 Z M18.2336116,9.15173236 C18.0088759,9.72637974 17.7393086,10.2824319 17.4274062,10.8147386 C16.2209564,9.20507058 14.7923049,7.7750125 13.1842201,6.56737492 C13.7160033,6.25516547 14.2715085,5.98533272 14.8455907,5.76037582 C15.4931609,5.48865125 16.184001,5.33485713 16.885584,5.30623463 C17.3773747,5.2721976 17.8624584,5.43561893 18.2336116,5.76037582 C18.8211297,6.36154114 18.8243937,7.59654381 18.2336116,9.15173236 Z M11.9896,14.284508 C13.2514561,14.284508 14.2743925,13.2605644 14.2743925,11.997466 C14.2743925,10.7343676 13.2514561,9.71042404 11.9896,9.71042404 C10.7277439,9.71042404 9.70480748,10.7343676 9.70480748,11.997466 C9.70480748,12.6040273 9.945526,13.1857453 10.3740077,13.6146489 C10.8024894,14.0435525 11.3836353,14.284508 11.9896,14.284508 Z M11.9896,11.0173052 C12.5303955,11.0173052 12.9687968,11.4561381 12.9687968,11.997466 C12.9687968,12.5387939 12.5303955,12.9776269 11.9896,12.9776269 C11.4488045,12.9776269 11.0104032,12.5387939 11.0104032,11.997466 C11.0104032,11.4561381 11.4488045,11.0173052 11.9896,11.0173052 Z"
            />
        </svg>
    );
}

export function emojiGroup_flags(group = "flags") {
    return (
        <svg className="emojiGroup-icon" viewBox="0 0 24 24">
            <title>{t(group)}</title>
            <path
                fill="currentColor"
                d="M6.32484076,15.8895966 L6.35881104,19.3205945 C6.35881104,19.6942675 6.05307856,20 5.67940552,20 C5.30573248,20 5,19.6942675 5,19.3205945 L5,13.104034 L5,5.63057325 L5,4.67940552 C5,4.30573248 5.30573248,4 5.67940552,4 C6.01910828,4 6.29087049,4.23779193 6.32484076,4.57749469 L6.32484076,15.8895966 Z M18.2144374,12.7643312 C18.2823779,12.866242 18.3163482,12.9681529 18.3163482,13.0700637 C18.3163482,13.4437367 18.0106157,13.7494692 17.6369427,13.7494692 C17.5690021,13.7494692 17.5010616,13.7494692 17.433121,13.7154989 C16.7197452,13.5116773 15.9384289,13.4097665 15.089172,13.4097665 C13.9681529,13.4097665 12.881104,13.5796178 11.7261146,13.7494692 C10.5711253,13.9193206 9.34819533,14.089172 8.15923567,14.089172 C7.98938429,14.089172 7.78556263,14.089172 7.61571125,14.089172 L7.61571125,5.29087049 C7.78556263,5.29087049 7.98938429,5.29087049 8.15923567,5.29087049 C9.28025478,5.29087049 10.3673036,5.12101911 11.522293,4.95116773 C12.6772824,4.78131635 13.9002123,4.61146497 15.089172,4.61146497 C16.07431,4.61146497 16.9575372,4.74734607 17.8067941,4.985138 C18.0106157,5.05307856 18.1804671,5.18895966 18.2484076,5.39278132 C18.3163482,5.59660297 18.3163482,5.80042463 18.2144374,5.97027601 C17.670913,6.88747346 17.1273885,7.90658174 16.5498938,9.06157113 C17.1273885,10.3184713 17.670913,11.5414013 18.2144374,12.7643312 Z"
            />
        </svg>
    );
}

export function embed() {
    return (
        <svg className="richEditorButton-icon" viewBox="0 0 24 24">
            <title>{t("Embed")}</title>
            <path
                fill="currentColor"
                d="M4,5a.944.944,0,0,0-1,.875v12.25A.944.944,0,0,0,4,19H20a.944.944,0,0,0,1-.875V5.875A.944.944,0,0,0,20,5ZM4,4H20a1.9,1.9,0,0,1,2,1.778V18.222A1.9,1.9,0,0,1,20,20H4a1.9,1.9,0,0,1-2-1.778V5.778A1.9,1.9,0,0,1,4,4ZM9.981,16.382l-4.264-3.7V11.645L9.981,7.45V9.126l-3.2,2.958,3.2,2.605Zm4.326-1.693,3.2-2.605-3.2-2.958V7.45l4.265,4.195v1.041l-4.265,3.7Z"
                style={currentColorFill}
            />
        </svg>
    );
}
