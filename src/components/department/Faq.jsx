import {Collapse} from 'antd'

const { Panel } = Collapse;
function FAQ() {

    const faqData = [
        {
          question: 'Liên chi Đoàn Khoa CNTT1 là một tổ chức thế nào??',
          answer: ['Liên chi Đoàn Khoa CNTT1 (có tên gọi thân mật ITIS) là Liên Chi Đoàn lớn nhất Học viện, trực thuộc Khoa CNTT1. Hiện tại Liên chi Đoàn đang có khoảng 100 thành viên và khoảng 5000 Đoàn viên của các ngành CNTT, ATTT, KHMT, CNTT CLC, CNTT Việt - Nhật.'
            ,'Trong suốt quá trình hình thành và phát triển, Liên chi Đoàn đã và đang đồng hành cùng Khoa CNTT1 nỗ lực hết mình với mục tiêu đẩy mạnh các hoạt động học tập, nghiên cứu khoa học, đồng thời tạo ra nhiều sân chơi giúp các bạn sinh viên trong khoa thỏa mãn đam mê, giải tỏa căng thẳng và luôn đồng hành cùng các bạn sinh viên trong khoa trong quá trình học tập tại Học viện.'
          ]
        },
        {
          question: 'Liên chi khác CLB như thế nào?',
          answer: ['CLB (Câu lạc bộ) và Liên chi Đoàn Khoa (LCK) là hai loại tổ chức hoạt động trong môi trường trường học, nhưng chúng có mục tiêu và hoạt động khác nhau:',
            'Về mục tiêu:','- Liên chi: Liên chi Đoàn Khoa thường có mục tiêu rộng hơn và thường liên quan đến công tác thanh thiếu niên và sinh viên, cũng như phát triển xã hội. LCK thường là tổ chức đại diện cho toàn bộ khoa hoặc ngành học trong một trường đại học hoặc cao đẳng. Mục tiêu của LCK bao gồm việc thúc đẩy tình đoàn kết, tổ chức các hoạt động văn hóa và xã hội, và tham gia vào các hoạt động cộng đồng và công tác xã hội.'
            ,'- CLB: Câu lạc bộ thường tập trung vào các sở thích hoặc mục tiêu cụ thể của các thành viên. Các thành viên tham gia CLB thường có cùng sở thích, ví dụ: CLB thể thao, CLB IT,... Mục tiêu chính của CLB là tạo ra một môi trường cho các thành viên thực hiện và thảo luận về sở thích hoặc mục tiêu đó.'
            ,'Về phạm vi:','- Liên chi: LCK thường hoạt động trên phạm vi lớn hơn, đại diện cho toàn bộ khoa hoặc ngành học trong một trường học và thường được tổ chức và quản lý bởi trường hoặc khoa.'
            ,'- CLB: Các CLB thường có phạm vi hẹp hơn và tập trung vào một lĩnh vực cụ thể hoặc sở thích chung của các thành viên. Các CLB thường được tổ chức và quản lý bởi các thành viên tự nguyện hoặc sinh viên.'
            ,'Tóm lại, CLB và LCK đều là các tổ chức hoạt động trong môi trường trường học nhưng có mục tiêu và phạm vi khác nhau, với LCK thường có mục tiêu và phạm vi rộng hơn và liên quan đến công tác thanh thiếu niên và sinh viên, trong khi CLB tập trung vào các sở thích hoặc mục tiêu cụ thể của các thành viên.'           
          ]
        },
        {
          question: 'Hình thức tuyển CTV Liên chi?',
          answer: ['CTV Liên chi Đoàn Khoa Công nghệ Thông tin 1 được tuyển thông qua 3 vòng xét duyệt:'
            ,'Vòng CV: Tuyển chọn qua thông tin trên CV được các ứng cử viên điền qua form đăng ký.'
            ,'Vòng phỏng vấn: Qua việc phỏng vấn, chúng tôi hiểu rõ hơn về các ứng cử viên, từ đó chọn ra người phù hợp để đi tiếp.'
            ,'Vòng Training: Các CTV tập sự sẽ được thử thách ở vòng Training với một số hoạt động chung, mang tính tập thể. Qua đó các bạn sẽ xây dựng được tinh thần đoàn kết, hỗ trợ nhau trong công việc, bộc lộ kỹ năng cá nhân…'
            ,'Vượt qua vòng Training thì xin chúc mừng các bạn vì đã trở thành CTV chính thức của Liên chi Đoàn Khoa Công nghệ Thông tin 1.'
          ]
        },
        {
            question: 'Liên chi Đoàn Khoa CNTT1 tuyển CTV những khóa nào?',
            answer: ['Hằng năm, Liên chi Đoàn chủ yếu tuyển các bạn sinh viên năm nhất. Ngoài ra Liên chi cũng rất chào đón các bạn năm 2 trở lên có mong muốn tham gia vào Liên chi, trao nhiệt huyết của mình để cùng Liên chi phát triển.'
            ]
          },
          {
            question: 'Liên chi là tổ chức chạy sự kiện, vậy có dạy lập trình không?',
            answer: ['ITIS không phải CLB học thuật mà là nơi phát triển các kỹ năng mềm và tổ chức sự kiện của khoa. Tuy nhiên khi các bạn vào Liên chi các bạn sẽ được học các lớp học code như C/C++ và có thể là các khóa thuật toán cùng với các tài liệu chỉ lưu hành nội bộ được soạn và dạy bởi những anh chị khóa trên.']
          },
          {
            question: 'Có được tham gia cả Liên chi và CLB không?',
            answer: ['Tất nhiên là có! Nếu có thể, bạn hãy thử sức mình với 2 vị trí ở 2 tổ chức khác nhau nhé. Ngoài Liên chi thì các CLB về Công nghệ thông tin ở Học viện chúng mình rất mạnh về học thuật và cũng có rất nhiều hoạt động sôi nổi đó nhé']
          },
          {
            question: 'Chưa có kỹ năng về tổ chức sự kiện có thể tham gia Liên chi được hay không?',
            answer: ['Khi vào Liên chi các bạn sẽ được training những kiến thức, kỹ năng cần thiết trước khi tham gia vào các sự kiện.'
            ]
          },
          {
            question: 'Nhận được quyền lợi gì khi tham gia vào Liên chi?',
            answer: ['Được sự hỗ trợ trực tiếp từ các thầy cô trong khoa, khi trở thành thành viên của Liên chi, các bạn sẽ được tiếp xúc và làm việc trực tiếp cùng các thầy cô. Được tham gia các hoạt động vui chơi được tổ chức một cách chuyên nghiệp. Ngoài ra sẽ được học các kĩ năng như: kĩ năng tổ chức sự kiện, kỹ năng thuyết trình, kĩ năng làm việc nhóm,... Đồng thời các bạn sẽ trực tiếp tham gia tổ chức cá nhân hoạt động quy mô Khoa và Học viện. Đặc biệt các bạn còn được các anh chị hỗ trợ trong việc học C/C++, thuật toán cùng các môn học khác.'
            ]
          }

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