import anh1 from '../../assets/o3djdjq0tzxy76vnh0z320240115042507_thump.jpg';
import anh2 from '../../assets/6alqk0tbxvmh72ov51il20231205065453_thump.jpg';
import anh3 from '../../assets/bieoyveubm5r8d35bbcc20240228092829_thump.jpg';
import anh4 from '../../assets/jrz7falci9ohz3quwa3820230601011109_thump.jpg';
import anh5 from '../../assets/tgsr6q056c80wytv0n4720221227011757_thump.jpg';

const members = [
    {
        name: 'Thành viên 1',
        position: 'Mô tả Thành viên 1',
        image: anh1,
    },
    {
        name: 'Thành viên 2',
        position: 'Mô tả Thành viên 2',
        image: anh2,
    },
    {
        name: 'Thành viên 3',
        position: 'Mô tả Thành viên 3',
        image: anh3,
    },
    {
        name: 'Thành viên 4',
        position: 'Mô tả Thành viên 4',
        image: anh4,
    },
    {
        name: 'Thành viên 5',
        position: 'Mô tả Thành viên 5',
        image: anh5,
    },
];

export default function Memberlist() {
    return (
        <div className="flex flex-col">
            <h3 className="text-primary text-4xl font-bold self-center md:mb-6 mb-10">THÀNH VIÊN</h3>

            <div className="md:mb-6 mb-2 flex flex-col items-end px-6">
                <button className="md:px-4 px-3 py-2 rounded-full bg-orange-400 font-medium md:text-md text-sm text-neutral-500">
                    Tìm hiểu thêm <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 gap-4 px-6 mb-10">
                {members.map((item, index) => (
                    <div key={index}>
                        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-4 w-full h-96 flex flex-col">
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4" />
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-700">{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
