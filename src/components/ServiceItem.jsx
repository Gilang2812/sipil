/* eslint-disable react/prop-types */
export const ServiceItem = ( {Icon})=>{
    return (
        <section className="p-8 flex flex-[min-content] group hover:bg-slate-200 transition-all duration-500  justify-center items-center">
            <article className="flex p-1 items-center trasnform transition-transform duration-500 ease-in-out group-hover:scale-125 justify-center bg-white flex-col border-2 rounded-[50%] border-slate-500 text-slate-500">
                <Icon className="" />
            </article>
        </section>
    )
}

export const ServiceItems = ({ Icon }) => {
    return (
        <section className="p-8 flex flex-[min-content] group hover:justify-center items-center">
            <article className="flex p-1 items-center justify-center flex-col border-2 rounded-[50%] border-slate-500 text-slate-500 transform transition-transform group-hover:scale-110">
                <Icon className="" />
            </article>
        </section>
    );
};
