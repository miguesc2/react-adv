import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy"; //lo importo porque este no será mediante Carga Perezosa

type JSXComponent = () => JSX.Element 

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, //Permiteme LazyExoticComponents o JSX Elements
    name: string
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'))

export const routes:Route[] = [
    {
        path: '/lazyload/*', //Todo(*) lo que venga despues de la ruta /lazyload, será procesado por este path
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LaziLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]