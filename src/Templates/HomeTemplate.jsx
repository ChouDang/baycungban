import React from 'react'
import { Route } from 'react-router-dom'
import { FooterHome } from '../components/FooterHome/FooterHome'
import { HeaderHome } from '../components/HeaderHome/HeaderHome'


export default function HomeTemplate(props) { //props: {component: , path: '', mobileComponent: }

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return <>
                <section className="h-screen">

                    <div className="h-5/6 pt-12 px-44 bg-hero-pattern ">
                        <HeaderHome {...propsRoute} />
                        <props.component {...propsRoute} />
                    </div>
                    <div className="h-1/6">
                        <FooterHome {...propsRoute} />
                    </div>
                </section>
            </>
        }} />
    )
}
