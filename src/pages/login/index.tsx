const PageLoginContent = () => {
    return (
        <>
            <div className="w-full h-[100vh] bg-gray-100 flex items-center justify-center relative">
                <div className="min-w-816 h-520 flex shadow-island">
                    <img className="w-1/2 h-full" src="/img/login-right.png"/>
                </div>
            </div>
        </>
    );
}

const PageLogin = () => {
    return (
        <PageLoginContent/>
    );
};

export default PageLogin;