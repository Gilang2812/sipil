
import { Map } from "../components/Map";
import { MdOutlineHealthAndSafety, MdOutlineMosque } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";
import { ServiceItem } from "../components/ServiceItem";
import { Header } from "../components/Header";
const Home = () => {
    return (
        <main className="container bg-[#F8FAFC] font-sans h-screen max-w-none overflow-x-hidden">
            <Header />
            <section className="mb-8">
                <div className="flex [&_section]:p-4 [&_h2]:text-2xl leading-loose [&_article]:space-y-8 [&_h2]:font-bold [&_h2]:uppercase [&_article]:flex-1 [&_article]:shadow-[2px_0_15px_1px_rgba(0,0,0,0.25)] [&_article]:rounded-sm [&_article]:overflow-hidden    ">
                    <article className=" bg-slate-100 z-30">
                        <figure>
                            <img className="object-contain w-full" src="/images/logo.png" alt="card-header" />
                        </figure>
                        <section>
                            <hgroup>
                                <h2>Greate Wall</h2>
                                <h3>Tourism </h3>
                            </hgroup>
                        </section>
                    </article>
                    <article className=" bg-slate-100 z-20">
                        <figure>
                            <img className="object-contain w-full" src="/images/logo.png" alt="card-header" />
                        </figure>
                        <section>
                            <hgroup>
                                <h2>Amai Setia</h2>
                                <h3>HandyCraf</h3>
                            </hgroup>
                        </section>
                    </article>
                    <article className=" bg-slate-100 z-10">
                        <figure>
                            <img className="object-contain w-full" src="/images/logo.png" alt="card-header" />
                        </figure>
                        <section>
                            <hgroup>
                                <h2>Traditional Hall</h2>
                                <h3>Historycal Place</h3>
                            </hgroup>
                        </section>
                    </article>
                </div>
            </section>

            <section className="relative flex flex-col gap-8 ">
                <div className="space-y-4 leading-loose w-full z-10 [&_h2]:text-xl [&_h2]:text-indigo-900 [&_h2]:font-semibold mx-auto px-12  -mb-8">
                    <article className="space-y-2">
                        <h2> Main service</h2>
                        <div className="shadow  bg-white flex font-normal    divide-x        text-xl">
                            <ServiceItem Icon={MdOutlineMosque} />
                            <ServiceItem Icon={AiOutlineEnvironment} />
                            <ServiceItem Icon={MdOutlineHealthAndSafety} />
                        </div>
                    </article>
                    <article className="space-y-2">
                        <h2>It&apos;s easy getting to the Central Station Complex!</h2>
                        <div className="bg-slate-200 overflow-hidden p-1 h-full rounded-xl">
                            <Map />

                        </div>
                    </article>
                </div>
                <div className="p-32 text-white w-full overflow-auto bg-gradient-to-br from-blue-900 via-blue-950 to-95% to-indigo-950  z-0 h  -mt-8">
                    <p>test</p>
                </div>
            </section>

        </main>
    )
}

export default Home