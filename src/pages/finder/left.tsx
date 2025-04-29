import React from "react";
import Image from "next/image";

const PageContent = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Image
                src="/img/jamsil_baseball_stadium.png"
                alt="SeatImage"
                layout="responsive" // 이미지가 부모의 크기에 맞게 자동으로 크기 조정
                width={300} // 실제 이미지의 가로 크기에 맞게 조정
                height={200} // 실제 이미지의 세로 크기에 맞게 조정
                className="w-full h-auto rounded-lg p-8" // Tailwind CSS 클래스 수정
            />
        </div>
    );
}

const PageLeft = () => {
    return <PageContent/>;
}

export default PageLeft;