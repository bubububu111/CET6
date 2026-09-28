"""
六级听力音频批量生成脚本
使用 edge-tts (Microsoft Edge TTS) 生成自然英语语音
"""
import asyncio
import edge_tts
import os
import json
import re

# 输出目录
BASE_DIR = r"D:\18023\Documents\Zcode\cet6-prep\audio"

# 使用自然的英语女声（Microsoft 在线语音）
VOICE = "en-US-AriaNeural"
RATE = "-5%"  # 稍慢，适合听力练习


def extract_listening_data():
    """从 JS 文件中提取听力文本"""
    import re
    
    data = {"shortConvs": [], "longConvs": [], "passages": [], "dictation": []}
    
    # 读取基础文件
    files = [
        r"D:\18023\Documents\Zcode\cet6-prep\data\listening.js",
        r"D:\18023\Documents\Zcode\cet6-prep\data\listening_ext.js"
    ]
    
    all_text = ""
    for f in files:
        if os.path.exists(f):
            with open(f, "r", encoding="utf-8") as fp:
                all_text += fp.read()
    
    # 提取短对话
    short_pattern = r'id:\s*"(sc\d+)"[^}]+title:\s*"([^"]+)"[^}]+lines:\s*\[([^\]]+)\]'
    for m in re.finditer(short_pattern, all_text, re.DOTALL):
        sid = m.group(1)
        lines_raw = m.group(3)
        lines = re.findall(r't:\s*"([^"]+)"', lines_raw)
        full_text = " ".join(lines)
        data["shortConvs"].append({"id": sid, "text": full_text})
    
    # 提取长对话
    long_pattern = r'id:\s*"(lc\d+)"[^}]+title:\s*"([^"]+)"[^}]+lines:\s*\[([^\]]+)\]'
    for m in re.finditer(long_pattern, all_text, re.DOTALL):
        lid = m.group(1)
        lines_raw = m.group(3)
        lines = re.findall(r't:\s*"([^"]+)"', lines_raw)
        full_text = " ".join(lines)
        data["longConvs"].append({"id": lid, "text": full_text})
    
    # 提取短文理解
    passage_pattern = r'id:\s*"(lp\d+)"[^}]+title:\s*"([^"]+)"[^}]+text:\s*"([^"]+)"'
    for m in re.finditer(passage_pattern, all_text, re.DOTALL):
        pid = m.group(1)
        text = m.group(3).replace("\\n", " ")
        data["passages"].append({"id": pid, "text": text})
    
    # 提取听写填空
    dict_pattern = r'id:\s*"(dt\d+)"[^}]+title:\s*"([^"]+)"[^}]+text:\s*"([^"]+)"'
    for m in re.finditer(dict_pattern, all_text, re.DOTALL):
        did = m.group(1)
        text = m.group(2).replace("\\n", " ")
        text = re.sub(r'\{\{[^}]+\}\}', "_____", text)  # 挖空处留停顿
        data["dictation"].append({"id": did, "text": text})
    
    return data


async def generate_audio(text, output_path, voice=VOICE, rate=RATE):
    """生成单个音频文件"""
    try:
        communicate = edge_tts.Communicate(text, voice, rate=rate)
        await communicate.save(output_path)
        return True
    except Exception as e:
        print(f"  失败: {e}")
        return False


async def main():
    data = extract_listening_data()
    
    total = (len(data["shortConvs"]) + len(data["longConvs"]) + 
             len(data["passages"]) + len(data["dictation"]))
    print(f"共需生成 {total} 个音频文件")
    print(f"  短对话: {len(data['shortConvs'])}")
    print(f"  长对话: {len(data['longConvs'])}")
    print(f"  短文理解: {len(data['passages'])}")
    print(f"  听写填空: {len(data['dictation'])}")
    print()
    
    success = 0
    fail = 0
    
    # 短对话
    print("=== 生成短对话音频 ===")
    for item in data["shortConvs"]:
        out_path = os.path.join(BASE_DIR, "short", f"{item['id']}.mp3")
        if os.path.exists(out_path):
            print(f"  跳过 {item['id']} (已存在)")
            success += 1
            continue
        print(f"  生成 {item['id']}...", end=" ")
        ok = await generate_audio(item["text"], out_path)
        if ok:
            print("✓")
            success += 1
        else:
            print("✗")
            fail += 1
    
    # 长对话
    print("\n=== 生成长对话音频 ===")
    for item in data["longConvs"]:
        out_path = os.path.join(BASE_DIR, "long", f"{item['id']}.mp3")
        if os.path.exists(out_path):
            print(f"  跳过 {item['id']} (已存在)")
            success += 1
            continue
        print(f"  生成 {item['id']}...", end=" ")
        ok = await generate_audio(item["text"], out_path)
        if ok:
            print("✓")
            success += 1
        else:
            print("✗")
            fail += 1
    
    # 短文理解
    print("\n=== 生成短文理解音频 ===")
    for item in data["passages"]:
        out_path = os.path.join(BASE_DIR, "passage", f"{item['id']}.mp3")
        if os.path.exists(out_path):
            print(f"  跳过 {item['id']} (已存在)")
            success += 1
            continue
        print(f"  生成 {item['id']}...", end=" ")
        ok = await generate_audio(item["text"], out_path)
        if ok:
            print("✓")
            success += 1
        else:
            print("✗")
            fail += 1
    
    # 听写填空
    print("\n=== 生成听写填空音频 ===")
    for item in data["dictation"]:
        out_path = os.path.join(BASE_DIR, "dictation", f"{item['id']}.mp3")
        if os.path.exists(out_path):
            print(f"  跳过 {item['id']} (已存在)")
            success += 1
            continue
        print(f"  生成 {item['id']}...", end=" ")
        ok = await generate_audio(item["text"], out_path)
        if ok:
            print("✓")
            success += 1
        else:
            print("✗")
            fail += 1
    
    print(f"\n=== 完成 ===")
    print(f"成功: {success}, 失败: {fail}, 总计: {total}")


if __name__ == "__main__":
    asyncio.run(main())
