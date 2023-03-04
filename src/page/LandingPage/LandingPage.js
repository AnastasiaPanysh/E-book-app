import Advantages from "../../components/Advantages/Advantages";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Preview from "../../components/Preview/Preview"
import Pricing from "../../components/Pricing/Pricing";

function LandingPage() {
    return (
        <>
            <Preview />
            <Advantages />
            <Features />
            <Pricing/>
            <Footer/>
        </>
    )
}

export default LandingPage;