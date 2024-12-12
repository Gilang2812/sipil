
import { Map } from "../components/Map";
import { MdOutlineHealthAndSafety, MdOutlineMosque } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";
import { ServiceItem } from "../components/ServiceItem";
import { Header } from "../components/Header";
import { cards } from "../data/card";
import { Card } from "../components/Card";
const Home = () => {
    return (
        <main className="container bg-[#F8FAFC] font-sans h-screen max-w-none overflow-x-hidden">
            <Header />
            <section className="mb-8 animate-slideInLeft">
                <div className="flex     leading-loose           ">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            imageSrc={card.imageSrc}
                            order={card.order}
                        />
                    ))}
                </div>
            </section>

            <section className="relative  flex flex-col gap-8 ">
                <div className="space-y-4 leading-loose w-full z-10 [&_h2]:text-xl [&_h2]:text-indigo-900 [&_h2]:font-semibold mx-auto px-12  -mb-8">
                    <article className="space-y-2  animate-slideInRight">
                        <h2> Main service</h2>
                        <div className="shadow  bg-white flex font-normal    divide-x        text-xl">
                            <ServiceItem Icon={MdOutlineMosque} />
                            <ServiceItem Icon={AiOutlineEnvironment} />
                            <ServiceItem Icon={MdOutlineHealthAndSafety} />
                        </div>
                    </article>
                    <article className="space-y-2 animate-fade">
                        <h2>It&apos;s easy getting to the Central Station Complex!</h2>
                        <div className="bg-slate-200 overflow-hidden p-1 h-full rounded-xl">
                            <Map />

                        </div>
                    </article>
                </div>
                <div className="p-32  text-white w-full overflow-auto bg-gradient-to-br from-blue-900 via-blue-950 to-95% to-indigo-950  z-0 h  -mt-8">
                    <p>test</p>
                </div>
            </section>

        </main>
    )
}

export default Home