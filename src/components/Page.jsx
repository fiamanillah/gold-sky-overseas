export default function Page({ children }) {
    return (
        <div className='relative bg-[url("/bg2.svg")] overflow-hidden'>
            <div className="absolute inset-0 bg-base-100 bg-opacity-95 z-10"></div>
            <div className="relative z-20">{children}</div>
        </div>
    );
}
