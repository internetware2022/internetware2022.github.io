#!/usr/bin/env python3

import markdown, jinja2
from pathlib import Path

SRC = Path('src/')

TEMPLATE = (SRC / 'template.html').read_text()

kwargs = { md_file.stem: markdown.markdown(md_file.read_text())
    for md_file in SRC.glob('**/*.md') }

Path('index.html').write_text(jinja2.Template(TEMPLATE).render(**kwargs))
