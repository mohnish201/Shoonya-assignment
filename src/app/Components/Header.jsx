const Header = ({ text, imgSrc, desc }) => {
    return (
        <div
            className="mb-10 rounded-lg capitalize pt-40 lg:pt-64 text-2xl lg:text-3xl pb-6 text-center text-white font-[500] bg-cover bg-center bg-no-repeat w-full transition-all duration-150 "
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${imgSrc}) `,
            }}
        >
            <p className="text-center w-full">
                {text}
            </p>
            <p className="text-sm font-[400]">{desc}</p>
        </div>
    );
};

export { Header };