import os
import base64
import io
from PIL import Image

def generate():
    source_path = 'public/images/revora-icon-transparent.png'
    if not os.path.exists(source_path):
        source_path = 'frontend/public/images/revora-icon-transparent.png'
    
    im = Image.open(source_path)
    alpha = im.split()[3]
    # mask out any stray artifact below y=580
    w, h = im.size
    pixels = alpha.load()
    for x in range(300):
        for y in range(580, h):
            pixels[x, y] = 0
    bbox = alpha.getbbox()
    mark = im.crop(bbox) # exact clean mark (314 x 342)
    print(f"Loaded master mark: {mark.size}")

    def create_tile(size, padding_ratio=0.12):
        # SOLID white background tile
        canvas = Image.new('RGBA', (size, size), (255, 255, 255, 255))
        avail_w = int(size * (1 - 2 * padding_ratio))
        avail_h = int(size * (1 - 2 * padding_ratio))
        
        ratio = min(avail_w / mark.size[0], avail_h / mark.size[1])
        target_w = max(1, int(mark.size[0] * ratio))
        target_h = max(1, int(mark.size[1] * ratio))
        
        resized = mark.resize((target_w, target_h), Image.Resampling.LANCZOS)
        x = (size - target_w) // 2
        y = (size - target_h) // 2
        canvas.paste(resized, (x, y), resized)
        return canvas

    out_dir = 'public' if os.path.exists('public') else 'frontend/public'

    # 48x48
    im48 = create_tile(48)
    im48.save(os.path.join(out_dir, 'favicon-48x48.png'), 'PNG')
    print("Created favicon-48x48.png")

    # 96x96
    im96 = create_tile(96)
    im96.save(os.path.join(out_dir, 'favicon-96x96.png'), 'PNG')
    print("Created favicon-96x96.png")

    # 192x192
    im192 = create_tile(192)
    im192.save(os.path.join(out_dir, 'favicon-192x192.png'), 'PNG')
    print("Created favicon-192x192.png")

    # 180x180 apple-touch-icon
    im180 = create_tile(180)
    im180.save(os.path.join(out_dir, 'apple-touch-icon.png'), 'PNG')
    print("Created apple-touch-icon.png")

    # Multi-size ICO: 16, 32, 48
    im16 = create_tile(16)
    im32 = create_tile(32)
    # Pillow saves ICO with sizes list
    im48.save(os.path.join(out_dir, 'favicon.ico'), format='ICO', sizes=[(16, 16), (32, 32), (48, 48)], append_images=[img.convert('RGBA') for img in [im16, im32]])
    print("Created favicon.ico (16, 32, 48)")

    # Fallback favicon.png
    im96.save(os.path.join(out_dir, 'favicon.png'), 'PNG')

    # SVG favicon with solid white tile
    b = io.BytesIO()
    im192.save(b, format='PNG')
    b64_png = base64.b64encode(b.getvalue()).decode('utf-8')
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <rect width="192" height="192" rx="24" fill="#FFFFFF"/>
  <image href="data:image/png;base64,{b64_png}" width="192" height="192"/>
</svg>'''
    with open(os.path.join(out_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("Created favicon.svg")

if __name__ == '__main__':
    generate()
