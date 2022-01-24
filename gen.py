#!/usr/bin/env python3

import markdown, jinja2
from pathlib import Path

SRC = Path('src/')
TEMPLATE = (SRC / 'template.html').read_text()

sections = [
    ('home', 'Home'),
    ('program', 'Program'),
    ('keynote', 'Keynotes'),
    ('cfp', 'Call For Papers'),
    ('special', 'Special Issues'),
    ('dates', 'Important Dates'),
    ('committee', 'Committee'),
    ('venue', 'Venue and Access'),
    ('travel', 'Travel and Foods'),
    ('accommodation', 'Accommodation'),
]

def get_sections():
    for sec, desc in sections:
        md_html = markdown.markdown((SRC / f'{sec}.md').read_text())
        yield { 'id': sec, 'html': md_html, 'desc': desc }

Path('index.html').write_text(jinja2.Template(TEMPLATE).render(sections=list(get_sections())))
