export default function NotFound() {
  return (
    <div className="text-center text-white">
      <h1 className="mb-4 text-6xl font-bold">404 - Không tìm thấy trang</h1>
      <p className="text-gray-400">Trang bạn đang tìm kiếm không tồn tại.</p>
      <a href="/" className="bg-blue-500 mt-4 rounded px-4 py-2 text-white">
        Quay về trang chủ
      </a>
    </div>
  );
}
