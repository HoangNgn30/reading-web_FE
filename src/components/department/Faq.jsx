import { Collapse } from 'antd';

const { Panel } = Collapse;
function FAQ() {
    const faqData = [
        {
            question: 'Demo content',
            answer: [
                '1. demo                      - Kỹ sư KHMT             - ĐH Đại Nam cấp.',
                '2. demo                     - Cử nhân CNTT         - ĐH Đại Nam cấp.',
                '3. demo                        - Cử nhân HTTT          - ĐH Đại Nam cấp.',
            ],
        },
        {
            question: 'demo',
            answer: [
                '1. demo                       - Học 4 năm    - Học 03 kỳ/năm.',
                '2. demo                    - Học 3,5 năm - Học 03 kỳ/năm.',
                '3. demo                       - Học 3,5 năm - Học 03 kỳ/năm.',
                'Các ngành có thời gian đào tạo ngắn, tận dụng nhiều thời gian học tập, thực tập, trải nghiệm tại các doanh nghiệp công nghệ.',
                'Sinh viên ra trường sớm từ 0,5 – 1 năm, tiết kiệm hàng trăm triệu đồng chi phí ăn ở, sinh hoạt trong quá trình học đại học; tiếp cận thị trường lao động sớm; tiết kiệm thời gian học lên Thạc sĩ, Tiến sĩ…',
            ],
        },
    ];

    return (
        <div className="flex flex-col w-full items-center justify-center px-8 pb-8 z-30">
            <div className="w-full bg-slate-100 rounded-lg pb-8">
                <div className="w-[90%] my-0 mx-auto p-5">
                    <h1 className="w-full text-2xl lg:text-4xl font-bold text-center">FAQ</h1>
                    <Collapse accordion>
                        {faqData.map((item, index) => (
                            <Panel header={item.question} key={index}>
                                {item.answer.map((para, pIndex) => (
                                    <p key={pIndex}>{para}</p>
                                ))}
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
