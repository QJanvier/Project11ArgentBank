import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import ChatIcon from "../../Assets/Img/icon-chat.webp";
import MoneyIcon from "../../Assets/Img/icon-money.webp";
import SecurityIcon from "../../Assets/Img/icon-security.webp";

function Home() {
    return (
        <>
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                    <Features iconSrc={ChatIcon} title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes."  />
                    <Features iconSrc={MoneyIcon} title="More savings mean higher rates" description="The more you save with us, the higher your interest rate will be!" />
                    <Features iconSrc={SecurityIcon} title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
        </>
    )
}

export default Home