const PageContent = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-full max-w-sm">
                <p className="text-2xl font-bold text-center text-black mb-8">야구장 자리 찾기</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/kakao_login_medium_wide.png" alt="Login" className="w-full h-auto"/>
                <hr className="mt-8 mb-4"></hr>
                <div>
                    <span className="text-sm text-gray-500">이메일</span>
                    <input type="text" className="border p-2 mb-4 w-full text-sm"/>
                </div>
                <div>
                    <span className="text-sm text-gray-500">비밀번호</span>
                    <input type="password" className="border p-2 mb-4 w-full text-sm"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
                    로그인
                </button>
                <div className="flex justify-between mt-4">
                    <div className="text-sm text-blue-600">{"회원가입"}</div>
                    <div className="text-sm text-blue-600">{"비밀번호 찾기"}</div>
                </div>
            </div>
        </div>
    );
}
const PageLogin = () => {
    return (
        <PageContent/>
    );
}
export default PageLogin;
