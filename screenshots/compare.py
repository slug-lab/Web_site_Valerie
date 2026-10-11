import sys
from PIL import Image
ref, shot, out = sys.argv[1:4]
a = Image.open(ref).convert('RGB'); b = Image.open(shot).convert('RGB').crop((0, 0, 1366, 768))
c = Image.new('RGB', (1366, 768 * 2 + 8), 'red'); c.paste(a, (0, 0)); c.paste(b, (0, 776)); c.save(out)
