import {Collapse} from 'antd'

const { Panel } = Collapse;
function FAQ() {

    const faqData = [
        {
          question: 'Làm thế nào để trở thành sinh viên khoa CNTT trường Đại học Đại Nam?',
          answer: ['Năm 2024, khoa CNTT trường Đại học Đại Nam (mã trường DDN) tuyển sinh 1.000 chỉ tiêu hệ đại học chính quy ở các ngành CNTT (800 chỉ tiêu), Khoa học máy tính (100 chỉ tiêu), Hệ thống thông tin (100 chỉ tiêu) theo 03 phương thức xét tuyển.',
            '- Phương thức 1: sử dụng kết quả 3 môn từ kết quả kỳ thi tốt nghiệp THPT theo tổ hợp đăng ký để xét tuyển.'
            ,'- Phương thức 2: sử dụng kết quả học bạ, điểm 3 môn từ kết quả học tập lớp 12 THPT theo tổ hợp đăng ký để xét tuyển.'
            ,'- Phương thức 3: xét tuyển thẳng theo quy định của Bộ Giáo dục và Đào tạo và nhà trường.'
          ]
        },
        {
          question: 'Sứ mệnh của khoa Công nghệ thông tin',
          answer: ['Đào tạo để người học ra trường có cuộc sống tốt và là công dân tốt, là lực lượng lao động khoa học – công nghệ đi đầu  trong xã hội.']
        },
        {
          question: 'Mục tiêu phát triển của khoa Công nghệ thông tin',
          answer: ['Đến năm 2030, Khoa Công nghệ thông tin trường Đại học Đại Nam là cơ sở đào tạo tin cậy hàng đầu Việt Nam về Công nghệ thông tin, Khoa học máy tính, Hệ thống thông tin mà nổi bật là năng lực "Khởi nghiệp và đổi mới sáng tạo về công nghệ".'
          ]
        },
        {
            question: 'Giá trị bằng cấp',
            answer: ['1. Ngành Khoa học máy tính                       - Kỹ sư KHMT             - ĐH Đại Nam cấp.',
              '2. Ngành Công nghệ thông tin                     - Cử nhân CNTT         - ĐH Đại Nam cấp.',
              '3. Ngành Hệ thống thông tin                        - Cử nhân HTTT          - ĐH Đại Nam cấp.'
            ]
          },
          {
            question: 'Thời gian đào tạo',
            answer: ['1. Ngành Khoa học máy tính                       - Học 4 năm    - Học 03 kỳ/năm.',
              '2. Ngành Công nghệ thông tin                     - Học 3,5 năm - Học 03 kỳ/năm.',
              '3. Ngành Hệ thống thông tin                        - Cử nhân HTTT          - ĐH Đại Nam cấp.',
              'Các ngành có thời gian đào tạo ngắn, tận dụng nhiều thời gian học tập, thực tập, trải nghiệm tại các doanh nghiệp công nghệ.',
              'Sinh viên ra trường sớm từ 0,5 – 1 năm, tiết kiệm hàng trăm triệu đồng chi phí ăn ở, sinh hoạt trong quá trình học đại học; tiếp cận thị trường lao động sớm; tiết kiệm thời gian học lên Thạc sĩ, Tiến sĩ…'
            ]
          },
          {
            question: '05 đặc trưng về đào tạo Công nghệ thông tin trường Đại học Đại Nam',
            answer: ['Công nghệ thông tin (CNTT) là một trong những ngành đào tạo mũi nhọn của trường Đại học Đại Nam, có số lượng sinh viên theo học rất lớn. Ngành học này thu hút sinh viên bởi cơ hội việc làm lớn, mức thu nhập cao, chương trình đào tạo đổi mới, phương pháp giảng dạy linh hoạt.',
              '1. Chuẩn đầu ra bám sát nhu cầu thực tiễn',
              '2. Đào tạo chuyên ngành công nghệ thông tin ngay từ học kỳ đầu',
              '3. Các năm học đạt được theo các chuẩn chuyên ngành',
              '4. Các học kỳ sinh viên được học và thực tập tại xưởng thực hành tại trường',
              '5. Hợp tác với nhiều đối tác là doanh nghiệp, cơ sở nghiên cứu trong và ngoài nước'
            ]
          },
          {
            question: 'Nét đặc sắc trong chương trình đào tạo của các ngành',
            answer: ['- Ngành Khoa học máy tính:',
              'Ngành Khoa học máy tính (KHMT) tập trung đào tạo các học phần về trí tuệ nhân tạo, học máy, học sâu, dữ liệu lớn, phân tích dữ liệu, trực quan hóa dữ liệu, xử lý ngôn ngữ tự nhiên.',
              '- Ngành Công nghệ thông tin:',
              'Ngành Công nghệ thông tin (CNTT) tập trung đào tạo sâu về kỹ thuật lập trình, thiết kế phần mềm, thiết kế và xây dựng các hệ thống thông minh, Ngành CNTT được phân thành 02 chuyên ngành:',
              '1. Phát triển phần mềm (Software Development);',
              '2. Lập trình nhúng và IoT (Embbed Programming and IoT).',
              '- Ngành Hệ thống thông tin:',
              'Ngành Hệ thống thông tin (HTTT) tập trung đào tạo sâu về thiết kế hệ thống thông tin, tối ưu hiệu năng hoạt động của hệ thống thông tin, quản trị dữ liệu, phân tích dữ liệu, quản trị mạng và bảo mật hệ thống.'
            ]
          },
      ];
      
    return ( 
    <div className='flex flex-col w-full items-center justify-center px-8 pb-8 z-30'>
        <div className="w-full bg-slate-100 rounded-lg pb-8">
            <div className="w-[90%] my-0 mx-auto p-5">
                <h1 className="w-full text-2xl lg:text-4xl font-bold text-center">FAQ</h1>
                <Collapse accordion>
                {faqData.map((item,index)=>(
                    <Panel header={item.question} key={index}>
                        {item.answer.map((para,pIndex)=>(
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