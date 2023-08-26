import * as React from "react";
import { Link, HeadFC } from "gatsby";

export default function NotFoundPage() {
    return (
        <main
            style={{
                fontFamily: "var(--font-amaranth)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Link to="/">Go home</Link>.
        </main>
    );
}

export const Head: HeadFC = () => <title>Alpha.Digital | 404</title>;
