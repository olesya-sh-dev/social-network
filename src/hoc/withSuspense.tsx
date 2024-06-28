import React from "react";
import { ComponentType } from "react";
import { Preloader } from "../components/common/Preloader";

export function withSuspense  <T>(Component: ComponentType<T>) {
    return (props: any) => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </React.Suspense>
        );
    };
}