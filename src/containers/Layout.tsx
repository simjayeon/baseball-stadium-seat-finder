const Layout = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-5xl p-8">
                {/* Left Side - Image */}
                <div className="relative hidden md:block w-[600px] flex-shrink-0 rounded-2xl shadow-xl mr-8 bg-white">
                    {/* 이미지 영역 */}
                    <div className="absolute bottom-4 left-4 text-white">
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-10 rounded-2xl shadow-xl bg-white c">
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;