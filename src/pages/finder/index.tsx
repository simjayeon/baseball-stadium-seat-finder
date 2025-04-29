import Layout from "@/components/layouts/Layout";
import Select, {StylesConfig} from 'react-select';
import {useState} from "react";
import {CSSObject} from "@emotion/serialize";

const customSelectStyles: StylesConfig = {
    control: (base: CSSObject) => ({
        ...base,
        paddingRight: '10px', // 오른쪽 여백
        marginBottom: '8px',
        borderRadius: '0.375rem', // rounded-md 스타일 적용
        color: '#000', // 글자 색상
        fontSize: '0.875rem', // text-sm 스타일 적용
    }),
    option: (base: CSSObject) => ({
        ...base,
        color: '#000', // 옵션 텍스트 색상 변경
    }),
    indicatorSeparator: () => ({
        display: 'none', // 아이콘과 구분선 없애기
    }),
};

const stadiumOptions = [
    {value: 'JAMSIL', label: '잠실종합운동장 잠실야구장'},
    {value: 'GOCHUCK', label: '고척스카이돔'},
    {value: 'DAEJEON', label: '대전한화생명볼파크'},
    {value: 'DAEGU', label: '대구삼성라이온즈파크'},
    {value: 'GANGJU', label: '광주기아챔피언스필드'},
    {value: 'BUSAN', label: '부산사직종합운동장 사직야구장'},
    {value: 'CHANGWON', label: '창원NC파크'},
];

const PageContent = () => {
    const [seatNumber, setSeatNumber] = useState("");
    return (
        <Layout
            rightContent={
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="w-full max-w-sm">
                        <p className="text-xl font-bold text-center text-black mb-8">좌석 정보를 입력해주세요.</p>
                        <span className="text-sm text-gray-500">구장</span>
                        <Select
                            placeholder={"구장을 선택하세요."}
                            options={stadiumOptions}
                            styles={customSelectStyles}
                        />
                        <span className="text-sm text-gray-500">구역</span>
                        <Select
                            placeholder={"구역을 선택하세요."}
                            styles={customSelectStyles}/>
                        <span className="text-sm text-gray-500">열</span>
                        <Select
                            placeholder={"열을 선택하세요."}
                            styles={customSelectStyles}/>
                        <span className="text-sm text-gray-500">좌석 번호</span>
                        {/* 자식 요소를 넣지 않고 value와 onChange로 관리 */}
                        <input
                            placeholder={"좌석 번호를 입력하세요."}
                            value={seatNumber}
                            onChange={(e) => setSeatNumber(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm text-black"
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-md mb-4">
                            검색
                        </button>
                        <div className="text-sm text-center text-blue-500">
                            {"야구장이 처음이세요? "}
                            <strong className="font-bold">키워드로 찾기</strong>
                        </div>
                    </div>
                </div>
            }
        />
    );
}

const Index = () => {
    return (
        <PageContent/>
    );
}
export default Index;