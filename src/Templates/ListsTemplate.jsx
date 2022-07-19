import React from 'react'
import { Route } from 'react-router-dom'
import { FooterHome } from '../components/FooterHome/FooterHome'
import { HeaderLists } from '../components/HeaderLists/HeaderLists'


export default function ListsTemplate(props) { //props: {component: , path: '', mobileComponent: }

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return <>
                <section className="h-min">
                    <div className="">
                        <HeaderLists {...propsRoute} />
                        <props.component {...propsRoute} />
                    </div>
                    <div className="">
                        <FooterHome {...propsRoute} />
                    </div>
                </section>
            </>
        }} />
    )
}
