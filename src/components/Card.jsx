/* eslint-disable react/prop-types */
export const Card = ({ title, subtitle, imageSrc, order }) => {
    return (
        <article
            className={`bg-slate-100 overflow-hidden rounded-sm flex-1 space-y-8 shadow-[2px_0_15px_1px_rgba(0,0,0,0.25)]  z-[${order}] group`}
        >
            <figure className="overflow-hidden">
                <img
                    className="object-contain transform transition-transform duration-300 w-full group-hover:scale-110"
                    src={imageSrc}
                    alt={title}
                />
            </figure>
            <section className="p-4">
                <hgroup>
                    <h2 className="text-2xl font-bold uppercase">{title}</h2>
                    <h3 className="">{subtitle}</h3>
                </hgroup>
            </section>
        </article>
    );
};
