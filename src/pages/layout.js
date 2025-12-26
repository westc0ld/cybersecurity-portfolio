import Header from "../components/header"
import Footer from "../components/footer"
import HeadInfo from "../components/headinfo"

export default function Layout({children}) {
    return (
        <>  
            <HeadInfo/>
            <Header/>
            <div>{children}</div>
            <Footer/>

        </>
    )
}

