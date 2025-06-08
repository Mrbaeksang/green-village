import customtkinter as ctk
from tkinter import filedialog, messagebox
import shutil, re, os
from datetime import date
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent  # src/
PRODUCT_PATH = BASE_DIR / "data" / "products.ts"
COMMUNITY_PATH = BASE_DIR / "data" / "community.ts"
PRODUCT_IMAGE_PATH = BASE_DIR.parent / "public" / "products"
COMMUNITY_IMAGE_PATH = BASE_DIR.parent / "public" / "community"

def get_next_id(ts_path: Path) -> int:
    try:
        content = ts_path.read_text(encoding="utf-8")
        ids = re.findall(r'id:\s*(\d+),', content)
        return max(map(int, ids)) + 1 if ids else 1
    except FileNotFoundError:
        messagebox.showwarning("⚠ 경고", f"{ts_path.name} 파일이 없어 ID는 1부터 시작합니다.")
        return 1
    except Exception as e:
        messagebox.showerror("❗ 오류", f"ID 계산 중 오류: {e}")
        return 1

class GreenVillageApp(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.title("🌱 녹색마을 콘텐츠 등록기")
        self.geometry("800x900")
        # self.set_appearance_mode("System")

        self.mode_var = ctk.StringVar(value="제품")
        self.title_var = ctk.StringVar()
        self.desc_var = ctk.StringVar()
        self.category_var = ctk.StringVar()
        self.date_var = ctk.StringVar(value=date.today().isoformat())
        self.folder_var = ctk.StringVar()

        self.main_frame = ctk.CTkScrollableFrame(self)
        self.main_frame.pack(fill="both", expand=True, padx=20, pady=20)

        self._setup_fields()
        self.mode_var.trace_add("write", self._toggle_fields)
        self._toggle_fields()
    def _add_label_entry(self, label, var, parent=None, placeholder=""):
        if parent is None:
            parent = self.main_frame
        ctk.CTkLabel(parent, text=label, anchor="w").pack(fill="x", pady=(5, 0))
        ctk.CTkEntry(parent, textvariable=var, placeholder_text=placeholder).pack(fill="x", pady=(0,10))

    def _setup_fields(self):
        ctk.CTkLabel(self.main_frame, text="등록 유형", anchor="w").pack(fill="x")
        ctk.CTkOptionMenu(self.main_frame, variable=self.mode_var, values=["제품", "커뮤니티"]).pack(fill="x", pady=5)
        self._add_label_entry("제목", self.title_var, placeholder="예: XAG P60 농업용 드론")

        self.product_frame = ctk.CTkFrame(self.main_frame, fg_color="transparent")
        self._add_label_entry("요약 설명", self.desc_var, self.product_frame, placeholder="예: 2025년형 30L 스마트 드론")
        self._add_label_entry("카테고리", self.category_var, self.product_frame, placeholder="예: 농업용 드론")
        ctk.CTkLabel(self.product_frame, text="제품 사양 (key:value)").pack(fill="x")
        self.specs_text = ctk.CTkTextbox(self.product_frame, height=100)
        self.specs_text.insert("1.0", "예:\n배터리: 고용량 10000mAh\n무게: 5kg")
        self.specs_text.pack(fill="x", pady=(0, 10))

        self.community_frame = ctk.CTkFrame(self.main_frame, fg_color="transparent")
        self._add_label_entry("작성일자 (YYYY-MM-DD)", self.date_var, self.community_frame, placeholder="예: 2025-06-08")

        ctk.CTkLabel(self.main_frame, text="본문 내용 (마크다운 지원 + 이미지명)").pack(fill="x")
        self.content_text = ctk.CTkTextbox(self.main_frame, height=200)
        self.content_text.insert("1.0", "예:\n오늘 소개할 제품은 1.png 입니다.\n설명은 아래 링크를 참고하세요.")
        self.content_text.pack(fill="x", pady=(0, 10))

        ctk.CTkLabel(self.main_frame, text="이미지 폴더 선택").pack(fill="x", pady=(10, 0))
        folder_frame = ctk.CTkFrame(self.main_frame, fg_color="transparent")
        folder_frame.pack(fill="x", pady=5)
        ctk.CTkEntry(folder_frame, textvariable=self.folder_var, placeholder_text="📁 이미지 폴더를 선택하세요").pack(side="left", fill="x", expand=True)
        ctk.CTkButton(folder_frame, text="📁 선택", command=self._select_folder).pack(side="left", padx=6)

        ctk.CTkButton(self.main_frame, text="✅ 등록하기", command=self._register_entry).pack(pady=15)
        ctk.CTkButton(self.main_frame, text="ℹ️ 사용법 보기", command=self._show_help).pack()

    def _toggle_fields(self, *args):
        self.product_frame.pack_forget()
        self.community_frame.pack_forget()
        if self.mode_var.get() == "제품":
            self.product_frame.pack(fill="x", pady=(10, 0))
        else:
            self.community_frame.pack(fill="x", pady=(10, 0))

    def _select_folder(self):
        folder = filedialog.askdirectory()
        if folder:
            self.folder_var.set(folder)

    def _register_entry(self):
        mode = self.mode_var.get()
        title = self.title_var.get().strip()
        content_raw = self.content_text.get("1.0", "end-1c").strip()
        folder_path = self.folder_var.get().strip()

        if not (title and content_raw and folder_path):
            messagebox.showerror("입력 오류", "제목, 본문, 이미지 폴더는 필수 입력입니다.")
            return

        try:
            ts_path = PRODUCT_PATH if mode == "제품" else COMMUNITY_PATH
            image_dir = PRODUCT_IMAGE_PATH if mode == "제품" else COMMUNITY_IMAGE_PATH
            public_prefix = "products" if mode == "제품" else "community"

            entry_id = get_next_id(ts_path)
            entry_folder = image_dir / str(entry_id)
            entry_folder.mkdir(parents=True, exist_ok=True)

            files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
            for f in files:
                shutil.copy(Path(folder_path) / f, entry_folder / f)

            # ✅ 썸네일 처리
            thumbnail = next((f"/{public_prefix}/{entry_id}/{t}" for t in ["main.png", "main.jpg"] if t in files), "")

            # ✅ 본문 삽입 이미지 (main 제외)
            content_images = [f for f in files if f not in ["main.png", "main.jpg"]]
            image_markdown = "\n\n" + "\n\n".join(
                f"![사진{i+1}](/{public_prefix}/{entry_id}/{f})" for i, f in enumerate(content_images)
            ) if content_images else ""

            content_parsed = content_raw + image_markdown

            if mode == "제품":
                desc = self.desc_var.get().strip()
                cat = self.category_var.get().strip()
                specs_lines = self.specs_text.get("1.0", "end-1c").splitlines()
                specs_str = ",\n            ".join([
                    f'"{k.strip()}": "{v.strip()}"'
                    for line in specs_lines if ":" in line
                    for k, v in [line.split(":", 1)]
                ])

                block = f"""{{
        id: {entry_id},
        title: '{title}',
        description: '{desc}',
        content: `{content_parsed}`,
        images: [],
        thumbnail: '{thumbnail}',
        category: '{cat}',
        specifications: {{
            {specs_str}
        }}
    }}"""
            else:
                date_val = self.date_var.get().strip() or date.today().isoformat()
                block = f"""{{
        id: {entry_id},
        title: '{title}',
        content: `{content_parsed}`,
        thumbnail: '{thumbnail}',
        date: '{date_val}'
    }}"""

            lines = ts_path.read_text(encoding="utf-8").splitlines()
            insert_index = next(i for i in range(len(lines)-1, -1, -1) if lines[i].strip().endswith("];"))

            if any("{" in l for l in lines[:insert_index] if l.strip().startswith("{")):
                block = "," + block

            lines.insert(insert_index, "  " + block)
            ts_path.write_text("\n".join(lines), encoding="utf-8")

            messagebox.showinfo("등록 완료", f"{mode} #{entry_id} 등록 성공!")

        except Exception as e:
            messagebox.showerror("등록 실패", str(e))




    def _show_help(self):
        messagebox.showinfo("ℹ️ 사용법 안내", """
📦 제품 등록
• 요약 설명, 카테고리, 사양(key:value)은 카드 표시용
• 썸네일: main.png → 없으면 첫 이미지 자동 사용
• 저장 위치: public/products + src/data/products.ts

📝 커뮤니티 등록
• 작성일자: 기본값은 오늘 날짜
• 저장 위치: public/community + src/data/community.ts

🖼️ 본문 이미지 치환
본문에 1.png 등 이미지명 작성 시 자동 경로 적용됨
        """)

if __name__ == "__main__":
    app = GreenVillageApp()
    app.mainloop()
