import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStoryApi from '../../services/storyServices';
import Header from '../header/Header';

const StoryInfo = () => {
    const { id } = useParams();
    const { getStoryById } = useStoryApi();
    const [story, setStory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('chapters'); // 'chapters' hoặc 'comments'

    useEffect(() => {
        fetchStoryDetails();
    }, [id]);

    const fetchStoryDetails = async () => {
        try {
            const response = await getStoryById(id);
            if (response.status === 200) {
                setStory(response.data.story);
            }
        } catch (error) {
            toast.error('Không thể tải thông tin sách', { autoClose: 3000 });
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
            </div>
        );
    }

    if (!story) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Không tìm thấy thông tin sách</p>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-bgColor mt-20">
                <div className="container mx-auto px-4 py-8">
                    {/* Phần thông tin cơ bản */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Ảnh bìa */}
                            <div>
                                <img
                                    src={story.image || 'https://via.placeholder.com/300x400'}
                                    alt={story.title}
                                    className="w-[200px] h-[267px] object-cover rounded-lg"
                                />
                            </div>

                            {/* Thông tin sách */}
                            <div className="w-full md:w-2/3">
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">{story.title}</h1>
                                <div className="space-y-3">
                                    <p className="text-black text-[18px]">
                                        <span className="font-semibold">Tác giả:</span> {story.authorName}
                                    </p>
                                    <p className="text-black text-[18px]">
                                        <span className="font-semibold">Thể loại:</span> {story.genre}
                                    </p>
                                    <p className="text-black text-[18px]">
                                        <span className="font-semibold">Trạng thái:</span>{' '}
                                        <span className={story.status === 'Hoàn thành' ? 'text-green-600' : 'text-yellow-600'}>
                                            {story.status === 'Hoàn thành' ? 'Hoàn thành' : 'Đang ra'}
                                        </span>
                                    </p>
                                </div>
                                <p className="mt-4 text-black text-[18px]">{story.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tab chương và bình luận */}
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="border-b">
                            <div className="flex">
                                <button
                                    className={`px-6 py-3 text-sm font-medium ${
                                        activeTab === 'chapters'
                                            ? 'text-secondary border-b-2 border-secondary'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('chapters')}
                                >
                                    Danh sách chương
                                </button>
                                <button
                                    className={`px-6 py-3 text-sm font-medium ${
                                        activeTab === 'comments'
                                            ? 'text-secondary border-b-2 border-secondary'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('comments')}
                                >
                                    Bình luận
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            {activeTab === 'chapters' ? (
                                <div className="space-y-4">
                                    {story.chapters?.map((chapter) => (
                                        <div
                                            key={chapter.id}
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <div>
                                                <h3 className="font-medium text-gray-800">{chapter.title}</h3>
                                                <p className="text-sm text-gray-500">
                                                    Đăng ngày: {new Date(chapter.createdAt).toLocaleDateString('vi-VN')}
                                                </p>
                                            </div>
                                            <a
                                                href={`/chapter/${chapter.id}`}
                                                className="text-secondary hover:text-secondaryOne"
                                            >
                                                Đọc
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {story.comments?.map((comment) => (
                                        <div key={comment.id} className="border-b pb-4">
                                            <div className="flex items-center mb-2">
                                                <img
                                                    src={comment.user.avatar || 'https://via.placeholder.com/40'}
                                                    alt={comment.user.username}
                                                    className="w-10 h-10 rounded-full mr-3"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">{comment.user.username}</p>
                                                    <p className="text-sm text-gray-500">
                                                        {new Date(comment.createdAt).toLocaleDateString('vi-VN')}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-gray-700">{comment.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryInfo; 