import HeaderAdmin from './Header';

export default function AdminLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderAdmin />
            <div className="flex flex-1 flex-col">{children}</div>
        </div>
    );
}
