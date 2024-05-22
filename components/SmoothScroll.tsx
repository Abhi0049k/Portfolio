"use client"

import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}