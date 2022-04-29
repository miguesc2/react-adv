import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element 

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, //Permiteme LazyExoticComponents o JSX Elements
    name: string
}

const Lazy1 = lazy(() => import(/*webpackChunkName: "LazysitoPage1"*/ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazysitoPage2"*/ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazysitoPage3"*/ '../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazi-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazi-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazi-3'
    },
]