"use client";
import { Mine } from "@/pages/mine";
import { Button } from "@/components/Button";
export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <main>
      <Mine />
      <p className="p-1">Lương Hoàng Bảo Trân</p>
      <Button onClick={() => handleClick}>Thêm mới</Button>
      <Button onClick={() => handleClick}>Sửa</Button>
      <Button onClick={() => handleClick}>Xóa</Button>
      <p>danh sách các icon</p>
      <i className="fas fa-camera"></i>
      <i className="fas fa-home"></i>
    </main>
  );
}
