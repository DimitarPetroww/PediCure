import React, { Fragment, PropsWithChildren } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

import { RichText as RichTextType } from "@repo/types";

interface RichTextProps {
    children: PropsWithChildren<RichTextType[]>
}

export const RichText = ({ children }: RichTextProps) =>
    children.map((node: RichTextType, i: number) => {
        if (Text.isText(node)) {
            let text = (
                <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
            );

            if (node.bold) {
                text = <strong key={i}>{text}</strong>;
            }

            if (node.code) {
                text = <code key={i}>{text}</code>;
            }

            if (node.italic) {
                text = <em key={i}>{text}</em>;
            }

            if (node.text === "") {
                text = <br />;
            }

            return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
            return null;
        }

        switch (node.type) {
            case "h1":
                return <h1 key={i}><RichText>{node.children}</RichText></h1>;
            case "h2":
                return <h2 key={i}><RichText>{node.children}</RichText></h2>;
            case "h3":
                return <h3 key={i}><RichText>{node.children}</RichText></h3>;
            case "h4":
                return <h4 key={i}><RichText>{node.children}</RichText></h4>;
            case "h5":
                return <h5 key={i}><RichText>{node.children}</RichText></h5>;
            case "h6":
                return <h6 key={i}><RichText>{node.children}</RichText></h6>;
            case "blockquote":
                return (
                    <blockquote key={i}>
                        <RichText>{node.children}</RichText>
                    </blockquote>
                );
            case "ul":
                return <ul key={i}><RichText>{node.children}</RichText></ul>;
            case "ol":
                return <ol key={i}><RichText>{node.children}</RichText></ol>;
            case "li":
                return <li key={i}><RichText>{node.children}</RichText></li>;
            case "link":
                return (
                    <a href={escapeHTML(node.url as string)} key={i}>
                        <RichText>{node.children}</RichText>
                    </a>
                );

            default:
                return <p key={i}><RichText>{node.children}</RichText></p>;
        }
    });